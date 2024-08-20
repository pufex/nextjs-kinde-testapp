"use server"

import dbConnect from "@/lib/dbConnect"
import Post from "@/lib/models/PostModel"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const createPost = async (formData: FormData) => {

  const {isAuthenticated: checkAuthenticated} = getKindeServerSession()
  const isAuthenticated = await checkAuthenticated()
  if(!isAuthenticated)
    return redirect("/api/auth/login")

  return dbConnect()
    .catch(err => err)
    .then(async () => {
      const title = formData.get("title") as string
      const body = formData.get("body") as string
      await Post.create({title, body})
      revalidatePath("/posts")
    })
}
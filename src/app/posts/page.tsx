import PostsList from "@/components/PostList"
import { Suspense } from "react"

export default async function Page () {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl font-bold mb-5 md:text-5xl">
        All Posts
      </h1>
      
      <Suspense fallback="Loading">
        <PostsList />
      </Suspense>
    </main>
  )
}
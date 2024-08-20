import type { PostType } from "@/lib/models/PostModel";
import dbConnect from "@/lib/dbConnect";
import Post from "@/lib/models/PostModel";
import { cache } from "react";
import { unstable_cache } from "next/cache";


export const getPosts = unstable_cache(
  cache(
    async () => {
      return dbConnect()
        .catch(err => err)
        .then(async () => {
          const posts = await Post.find()
            .lean().exec()
          const refPosts: PostType[] = posts
            .map(post => ({
              ...post,
              id: post._id.toString()
            }))
          return refPosts
        })
    }
  ),
  ["posts"]
)

export const getPostById = unstable_cache(
  cache(
    async (post_id: string) => {
      return dbConnect()
        .catch(err => err)
        .then(async () => {
          const post = await Post.findById(post_id)
            .lean().exec()
          if(!post)
            return null
          const refPost: PostType = {
            ...post,
            id: post._id.toString()
          }
          return refPost
        })
    }
  ),
  ["posts", "post_id"]
)

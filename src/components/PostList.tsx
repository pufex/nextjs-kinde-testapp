import Link from "next/link";
import { getPosts } from "@/db/posts";

export default async function PostsList () {
  
  const posts = await getPosts()
  
  return <ul>
    {
      posts.map(post => (
        <li
          key={post.id}
          className="mb-5"
        >
          <Link href={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      ))
    }
  </ul>
}
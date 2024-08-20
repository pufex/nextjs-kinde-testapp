import { notFound } from "next/navigation";
import { sleep } from "@/lib/wait";
import { getPostById } from "@/db/posts";

type PageProps = {
  params: {id: string}
}

export default async function Page ({
  params: {
    id: post_id
  }
}: PageProps) {

  await sleep(1000)
  const post = await getPostById(post_id)

  if(!post)
  return notFound()

  return <main className="px-7 pt-24 text-center">
    <h1 className="text-5xl font-semibold mb-7">
      {post.title}
    </h1>
    <p className="max-w-[700px] mx-auto">
      {post.body}
    </p>

    {/* <UpvoteButton /> */}
  </main>
}
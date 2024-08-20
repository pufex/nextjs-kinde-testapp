import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server"
import CreatePostForm from "@/components/ExampleForm"

export default async function Page () {
  return <main className="text-center pt-16">
    <h1 className="text-4xl font-bold mb-5 md:text-5xl">
      Create post
    </h1>

    <CreatePostForm />
    
    <LogoutLink>
      Log Out
    </LogoutLink>
  </main>
}
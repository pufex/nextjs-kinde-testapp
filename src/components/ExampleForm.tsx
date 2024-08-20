import { createPost } from "@/actions/actions"

export default function ExampleForm () {
  return (
    <form 
      className="flex flex-col gap-2 max-w-[400px] mx-auto space-x-2 my-10"
      action={createPost}
    >
      <input 
        type="text" 
        name="title"  
        placeholder="Name the title."
        className="border rounded px-3 h-10" 
        />
      <textarea 
        name="body" 
        placeholder="Content of your post"
        className="border rounded px-3 py-2" 
        rows={6}
        required
      />
      <button className="h-10 bg-blue-500 px-5 rounded text-white">
        Submit
      </button>
    </form>
  )
}
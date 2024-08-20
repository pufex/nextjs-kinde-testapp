import { LoaderCircle } from "lucide-react";

export default function Loading () {
  return <main className="w-full h-[300px] grid place-items-center">
    <LoaderCircle 
      className="animate-spin"
      size={30}
      stroke="black"
    />
  </main>
}
"use client"

import { usePathname } from "next/navigation";

import { Cannabis } from "lucide-react";
import Link from "next/link";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create post"
  }
]

export default function Header () {
  const pathname = usePathname()

  return <header className="flex justify-between items-center py-4 px-7 border-b-0">
    <Link href="/">
      <Cannabis
        size={32}
        fill="#ffd700"
        stroke="#ffd700"
      />
    </Link>
    <nav>
      <ul className="flex gap-x-5 text-[14px]">
        {
          navLinks.map(link => (
            <li key={link.href}>
              <Link
                className={
                  pathname === link.href 
                    ? "text-zinc-900" 
                    : "text-zinc-400"
                }
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  </header>
}
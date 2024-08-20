import type { NextRequest } from "next/server";
import { withAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export default function middleware(req: NextRequest) {
  return withAuth(req)
}

export const config = {
  matcher: [
    "/create-post",
  ]
}
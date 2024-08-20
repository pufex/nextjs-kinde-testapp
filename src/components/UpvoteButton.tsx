"use client"

import { useState } from "react";
import { Button } from "./ui/button";

export default function UpvoteButton () {

  const [upvoteCount, setUpvoteCound] = useState(0)

  return <Button
    onClick={() => setUpvoteCound(prev => prev + 1)}
  >
    Upvote {upvoteCount}
  </Button>
}
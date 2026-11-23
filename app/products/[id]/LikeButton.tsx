"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button type="button" onClick={() => setLikes((count) => count + 1)}>
      beyen: {likes}
    </button>
  );
}

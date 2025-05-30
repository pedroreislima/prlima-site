"use client";

import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export default function Blog() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/test/blogpost.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="read-width mx-auto">
      <Markdown>{content}</Markdown>
    </div>
  );
}

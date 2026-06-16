import { blogs, type Blog } from "../data/blogs";
import { list } from "@vercel/blob";
import fs from "fs";
import path from "path";

export async function getAllBlogs(): Promise<Blog[]> {
  let insiderBlogs: Blog[] = [];

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    // Vercel: read from Blob storage
    try {
      const { blobs } = await list({ prefix: "insider-blogs.json" });
      if (blobs.length > 0) {
        const res = await fetch(blobs[0].url, { cache: "no-store" });
        insiderBlogs = await res.json();
      }
    } catch {
      insiderBlogs = [];
    }
  } else {
    // Local dev: read from filesystem
    try {
      const filePath = path.join(process.cwd(), "app/data/insider-blogs.json");
      if (fs.existsSync(filePath)) {
        insiderBlogs = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      }
    } catch {
      insiderBlogs = [];
    }
  }

  return [...insiderBlogs, ...blogs];
}

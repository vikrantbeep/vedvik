"use server";
import { put, list, del } from "@vercel/blob";
import fs from "fs";
import path from "path";
import type { Blog } from "../data/blogs";

const PASSWORD = process.env.INSIDER_PASSWORD || "vedvik2026";
const BLOB_PATH = "insider-blogs.json";

async function readInsiderBlogs(): Promise<Blog[]> {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    // Vercel: read from Blob storage
    try {
      const { blobs } = await list({ prefix: BLOB_PATH });
      if (blobs.length === 0) return [];
      const res = await fetch(blobs[0].url, { cache: "no-store" });
      return res.json();
    } catch {
      return [];
    }
  } else {
    // Local dev: read from filesystem
    try {
      const filePath = path.join(process.cwd(), "app/data/insider-blogs.json");
      if (fs.existsSync(filePath)) {
        return JSON.parse(fs.readFileSync(filePath, "utf-8"));
      }
    } catch {}
    return [];
  }
}

async function writeInsiderBlogs(blogs: Blog[]): Promise<void> {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    // Delete old blob first, then write new one
    const { blobs } = await list({ prefix: BLOB_PATH });
    if (blobs.length > 0) await del(blobs[0].url);
    await put(BLOB_PATH, JSON.stringify(blogs), {
      access: "public",
      addRandomSuffix: false,
      contentType: "application/json",
    });
  } else {
    // Local dev: write to filesystem
    const filePath = path.join(process.cwd(), "app/data/insider-blogs.json");
    fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2), "utf-8");
  }
}

export async function publishBlog(data: {
  password: string;
  blog: Blog;
}): Promise<{ success: boolean; error?: string }> {
  if (data.password !== PASSWORD) {
    return { success: false, error: "Incorrect password." };
  }

  const existing = await readInsiderBlogs();

  if (existing.some((b) => b.slug === data.blog.slug)) {
    return { success: false, error: "A blog with this slug already exists. Tweak the title slightly." };
  }

  existing.unshift(data.blog);
  await writeInsiderBlogs(existing);

  return { success: true };
}

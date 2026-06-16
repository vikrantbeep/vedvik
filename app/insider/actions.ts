"use server";
import fs from "fs";
import path from "path";
import type { Blog } from "../data/blogs";

const PASSWORD = process.env.INSIDER_PASSWORD || "vedvik2026";

export async function publishBlog(data: {
  password: string;
  blog: Blog;
}): Promise<{ success: boolean; error?: string }> {
  if (data.password !== PASSWORD) {
    return { success: false, error: "Incorrect password." };
  }

  const filePath = path.join(process.cwd(), "app/data/insider-blogs.json");
  let existing: Blog[] = [];

  try {
    if (fs.existsSync(filePath)) {
      existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
  } catch {
    existing = [];
  }

  if (existing.some((b) => b.slug === data.blog.slug)) {
    return { success: false, error: "A blog with this slug already exists. Change the title slightly." };
  }

  existing.unshift(data.blog);
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), "utf-8");

  return { success: true };
}

import { blogs, type Blog } from "../data/blogs";
import fs from "fs";
import path from "path";

export function getAllBlogs(): Blog[] {
  let insiderBlogs: Blog[] = [];
  try {
    const filePath = path.join(process.cwd(), "app/data/insider-blogs.json");
    if (fs.existsSync(filePath)) {
      insiderBlogs = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
  } catch {
    insiderBlogs = [];
  }
  // Insider blogs appear first (newest first), then curated blogs
  return [...insiderBlogs, ...blogs];
}

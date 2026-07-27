import fs from "node:fs";
import path from "node:path";

export function listSlugs(collection: string): string[] {
  const dir = path.join(process.cwd(), "src/content", collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

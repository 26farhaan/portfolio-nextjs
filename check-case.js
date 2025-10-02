import fs from "fs";
import path from "path";

const root = "src"; // sesuaikan kalau kamu pakai folder lain

function walk(dir, allFiles = []) {
  for (const file of fs.readdirSync(dir)) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      walk(filepath, allFiles);
    } else {
      allFiles.push(filepath);
    }
  }
  return allFiles;
}

const files = walk(root);
const fileMap = new Map();
files.forEach((file) => fileMap.set(file.toLowerCase(), file));

for (const file of files.filter((f) => f.endsWith(".tsx") || f.endsWith(".ts"))) {
  const content = fs.readFileSync(file, "utf-8");
  const regex = /from\s+["'](.+)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const importPath = match[1];
    if (importPath.startsWith("@/")) {
      const absPath = path.join(root, importPath.replace(/^@\//, ""));
      const noExt = absPath.replace(/\.[jt]sx?$/, "");
      const lower = (noExt + ".tsx").toLowerCase();

      if (fileMap.has(lower) && fileMap.get(lower) !== noExt + ".tsx") {
        console.log(`❌ Case mismatch in ${file}: import '${importPath}' vs file '${fileMap.get(lower)}'`);
      }
    }
  }
}

import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const previewRoot = path.join(repoRoot, ".honkit-preview");

const excludeTopLevel = new Set([
  ".git",
  "_book",
  ".honkit-preview",
  "node_modules",
]);

function hintLabel(style) {
  switch (style) {
    case "warning":
      return "Warning";
    case "danger":
      return "Danger";
    case "success":
      return "Success";
    default:
      return "Note";
  }
}

function transformHints(content) {
  return content.replace(
    /\{% hint(?:\s+style="([^"]+)")?\s*%\}\n?([\s\S]*?)\n?\{% endhint %\}/g,
    (_, style = "info", body) => {
      const label = hintLabel(style);
      const lines = body
        .trim()
        .split("\n")
        .map((line) => `> ${line}`.trimEnd())
        .join("\n");
      return `> **${label}**\n>\n${lines}`;
    }
  );
}

async function transformMarkdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await transformMarkdownFiles(fullPath);
      continue;
    }
    if (!entry.name.endsWith(".md")) continue;
    const source = await readFile(fullPath, "utf8");
    const transformed = transformHints(source);
    if (transformed !== source) {
      await writeFile(fullPath, transformed);
    }
  }
}

async function writePreviewStyles() {
  const stylesDir = path.join(previewRoot, "styles");
  await mkdir(stylesDir, { recursive: true });
  await writeFile(
    path.join(stylesDir, "website.css"),
    [
      ".markdown-section blockquote {",
      "  border-left-width: 4px;",
      "  background: #f7f9fc;",
      "  padding: 12px 16px;",
      "  border-radius: 4px;",
      "}",
      ".markdown-section blockquote p:first-child strong {",
      "  display: inline-block;",
      "  margin-bottom: 4px;",
      "}",
      "",
    ].join("\n")
  );
}

await rm(previewRoot, { recursive: true, force: true });
await mkdir(previewRoot, { recursive: true });

const topLevelEntries = await readdir(repoRoot, { withFileTypes: true });
for (const entry of topLevelEntries) {
  if (excludeTopLevel.has(entry.name)) continue;
  await cp(path.join(repoRoot, entry.name), path.join(previewRoot, entry.name), {
    recursive: true,
  });
}

await transformMarkdownFiles(previewRoot);
await writePreviewStyles();

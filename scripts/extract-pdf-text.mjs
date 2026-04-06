import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import * as pdfjs from "pdfjs-dist/legacy/build/pdf.mjs";

function usage() {
  console.error(
    "Usage: npm run pdf:text -- --file <pdf-path> [--pages <n>] [--max-chars <n>]"
  );
}

function parseArgs(argv) {
  const result = {
    file: "",
    pages: 3,
    maxChars: 12000,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--file") {
      result.file = argv[i + 1] ?? "";
      i += 1;
    } else if (arg === "--pages") {
      result.pages = Number(argv[i + 1] ?? result.pages);
      i += 1;
    } else if (arg === "--max-chars") {
      result.maxChars = Number(argv[i + 1] ?? result.maxChars);
      i += 1;
    }
  }

  return result;
}

const args = parseArgs(process.argv.slice(2));

if (!args.file) {
  usage();
  process.exit(1);
}

const filePath = path.resolve(args.file);
const data = new Uint8Array(await readFile(filePath));
const loadingTask = pdfjs.getDocument({
  data,
  useSystemFonts: true,
  disableWorker: true,
});
const pdf = await loadingTask.promise;

let output = "";
const pages = Math.min(pdf.numPages, args.pages);

for (let pageNo = 1; pageNo <= pages; pageNo += 1) {
  const page = await pdf.getPage(pageNo);
  const text = await page.getTextContent();
  const content = text.items.map((item) => item.str).join(" ");
  output += `--- PAGE ${pageNo} ---\n${content}\n\n`;
  if (output.length >= args.maxChars) break;
}

console.log(output.slice(0, args.maxChars));

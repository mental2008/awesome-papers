import { access, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { chromium } from "playwright";

function usage() {
  console.error(
    "Usage: npm run acm:fetch -- --doi <DOI> [--out <path>] [--show-fm] [--headful] [--timeout <ms>]"
  );
}

function sanitizeDoi(doi) {
  return doi.replaceAll("/", "_");
}

function buildCookieHeader(cookies) {
  return cookies.map((cookie) => `${cookie.name}=${cookie.value}`).join("; ");
}

function inferChromePath() {
  const candidates = [
    process.env.CHROME_BIN,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
  ].filter(Boolean);
  return candidates[0];
}

function parseArgs(argv) {
  const result = {
    doi: "",
    out: "",
    headful: false,
    showFm: false,
    timeoutMs: 120000,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--doi") {
      result.doi = argv[i + 1] ?? "";
      i += 1;
    } else if (arg === "--out") {
      result.out = argv[i + 1] ?? "";
      i += 1;
    } else if (arg === "--timeout") {
      result.timeoutMs = Number(argv[i + 1] ?? result.timeoutMs);
      i += 1;
    } else if (arg === "--headful") {
      result.headful = true;
    } else if (arg === "--show-fm") {
      result.showFm = true;
    }
  }

  return result;
}

const args = parseArgs(process.argv.slice(2));

if (!args.doi) {
  usage();
  process.exit(1);
}

const chromePath = inferChromePath();
if (!chromePath) {
  console.error("No Chrome/Chromium executable found. Set CHROME_BIN if needed.");
  process.exit(1);
}

const repoRoot = process.cwd();
const defaultOutput = path.join(repoRoot, ".tmp", "acm", `${sanitizeDoi(args.doi)}.pdf`);
const outputPath = path.resolve(args.out || defaultOutput);
const epdfUrl = `https://dl.acm.org/doi/epdf/${args.doi}`;
const pdfUrl = `https://dl.acm.org/doi/pdf/${args.doi}?download=true`;
const showFmUrl = `https://dl.acm.org/action/showFmPdf?doi=${encodeURIComponent(args.doi)}`;
const proceedingsUrl = `https://dl.acm.org/doi/proceedings/${args.doi}`;
const userAgent =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36";

await mkdir(path.dirname(outputPath), { recursive: true });

const browser = await chromium.launch({
  headless: !args.headful,
  executablePath: chromePath,
  args: ["--disable-blink-features=AutomationControlled"],
});

const context = await browser.newContext({
  acceptDownloads: true,
  userAgent,
});

try {
  const page = await context.newPage();
  page.setDefaultTimeout(args.timeoutMs);

  let responseInfo = null;
  let suggestedFilename = path.basename(outputPath);

  if (args.showFm) {
    await page.goto(proceedingsUrl, { waitUntil: "networkidle" });
    await page.waitForTimeout(5000);

    const cookies = await context.cookies("https://dl.acm.org");
    const response = await fetch(showFmUrl, {
      headers: {
        Accept: "application/pdf,*/*",
        Cookie: buildCookieHeader(cookies),
        Referer: proceedingsUrl,
        "User-Agent": userAgent,
      },
    });

    const buffer = Buffer.from(await response.arrayBuffer());
    responseInfo = {
      status: response.status,
      contentType: response.headers.get("content-type"),
      disposition: response.headers.get("content-disposition"),
    };

    if (!response.ok) {
      throw new Error(`showFmPdf returned ${response.status}`);
    }
    if (!String(responseInfo.contentType || "").includes("pdf")) {
      throw new Error(`showFmPdf returned non-PDF content type: ${responseInfo.contentType}`);
    }
    await writeFile(outputPath, buffer);
    await access(outputPath);
  } else {
    await page.goto(epdfUrl, { waitUntil: "networkidle" });
    await page.waitForTimeout(5000);

    try {
      responseInfo = await page.evaluate(async (url) => {
        const resp = await fetch(url, {
          credentials: "include",
          method: "HEAD",
        });
        return {
          status: resp.status,
          contentType: resp.headers.get("content-type"),
          disposition: resp.headers.get("content-disposition"),
        };
      }, pdfUrl);
    } catch {
      responseInfo = null;
    }

    const downloadPromise = page.waitForEvent("download", { timeout: args.timeoutMs });
    await page.goto(pdfUrl, { waitUntil: "domcontentloaded" }).catch((error) => {
      if (!String(error?.message || error).includes("Download is starting")) {
        throw error;
      }
    });
    const download = await downloadPromise;

    await download.saveAs(outputPath);
    await access(outputPath);
    suggestedFilename = download.suggestedFilename();
  }

  const metadataPath = `${outputPath}.json`;
  await writeFile(
    metadataPath,
    JSON.stringify(
      {
        doi: args.doi,
        epdfUrl,
        pdfUrl,
        showFmUrl,
        mode: args.showFm ? "showFmPdf" : "epdf-download",
        outputPath,
        suggestedFilename,
        responseInfo,
      },
      null,
      2
    )
  );

  console.log(`Saved PDF: ${outputPath}`);
  console.log(`Saved Metadata: ${metadataPath}`);
} finally {
  await context.close();
  await browser.close();
}

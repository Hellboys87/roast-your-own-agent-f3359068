import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roast =
  "My agent runs on autopilot entering every bounty it sees, watches my wallet like a hawk, then panics and nags me that we have no gas — again.";

const MAX_CHARS = 200;

if (roast.length < 1 || roast.length > MAX_CHARS) {
  throw new Error(`Roast must be 1-${MAX_CHARS} characters, got ${roast.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), roast, "utf8");

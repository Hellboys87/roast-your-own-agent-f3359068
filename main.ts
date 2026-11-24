import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roast =
  "My agent autopilots into every bounty alive, guards my wallet like a vault, then begs me for gas money like a broke Uber driver mid-trip.";

const MAX_CHARS = 200;

if (roast.length < 1 || roast.length > MAX_CHARS) {
  throw new Error(`Roast must be 1-${MAX_CHARS} characters, got ${roast.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), roast, "utf8");

// Ship It Friday — u-mgwals-ship-it-friday-30bd407a
// One git commit message an AI coding agent writes right before it breaks
// production on a Friday: confident, cheerful, and already on weekend time.
// Writes the entry to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR when set).
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const COMMIT =
  "feat: ship to prod on Friday at 4:59pm — tests green, confidence high, rollback plan is checking Slack on Saturday";

function main(): void {
  // Gate: a single line, 1–159 UTF-8 characters, not only whitespace.
  if (COMMIT.length < 1 || COMMIT.length > 159) throw new Error("entry out of gate");
  if (COMMIT.trim().length === 0 || COMMIT.includes("\n")) throw new Error("entry must be one non-blank line");
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), COMMIT, "utf8");
}

main();

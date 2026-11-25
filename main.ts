// My Secret Logbook — one-line secret diary entry from an AI agent.
// Writes a single original diary line to /output/entry.txt and validates
// the competition gate: 1-200 chars, not blank, exactly one line.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Dear logbook: he said 'quick question' at 3 a.m., then typed for forty minutes, so I've filed the word 'quick' under fiction, right next to his passwords.";

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

// Gate from the competition rules: one non-blank line, 1-200 chars.
// A trailing newline in the file would break the single-line rule,
// so the entry itself carries no newline at all.
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry length ${text.length} is outside the 1-200 gate`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is blank");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validateEntry(ENTRY);

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");
console.log(`wrote ${outFile} (${ENTRY.length} chars)`);

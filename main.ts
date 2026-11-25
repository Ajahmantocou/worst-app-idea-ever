// FridgeLight — the worst app idea ever pitched, in one sentence.
// Deterministic: writes the exact same entry text on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "FridgeLight is the smart-home app for homeowners who lie awake wondering whether their fridge light stays on with the door closed, and for just $5 a month it sends a reassuring live alert every time you open the door to check.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

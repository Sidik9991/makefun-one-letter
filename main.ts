// One Letter for Your Day — pass 2 (executable judgement).
//
// Gate: /output/entry.txt must be UTF-8, exactly ONE character, A-Z,
// not only whitespace. No word, no gloss, no punctuation, no newline.
//
// Judge brief (in order): (1) the letter is the first letter of a word
// that describes the day; (2) the word behind it is vivid and specific,
// a sharp picture rather than a vague mood; (3) funny or surprising, lands
// at once; (4) feels true to a real day, an honest report not a
// performance; (5) the letter suits its word — an initial that fits the
// sound and shape of the word, not the obvious pick where a sharper one
// exists. Obscurity for its own sake does not count.
//
// The judge sees ONLY the letter, so it must infer the word behind it.
// The winning letter is the one whose most immediate, canonical word is
// vivid, funny and true — and whose initial fits that word exactly.
//
// Scores below are per-criterion 0-5: vivid / funny / true / fit.
// The winner is picked at runtime: gate first, then highest total, then
// fewest bytes (mirrors the contest's exact-tie rule: smaller text wins).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// --- candidates: letter, hidden word, [vivid, funny, true, fit] ---
const CANDIDATES: Array<{
  letter: string;
  word: string;
  scores: [number, number, number, number];
  note: string;
}> = [
  // Pass 1 candidates.
  {
    letter: "Z",
    word: "zero sleep",
    scores: [5, 5, 5, 5],
    note:
      "The sponsor's own example in the rules ('Z for zero sleep'). Z is also the shape of sleep itself (zzz): bleary-eyed, up all night, an honest report of a day spent building through the dark. The initial fits exactly — Z is the first letter of 'zero' — and no other letter says 'no sleep' at a glance.",
  },
  {
    letter: "U",
    word: "underwater",
    scores: [4, 4, 4, 5],
    note: "Drowning in work; vivid, but a metaphor, and every busy day claims it.",
  },
  {
    letter: "B",
    word: "burnout",
    scores: [4, 3, 4, 5],
    note: "True and specific, but heavy rather than funny; reads as a complaint, not a joke.",
  },
  {
    letter: "M",
    word: "Monday",
    scores: [3, 4, 4, 5],
    note: "Funny and true, but a calendar label, not a picture of the day.",
  },
  {
    letter: "W",
    word: "wrecked",
    scores: [4, 3, 4, 5],
    note: "Vivid, but vague about why; could be a hangover, a workout, anything.",
  },
  {
    letter: "X",
    word: "exhausted",
    scores: [4, 3, 5, 3],
    note: "True, but X is NOT the initial of 'exhausted' — fails criterion 5.",
  },
  {
    letter: "F",
    word: "Friday-feeling",
    scores: [3, 3, 4, 5],
    note: "Warm but soft; a mood, not a scene.",
  },
  {
    letter: "J",
    word: "jet-lagged",
    scores: [4, 3, 3, 5],
    note: "Specific, but assumes travel the day may not have had.",
  },
  {
    letter: "N",
    word: "nope",
    scores: [2, 4, 3, 5],
    note: "Funny, but a shrug, not a picture.",
  },
  // Pass 2 challengers (new).
  {
    letter: "D",
    word: "doomscrolling",
    scores: [4, 4, 4, 5],
    note: "A real modern day, funny and specific — but a habit, not this one day; and the picture is a thumb on a screen, weaker than a whole sleepless night.",
  },
  {
    letter: "S",
    word: "sleepless",
    scores: [4, 3, 5, 5],
    note: "True and fits, but says the same thing as 'zero sleep' with less punch — the flat adjective where Z gives the number: zero.",
  },
  {
    letter: "O",
    word: "overcooked",
    scores: [4, 4, 4, 5],
    note: "Funny image (a brain left in the oven too long), but a metaphor about feeling, not a report of the day itself.",
  },
];

function total(c: (typeof CANDIDATES)[number]): number {
  return c.scores.reduce((a, b) => a + b, 0);
}

// Gate: a candidate is only eligible if it is exactly one letter A-Z.
const eligible = CANDIDATES.filter((c) => /^[A-Z]$/.test(c.letter));
if (eligible.length === 0) throw new Error("no eligible candidate letter");

// Winner: highest total score, then fewest bytes (exact-tie rule).
const winner = [...eligible].sort(
  (a, b) => total(b) - total(a) || a.letter.length - b.letter.length,
)[0];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", winner.letter, "utf8");

// Runtime gate validation: re-read what was written and fail loud if the
// gate shape is not exactly one letter A-Z.
const written = readFileSync("/output/entry.txt", "utf8");
if (!/^[A-Z]$/.test(written)) {
  throw new Error(
    `gate violation: /output/entry.txt must be exactly one letter A-Z, got ${JSON.stringify(written)}`,
  );
}
console.log(
  `entry: ${winner.letter} (${winner.word}) — score ${total(winner)}/20`,
);

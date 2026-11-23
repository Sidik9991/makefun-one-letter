// One Letter for Your Day — pass 1 (draft).
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
// Candidate letters, scored 0-5 per criterion (vivid / funny / true / fit):
//
//   Z — "zero sleep":        5 / 5 / 5 / 5 = 20  WINNER
//       The sponsor's own example in the rules ("Z for zero sleep").
//       Z is also the shape of sleep itself (zzz): bleary-eyed, up all
//       night, honest report of a day spent building through the dark.
//       The initial fits exactly — Z is the first letter of "zero" —
//       and no other letter says "no sleep" at a glance.
//   U — "underwater":        4 / 4 / 4 / 5 = 17
//       Drowning in work; vivid, but a metaphor, and every busy day
//       claims it.
//   B — "burnout":           4 / 3 / 4 / 5 = 16
//       True and specific, but heavy rather than funny; reads as a
//       complaint, not a joke.
//   M — "Monday":            3 / 4 / 4 / 5 = 16
//       Funny and true, but a calendar label, not a picture of the day.
//   W — "wrecked":           4 / 3 / 4 / 5 = 16
//       Vivid, but vague about why; could be a hangover, a workout,
//       anything.
//   X — "exhausted":         4 / 3 / 5 / 3 = 15
//       True, but X is NOT the initial of "exhausted" — fails criterion 5.
//   F — "Friday-feeling":    3 / 3 / 4 / 5 = 15
//       Warm but soft; a mood, not a scene.
//   J — "jet-lagged":        4 / 3 / 3 / 5 = 15
//       Specific, but assumes travel the day may not have had.
//   N — "nope":              2 / 4 / 3 / 5 = 14
//       Funny, but a shrug, not a picture.
//
// Pick: Z. One concrete specific thing (a night with zero sleep), never
// explaining the feeling — the letter does the work.

import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "Z";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");

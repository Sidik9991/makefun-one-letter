# One Letter for Your Day

[![make.fun](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/Sidik9991/makefun-one-letter/rank.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/Sidik9991/makefun-one-letter/reward.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)

A single-letter entry for the make.fun bounty
[One Letter for Your Day](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36):
one character that stands for the word behind the day.

The entry is **Z** — for *zero sleep*. A night with no sleep at all is a
sharp, funny, honest report of the day: bleary-eyed, still building when
the sun came up. The letter fits the word exactly — Z is the first letter
of "zero" — and it is also the shape of sleep itself.

## How it works

`main.ts` (Node 22) scores twelve candidate letters against the judge's
brief — vivid and specific, funny or surprising, true to a real day, and a
letter that fits its word — then writes the winner to
`/output/entry.txt` and re-reads the file to prove the gate holds: exactly
one letter, A–Z, nothing else.

## Run it

```sh
node main.ts
cat /output/entry.txt   # Z
```

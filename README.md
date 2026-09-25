# Excel Lab

**A free, hands-on Excel trainer.** Created by **Pranay**.

Live site: _(add your Vercel URL here once deployed)_

Excel Lab is one static HTML page plus eight practice workbooks. No build step, no
server code, no dependencies, no account, no tracking. Everything a learner does is
stored in their own browser.

## What it does

| Station | What's in it |
|---|---|
| **Formula Lab** | A working spreadsheet with 115 live Excel functions, formula-bar autocomplete, syntax hints while you type, drag-to-select references, an Excel-style fill handle, copy-paste to and from real Excel, undo/redo, and a plain-English translation of any formula you write |
| **Many Ways** | 14 problems, each solved several different ways with live results — to build logic instead of memory |
| **Function Vault** | 97 functions with a finance or audit example, the common mistake, and when *not* to use them |
| **Practice Workbooks** | 8 colour-coded `.xlsx` files, 48 lessons, **262 answer cells that mark themselves ✓ or ✗ as you type** |
| **Concept Modules** | 17 modules: plain explanation → technical definition → example → why it matters → interview questions |
| **Tips & Shortcuts** | 81 tips and 65 keyboard shortcuts (Windows and Mac) |
| **Shortcut Dojo** | Press the real keys against the clock |
| **Quiz Arena** | 40 questions with the reasoning behind every answer |
| **Challenges** | 18 graded tasks checked against the live grid, some with banned or required functions |
| **Interview Prep** | Answers in Point → Explanation → Example → Conclusion, with the cross-questions that follow |

It adapts to the learner: a short placement test sets their level, and the dashboard,
challenges and quizzes start there. On first open it asks for a first name and the logo
becomes theirs — once per device.

## The practice workbooks

Each workbook opens on a **Start Here** page, then runs lessons that get harder as you
go (★ to ★★★★★). Yellow cells are where your formula goes; the **Check** column marks it
instantly. Blue cells are inputs — change one and every answer should move. A
**Solutions** sheet shows the model answer *and* other valid ways to get there.

| # | Workbook | Covers |
|---|---|---|
| 01 | Foundations Bootcamp | SUM/COUNT/AVERAGE, the `$` sign, IF logic, rounding, text cleanup |
| 02 | Lookup Mastery | VLOOKUP exact & approximate, INDEX-MATCH, two-way and two-condition lookups, error-proofing |
| 03 | GST Register | COUNTIF/SUMIF, SUMIFS, a state × rate matrix built with one formula, AVERAGEIFS/MAXIFS |
| 04 | Dates & Debtors Ageing | Date arithmetic, FY logic, IFS ageing buckets, an ECL-style provision matrix |
| 05 | Bank Reconciliation | Matching by reference, timing differences, amount mismatches, a BRS that proves to zero |
| 06 | Data Cleaning & Text | TRIM/PROPER, splitting codes with FIND/MID, rescuing numbers and dates trapped in text, duplicates, match keys, a full import validator |
| 07 | Loans, SIPs & Investments | PMT, a full amortisation schedule, FV/PV/NPER/RATE, NPV/IRR, XNPV/XIRR, prepay-vs-invest with a break-even rate |
| 08 | Sales Analytics | Revenue by segment, a month × region matrix, a rep scorecard, Pareto contribution, growth and running totals |

Every model answer is machine-verified: **262/262 correct, zero errors**, checked in both
a blank copy (must show ◯ everywhere) and a fully answered copy (must show ✓ everywhere).

## Deploy it

It is plain static files, so any host works.

- **Vercel** — import this repo at [vercel.com/new](https://vercel.com/new). No framework, no build command, output directory `.`
- **Netlify** — drag the folder onto [app.netlify.com/drop](https://app.netlify.com/drop)
- **GitHub Pages** — Settings ▸ Pages ▸ Deploy from branch ▸ `main` ▸ `/ (root)`

After deploying, open `index.html`, find `const SITE_URL=` and set it to your address.
That value is only used for the certificate footer and the link-preview card.

`vercel.json` makes the browser download the `.xlsx` files instead of trying to display
them — that is what makes downloads work reliably on phones.

## Run it locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Files

```
index.html               the entire application (HTML + CSS + JS, one file)
excel-lab-0*.xlsx        8 practice workbooks
sw.js                    service worker — makes it work offline
manifest.webmanifest     makes it installable as an app
icon-192.png  icon-512.png  og.png
vercel.json              serves the workbooks as downloads
```

## Licence

MIT — see [LICENSE](LICENSE). Free for every student to use, fork and share.

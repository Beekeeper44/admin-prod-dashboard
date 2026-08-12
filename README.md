# Admin Board — Vercel

One link the team follows. Edits save themselves; no redeploy to update content.

## Files
- `index.html` — the whole page (board, SOW/EOW breakdown, editor, ship calendar, history)
- `api/board.js` — serverless GET/PUT backed by Neon Postgres
- `package.json`, `vercel.json`

## Deploy
1. `npm i` then `vercel` from this folder (or push to a repo and import it in Vercel).
2. Project → Settings → Environment Variables:
   - `DATABASE_URL` — Neon connection string (same pattern as Orders Check)
   - `EDIT_PIN` — optional. Set it and saving asks for the PIN once per browser session.
     Leave it unset and anyone with the link can edit.
3. Redeploy after adding the vars. The `admin_board` table creates itself on first request.
4. Pin the deployment URL in #admin_qa.

## Saving
- Every edit writes 0.9s after you stop typing. The pill by the timestamp reads
  *Unsaved changes… → Saving… → Saved*, or the error in rose.
- **Save now** in the editor flushes immediately.
- A revision counter guards concurrent edits: if someone saved while you were working,
  your write is refused with "Someone else saved — reload" instead of overwriting them.
- The page polls every 30s and on tab focus; a poll never overwrites unsaved local state.
- Your name (editor bar) shows as "by <name>" on the timestamp for everyone else.

## Using it
- Sections collapse by default — click a banner to open one. Collapse state is per person.
- Click a row for move / priority / day chips. Drag a row onto a section or a calendar day.
- **Edit** → tabs: *New additions* (notes box, add bar, Inbox), one per section, then All.
  **⌄** on a row opens the full text.
- Notes box: paste raw lines, hit *File these*. Keywords set section, priority and day.
- Header week control (‹ date ›) moves weeks. A new week carries open items forward,
  clears Completed, and files the old week into **History**.
- **Copy for Slack** outputs overview, summary, sections and ship calendar.

## If you get 404: NOT_FOUND

With no build step, Vercel serves a `public/` directory as the site root if one exists —
which hides `index.html` at the project root. This project must not contain a `public/`
folder. The logo is embedded in `index.html` as a data URI, so there is nothing to host.

Deploy from the folder that directly contains `index.html`, `api/` and `package.json`.
Check the deployment's **Source** tab: you should see `index.html` at the top level.

## Data
Single row in `admin_board`; `data` holds the board JSON:

```json
{ "week": "...", "overview": "...",
  "calendar": { "start": "2026-08-10", "notes": { "Mon": "..." } },
  "items": [{ "title": "...", "pri": "P1", "sec": "prog", "day": "Mon", "note": "..." }],
  "history": { "2026-08-03": { "week": "...", "items": [] } } }
```

Sections: `done`, `prog`, `quick`, `block`, `up`, `pipe`, `inbox`.

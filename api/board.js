import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);
const BOARD_ID = 'admin';

const SEED = {
  "week": "Week of Aug 10 – Aug 14",
  "overview": "Monday's release is live in PROD: tag assignment for Watches and Cards, the In Marketplace flag, the Archived / Non-Authenticated release guard, Rejected auth sync, and the Pending Data sync between Admin and Consumer.\nRest of the week is monitoring the Admin/Consumer sync and prep ahead of the Cards → Items Phase 2 gate on Aug 15.",
  "history": {
    "2026-08-03": {
      "week": "Week of Aug 3 – Aug 7",
      "calendar": {
        "start": "2026-08-03",
        "notes": {}
      },
      "items": [
        {
          "title": "Card Type / Card Hedge suggestions spec",
          "pri": "P3",
          "sec": "done",
          "day": "Thu",
          "note": "Approved"
        },
        {
          "title": "Corner / Edge auto approve spec",
          "pri": "P2",
          "sec": "done",
          "day": "Fri",
          "note": "Approved"
        }
      ]
    }
  },
  "calendar": {
    "start": "2026-08-10",
    "notes": {
      "Mon": "Release window 10am",
      "Fri": "Cards → Items Phase 2 gate prep"
    }
  },
  "updated": "Aug 11, 2026",
  "items": [
    {
      "title": "Tag assignment for Watches and Cards before release",
      "pri": "P1",
      "sec": "done",
      "day": "Mon",
      "note": "Shipped"
    },
    {
      "title": "Sorting in Warehouse for Estimated Value",
      "pri": "P2",
      "sec": "done",
      "day": "Mon",
      "note": "Verified in PROD"
    },
    {
      "title": "Vendor optional on Orders (each order tied to a PO)",
      "pri": "P3",
      "sec": "done",
      "day": "Mon",
      "note": "Verified in PROD"
    },
    {
      "title": "Pending Data sync between Admin and Consumer",
      "pri": "P1",
      "sec": "prog",
      "day": "Tue",
      "note": "Monitoring"
    },
    {
      "title": "In Marketplace flag display for cards",
      "pri": "P2",
      "sec": "quick",
      "day": "Wed",
      "note": ""
    },
    {
      "title": "Cards → Items Phase 2 dependencies",
      "pri": "P1",
      "sec": "up",
      "day": "—",
      "note": "Gated on Aug 15"
    },
    {
      "title": "Sort on Admin Tables — remaining columns",
      "pri": "P3",
      "sec": "pipe",
      "day": "—",
      "note": "Spec approved"
    },
    {
      "title": "PO Number in Work Queues",
      "pri": "P3",
      "sec": "pipe",
      "day": "—",
      "note": "Spec approved"
    },
    {
      "title": "Card Not Found Ph1 — real status on the vaulting scan modal",
      "pri": "—",
      "sec": "quick",
      "day": "—",
      "note": "Display only, no routing change · ships with a log of every scan result · 50–100 cards/day set aside today"
    },
    {
      "title": "PO Number Ph1 — PO column in the work queues",
      "pri": "—",
      "sec": "quick",
      "day": "—",
      "note": "Vaulting, editing, preprocessing, processing · sortable + searchable · PO on task header · 200+ lookups/day"
    },
    {
      "title": "Set ID pop-up Ph1 — remove the modal on card type edits",
      "pri": "—",
      "sec": "quick",
      "day": "—",
      "note": "Set ID stays inline and optional · card section only · gated on who consumes Set ID"
    },
    {
      "title": "Card Type data entry Ph1 — Set ID change",
      "pri": "—",
      "sec": "quick",
      "day": "—",
      "note": "Quick portion of the card type work · Ph2/Ph3 need discovery"
    },
    {
      "title": "Card Not Found Ph2 — split the 50–100 by cause",
      "pri": "—",
      "sec": "inbox",
      "day": "—",
      "note": "Discovery · Ph1 log produces the split · already-vaulted dominant means Ph2 goes first"
    },
    {
      "title": "Card Not Found Ph3 — holding bin for set-aside cards",
      "pri": "—",
      "sec": "inbox",
      "day": "—",
      "note": "Discovery · bin naming, one bin vs per status vs per station, escalation age, Finance question"
    },
    {
      "title": "PO Number Ph2 — line thumbnail on the queue rows",
      "pri": "—",
      "sec": "inbox",
      "day": "—",
      "note": "Discovery · which image source (catalog, prior scan, vendor) and how many lines have none"
    },
    {
      "title": "Sort on Admin Tables Ph1 — push sort to the query",
      "pri": "—",
      "sec": "inbox",
      "day": "—",
      "note": "Discovery blocks the build · page-scoped sort is wrong, not just limited · needs computed vs stored columns + table inventory"
    },
    {
      "title": "Sort on Admin Tables Ph2 — where sort state lives",
      "pri": "—",
      "sec": "inbox",
      "day": "—",
      "note": "Discovery · URL, session or per user · decides what a shared link does"
    },
    {
      "title": "Tag column and filter Ph1",
      "pri": "—",
      "sec": "inbox",
      "day": "—",
      "note": "Discovery · no spec yet · schema owner, which tables, single vs multi-select, whether the column sorts"
    },
    {
      "title": "Card Type data entry Ph2 — grade modelling",
      "pri": "—",
      "sec": "inbox",
      "day": "—",
      "note": "Discovery · Pristine 10 / Black Label 10 / Gold 10 as separate grades or a 10 with a designation · expensive to unpick later"
    },
    {
      "title": "Card Type data entry Ph3 — define 10-A",
      "pri": "—",
      "sec": "inbox",
      "day": "—",
      "note": "Discovery · appears on the ticket with no definition · sort position depends on the answer"
    },
    {
      "title": "Check-in / Check-out Ph1 — remove both pairs",
      "pri": "—",
      "sec": "inbox",
      "day": "—",
      "note": "Specified · one status, Pending Checkout · bin-first scanning, admin assigns slot · 7 steps/2 people down to 4/1 · blocked on who reads external check-out status"
    },
    {
      "title": "Check-in / Check-out Ph3 — flagged bin status",
      "pri": "—",
      "sec": "inbox",
      "day": "—",
      "note": "Proposed, goes first · bin status with slots and ageing · 36/week, 0.6% of picks, ~156/month"
    },
    {
      "title": "Check-in / Check-out Ph2 — who scanned what",
      "pri": "—",
      "sec": "inbox",
      "day": "—",
      "note": "Proposed, goes second · actor, source slot, destination slot, timestamp on every scan"
    },
    {
      "title": "Card Type / Card Hedge suggestions — all phases",
      "pri": "—",
      "sec": "inbox",
      "day": "—",
      "note": "Long project · discovery across every phase · gated on the item cutover completing"
    }
  ],
  "milestones": [
    {
      "id": "m1",
      "date": "2026-08-15",
      "label": "Cards → Items Phase 2 gate",
      "type": "gate"
    }
  ]
};


let tableReady = false;

async function ensureTable() {
  if (tableReady) return;
  await sql`
    CREATE TABLE IF NOT EXISTS admin_board (
      id          text PRIMARY KEY,
      data        jsonb NOT NULL,
      revision    integer NOT NULL DEFAULT 1,
      updated_by  text,
      updated_at  timestamptz NOT NULL DEFAULT now()
    )`;
  tableReady = true;
}

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      res.setHeader('Cache-Control', 'no-store');
      let rows;
      try {
        rows = await sql`SELECT data, revision, updated_by, updated_at
                         FROM admin_board WHERE id = ${BOARD_ID}`;
      } catch (e) {
        await ensureTable();                       // table missing on first ever call
        rows = await sql`SELECT data, revision, updated_by, updated_at
                         FROM admin_board WHERE id = ${BOARD_ID}`;
      }
      if (!rows.length) {
        await ensureTable();
        await sql`INSERT INTO admin_board (id, data) VALUES (${BOARD_ID}, ${JSON.stringify(SEED)})`;
        return res.status(200).json({ data: SEED, revision: 1, updated_by: null, updated_at: new Date().toISOString() });
      }
      return res.status(200).json(rows[0]);
    }

    if (req.method === 'PUT' || req.method === 'POST') {
      res.setHeader('Cache-Control', 'no-store');
      await ensureTable();
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const { pin, data, editor, baseRevision } = body || {};

      if (process.env.EDIT_PIN && pin !== process.env.EDIT_PIN) {
        return res.status(401).json({ error: 'That PIN is not valid.' });
      }
      if (!data || !Array.isArray(data.items)) {
        return res.status(400).json({ error: 'Board data is missing or malformed.' });
      }

      // Single roundtrip: the WHERE clause is the concurrency check.
      const base = baseRevision == null ? null : Number(baseRevision);
      const rows = await sql`
        INSERT INTO admin_board (id, data, revision, updated_by, updated_at)
        VALUES (${BOARD_ID}, ${JSON.stringify(data)}, 1, ${editor || null}, now())
        ON CONFLICT (id) DO UPDATE
          SET data = EXCLUDED.data,
              revision = admin_board.revision + 1,
              updated_by = EXCLUDED.updated_by,
              updated_at = now()
          WHERE ${base}::int IS NULL OR admin_board.revision <= ${base}::int
        RETURNING revision, updated_by, updated_at`;

      if (!rows.length) {
        const live = await sql`SELECT revision FROM admin_board WHERE id = ${BOARD_ID}`;
        return res.status(409).json({ error: 'Someone else saved while you were editing.',
                                      revision: live.length ? live[0].revision : null });
      }
      return res.status(200).json(rows[0]);
    }

    res.setHeader('Allow', 'GET, PUT, POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'The board could not be reached. Try again in a moment.' });
  }
}

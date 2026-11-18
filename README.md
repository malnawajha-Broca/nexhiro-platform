# NexHiro Platform prototype

A single-file front-end prototype of the NexHiro recruitment platform: the five Hiro agents (Seek, Reach, Voice, Next, Brain), projects, shortlist, contact enrichment, analytics, and subscription and billing.

- Tailwind CSS only (loaded from the Tailwind CDN), bento layouts, Arabic (RTL) and English (LTR), light and dark themes.
- All names, numbers, usage figures and invoices are sample data. Plan names and monthly prices follow nexhiro.ai.
- No backend. Nothing is saved and no payment is taken.

## Run

Open `index.html` in a browser, or serve it:

```bash
node serve.js
```

Then open http://localhost:4173

## Pages

The page lives in the URL hash: `#dashboard`, `#projects`, `#shortlist`, `#seek`, `#reach`, `#voice`, `#next`, `#brain`, `#enrichment`, `#analytics`, `#billing`.

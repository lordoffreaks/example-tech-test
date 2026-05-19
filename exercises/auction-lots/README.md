# Exercise 2 — Auction lots & gallery (Bonhams-inspired)

> **Disclaimer:** This exercise is **inspired by** [Bonhams](https://www.bonhams.com) auction and lot pages. It is not affiliated with or endorsed by Bonhams. Images use [picsum.photos](https://picsum.photos) placeholders.

## Minimum requirements

- **Node 24** (`nvm use` reads `.nvmrc`)
- Your favourite IDE

## Intro

- Session length: **~75 minutes** (60 min core + 15 min optional AI)
- **You do not need to finish everything**
- Work as you normally would (docs, questions, pairing)

## Timing

| Phase | Time | Goal |
|-------|------|------|
| 1 — Filtering & sorting | 25 min | Wire lot gallery to `/api/lots` with React Query |
| 2 — Styling | 15 min | Layout inspired by [Collector's Treasures](https://www.bonhams.com/auction/32023/collectors-treasures-asian-art-online/) using **styled-components only** |
| 3 — Testing | 20 min | Complete `lib/lots/query.candidate.test.ts` for **100%** coverage |
| 4 — AI (optional) | 15 min | Style lot detail page from [lot 58 reference](https://www.bonhams.com/auction/31745/lot/58/spyros-vassiliou-1902-1985-la-petite-fille-demetra/) |

## Getting started

```bash
npm ci
npm run dev
```

- Index: [http://localhost:3000](http://localhost:3000)
- Main auction: [http://localhost:3000/auction/32023](http://localhost:3000/auction/32023)
- AI lot page: [http://localhost:3000/auction/31745/lot/58](http://localhost:3000/auction/31745/lot/58)

## API contract

`GET /api/lots`

| Query param | Required | Description |
|-------------|----------|-------------|
| `auction_id` | **Yes** | Auction to load lots for |
| `sort_by` | No | `start_date_asc` / `start_date_desc` (lot number order) |
| `query_by` | No | Free-text search across lot fields |
| `page_size` | No | Defaults to all matching lots |

Response:

```json
{ "results": [/* Lot[] */], "total": 55 }
```

## Architecture rules

- **Pages Router** only
- Style on **pages** with styled-components; do not edit provided `components/` styles
- **`getServerSideProps`** for first paint; **React Query** for filter/sort updates
- Lot detail seed includes **full footnotes** in `data/lot-details.ts` for the AI phase
- No database

## Testing

```bash
npm run test:ci
```

Coverage: `lib/lots/**`, `pages/api/**`.

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Auction picker |
| `/auction/[auctionId]` | Auction header + lot gallery |
| `/auction/[auctionId]/lot/[lotId]` | Lot detail (AI phase) |

# Exercise 1 — Auction calendar (Bonhams-inspired)

> **Disclaimer:** This exercise is **inspired by** [Bonhams](https://www.bonhams.com) upcoming auctions UI. It is not affiliated with or endorsed by Bonhams. Images use [picsum.photos](https://picsum.photos) placeholders.

## Minimum requirements

- **Node 24** (`nvm use` reads `.nvmrc`)
- Your favourite IDE

## Intro

- Session length: **~75 minutes** (60 min core + 15 min optional AI)
- **You do not need to finish everything**
- Work as you normally would (docs, questions, pairing)
- Relax and have fun — we are here to help

## Timing


| Phase                   | Time   | Goal                                                                                                                        |
| ----------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| 1 — Filtering & sorting | 25 min | Wire UI to `/api/auctions` with React Query                                                                                 |
| 2 — Styling             | 15 min | Layout inspired by [upcoming auctions](https://www.bonhams.com/auctions/upcoming/) using **styled-components only**         |
| 3 — Testing             | 20 min | Enable tests in `lib/auctions/query.candidate.test.ts` and reach **100%** coverage                                          |
| 4 — AI (optional)       | 15 min | Style `/auction/[auctionId]` from screenshot (e.g. [The Greek Sale](https://www.bonhams.com/auction/31745/the-greek-sale/)) |


## Getting started

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## API contract

`GET /api/auctions`


| Query param  | Required | Description                                              |
| ------------ | -------- | -------------------------------------------------------- |
| `sort_by`    | No       | `start_date_asc` (default) or `start_date_desc`          |
| `auction_id` | No       | Exact auction ID filter                                  |
| `query_by`   | No       | Free-text search (title, subtitle, location, department) |
| `page_size`  | No       | Max rows returned; defaults to **all** matching rows     |


Response:

```json
{ "results": [/* Auction[] */], "total": 55 }
```

`total` is the count **before** `page_size` slicing.

## Architecture rules

- **Pages Router** only (`pages/`)
- **Provided components** under `components/` are presentational — style on **pages** with styled-components
- **No database** — all logic runs in JavaScript over `data/auctions.ts`
- First load: `**getServerSideProps`**; updates: **React Query** (`useAuctionsQuery`)
- Do not add CSS Modules / Tailwind for your styling work

## What we look for

- Clean styled-components layout (grouping by `month_group`, status badges, responsive grid)
- Sound state + data fetching (SSR initial data + client refetch)
- Functional tests, not component snapshots

## Testing

```bash
npm test
# or CI mode
npm run test:ci
```

Coverage applies to `lib/auctions/**` and `pages/api/**`. Complete the skipped tests in `query.candidate.test.ts`.

## Reference screenshots

Add interviewer-provided images under `readme-images/` (not required to run the app).

## Routes


| Route                  | Purpose                                    |
| ---------------------- | ------------------------------------------ |
| `/`                    | Upcoming auctions calendar (main exercise) |
| `/auction/[auctionId]` | Optional AI auction landing page           |



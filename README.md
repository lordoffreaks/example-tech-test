# Live pairing tech tests

Three independent exercises for technical interviews. Each is a self-contained Next.js app under `exercises/`.


| Folder                                                       | README                                         | Summary                                     |
| ------------------------------------------------------------ | ---------------------------------------------- | ------------------------------------------- |
| `[exercises/live-pairing/](exercises/live-pairing/)`         | [README](exercises/live-pairing/README.md)     | Product cards + pagination (60 min)         |
| `[exercises/auction-calendar/](exercises/auction-calendar/)` | [README](exercises/auction-calendar/README.md) | Bonhams-inspired upcoming auctions calendar |
| `[exercises/auction-lots/](exercises/auction-lots/)`         | [README](exercises/auction-lots/README.md)     | Bonhams-inspired auction page + lot gallery |


> Bonhams exercises are **inspired by** [bonhams.com](https://www.bonhams.com) — not affiliated with or endorsed by Bonhams.

## Stack (each exercise)

- Next.js **16** (Pages Router)
- Node **24**
- TypeScript
- styled-components
- Jest (+ MSW where API fetching is tested)

The Bonhams exercises also use TanStack React Query.

## Quick start

```bash
cd exercises/live-pairing   # or auction-calendar / auction-lots
nvm use
npm ci
npm run dev
```


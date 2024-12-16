# ✨ Live Pairing Tech Test ✨

## Minimun Requirements 📣

- Node 20
- Your favourite IDE

## Intro 📣

- Test is 60 Min's Long
- **You don't need to finish everything**
- Work how you normally would
  - Use google/documentation
  - Ask questions

We know you are good 😉, **relax and have fun!!!**, we are here to help! 🎉

## Goal 🏁

- Style as per the spec below the list of cards (Block 1 - 20m).
- Implement pagination based off the results from an API (Block 2 - 25m).
- Test implementation (Block 3 - 15m).

We will be looking out for:

- Clean CSS styles
- An understanding of state and data fetching

## Where to Start 🌠

Get the dev environment up and running!

```bash
npm ci
```

```bash
npm run dev
```

## Block 1 (Styling) - 20m

**Please use styled-components and CSS grid**

### Design 🎨

#### Card

![Example of Card](./readme-images/card-example.png)

- Card:
  - padding: 10px;
  - margin: 10px;
  - border-radius: 10px;
  - box-shadow: 0px 0px 15px -2px #e0e0e0;
- Image:
  - height: 200px;
  - Full width
- Title
  - font-family: sans-serif;
  - font-size: 1.3rem;
  - font-weight: bold;
- Description
  - font-family: serif;
  - font-size: 1.1rem;
- Price
  - Prepended with the "Price" word
    - ONLY when a price value is available.
  - font-family: fantasy;
  - font-size: 1rem;
  - Underlined
    - Underline thickness 3px
    - Underline color is rebeccapurple

#### Responsive Layout / Grid

- Achieve a responsive layout with **up to 4 cards** showing at 1200px width.
- Each card should get **no smaller than 260px**.
- Spacing is 10px

Find below an example of the resulting grids based on different screen sizes.

![Example of 1 card layout](./readme-images/1-card-layout.png)

![Example of 2 card layout](./readme-images/2-card-layout.png)

![Example of 3 card layout](./readme-images/3-card-layout.png)

![Example of 4 card layout](./readme-images/4-card-layout.png)

#### Pagination (Optional, only if you have time enough)

Pagination with `<` & `>` added and styled to buttons.

![Basic Pagination](./readme-images/basic-pagination.png)

## Block 2 (React) - 25m

### Functionality 🤖

- Fetch all results from the API using getServerSideProps
- The API always returns 25 results you don't need to do multiple requests, the pagination needs to be done in-memory
- Render results with 12 per page
- Pagination should update displayed results

## Block 3 (Testing) - 15m

### Functionality 🤖

Run

```bash
npm run test
```

Let's make sure everything is green

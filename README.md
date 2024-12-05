# ✨ Live Pairing Tech Test ✨

## Minimun Requirements 📣

- Node 20
- Your favourite IDE

## Intro 📣

- Test is 50 Min's Long
- **You don't need to finish everything**
- Work how you normally would
  - Use google/documentation
  - Ask questions

We know you are good 😉, **relax and have fun!!!**, we are here to help! 🎉

## Goal 🏁

- Style as per the spec below the list of cards (Block 1 - 25m).
- Implement pagination based off the results from an API (Block 2 - 25m).

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

Might also be a good idea to start watching the tests!

```bash
npm run test
```

## Block 1 (Styling) - 25m

**Please use styled-components and CSS grid**

### Design 🎨

#### Card

![Example of Card](./readme-images/card-example.png)

- Card:
  - All padding/margin seen is `10px`
  - Border Radius is `10px`
  - Box shadow `0px 0px 15px -2px #e0e0e0`
- Image:
  - Height is `200px`
  - Full width.
- Title
  - font-family `sans-serif`
  - font-size `1.3rem`
  - font-weight `bold`
- Description
  - font-family `serif`
  - font-size `1.1rem`
- Price
  - font-family `fantasy`
  - font-size `1rem`
  - underline color is `rebeccapurple`

#### Responsive Layout / Grid

- Achieve a responsive layout with **up to 4 cards** showing at 1200px width.
- Each card should get **no smaller than 260px** and **no bigger than 600px**.
- Spacing is 10px

Find below an example of the resulting grids based on different screen sizes.

![Example of 1 card layout](./readme-images/1-card-layout.png)

![Example of 2 card layout](./readme-images/2-card-layout.png)

![Example of 3 card layout](./readme-images/3-card-layout.png)

![Example of 4 card layout](./readme-images/4-card-layout.png)

#### Pagination

Pagination with `<` & `>` added and styled to buttons.

![Basic Pagination](./readme-images/basic-pagination.png)

## Block 2 (React) - 25m

### Functionality 🤖

- Fetch all results from the API using getServerSideProps
- The API always returns 25 results you don't need to do multiple requests, the pagination needs to be done in-memory
- Render results with 12 per page
- Pagination should update displayed results


### Testing 🤖

- Ensure all tests are passing and try to obtain a 100% coverage with the modifications you have done in the previous step

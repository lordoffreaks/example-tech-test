export function Card({ name, description, price, image, id }) {
  return (
    <section>
      <div>{id}</div>
      <div>{name}</div>
      <div>{description}</div>
      <div>{price}</div>
      <div>{image}</div>
    </section>
  );
}

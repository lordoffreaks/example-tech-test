interface CardProps {
  name: string;
  description: string;
  price?: string;
  image: string;
  id: string;
}

export function Card({ name, description, price, image, id }: CardProps) {
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

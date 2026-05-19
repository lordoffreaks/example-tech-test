export interface CardProps {
  id: string;
  name: string;
  description: string;
  price?: string;
  image: string;
}

export function Card({ id, name, description, price, image }: CardProps) {
  return (
    <section data-testid={`product-card-${id}`}>
      <div>{id}</div>
      <div>{name}</div>
      <div>{description}</div>
      <div>{price}</div>
      <div>{image}</div>
    </section>
  );
}

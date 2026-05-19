import type { Lot } from "../../types/lot";

export function LotCard({ lot }: { lot: Lot }) {
  return (
    <article data-testid={`lot-card-${lot.lot_id}`}>
      <img src={lot.image_url} alt="" />
      <h3>
        {lot.lot_number} — {lot.title}
      </h3>
      {lot.artist ? <p>{lot.artist}</p> : null}
      {lot.collection_label ? <p>{lot.collection_label}</p> : null}
      <p>
        {lot.currency} {lot.estimate_low.toLocaleString()} -{" "}
        {lot.estimate_high.toLocaleString()}
      </p>
      {lot.sold_price ? <p>Sold for {lot.sold_price} inc. premium</p> : null}
    </article>
  );
}

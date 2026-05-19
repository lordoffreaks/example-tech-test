import type { LotDetail } from "../../types/lot-detail";

export function LotDetailShell({ lot }: { lot: LotDetail }) {
  return (
    <article data-testid="lot-detail-shell">
      <p>Lot {lot.lot_number}</p>
      <h1>{lot.artist}</h1>
      <h2>{lot.title}</h2>
      <p>{lot.sale_datetime}</p>
      <p>
        {lot.currency} {lot.estimate_low.toLocaleString()} -{" "}
        {lot.estimate_high.toLocaleString()}
      </p>
      {lot.image_urls.map((url) => (
        <img key={url} src={url} alt="" />
      ))}
      <p>{lot.medium}</p>
      <p>{lot.dimensions}</p>
      <p>{lot.description}</p>
      <pre>{lot.footnotes}</pre>
    </article>
  );
}

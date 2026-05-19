import type { Lot } from "../../types/lot";
import { LotCard } from "../lot-card";

export function LotGallery({ lots }: { lots: Lot[] }) {
  return (
    <section data-testid="lot-gallery">
      <p>{lots.length} lots shown</p>
      {lots.map((lot) => (
        <LotCard key={lot.lot_id} lot={lot} />
      ))}
    </section>
  );
}

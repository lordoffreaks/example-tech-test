import type { LotDetail } from "../types/lot-detail";

export const lotDetails: LotDetail[] = [
  {
    lot_id: "58",
    auction_id: "31745",
    lot_number: "58AR",
    artist: "SPYROS VASSILIOU (1902-1985)",
    title: "La petite fille Demetra",
    medium:
      'signé en grec et daté "48" (au centre à droite) huile sur toile — Oil on canvas',
    dimensions: "73 x 60 cm. (28.7 × 23.6 in)",
    estimate_low: 25000,
    estimate_high: 35000,
    currency: "EUR",
    sale_datetime: "20 May 2026, 13:00 CEST",
    image_urls: [
      "https://picsum.photos/seed/lot-58-main/1200/900",
      "https://picsum.photos/seed/lot-58-alt/1200/900",
    ],
    description:
      "Peint en 1948. An emblematic work by a prominent exponent of the legendary 1930s generation.",
    footnotes: `Provenance
The artist's collection, Athens.
Dimitra Vassiliou collection, Athens.
Private collection, Athens.

Exhibitions
Athens, Zappeion Hall, Panhellenic Art Exhibition, November 1 - December 15, 1948, no. 62.
Athens, National Gallery and Alexandros Soutzos Museum, Sp. Vassiliou, retrospective exhibition, October 22 - November 30, 1975, no.17.
Athens, Agia Paraskevi Municipality Cultural Centre, Spyros Vassiliou - Hommage, November 1987.
Athens, National Gallery and Alexandros Soutzos Museum, The Child in Greek Art, 19th - 20th Century, December 15, 1993 - February 13, 1994, no. 82.
Thessaloniki, Port Authority Warehouse 1 - XXX Dimitria, Spyros Vassiliou 1930-1985, October 16 - November 30, 1995, no. 90.
Athens, Martinos Gallery, Spyros Vassiliou, Loved Ones, May 2003, no. 20.

Literature
Nea Estia magazine, no. 514, December 1, 1948, p. 1508 (discussed).
Hellénisme Contemporain magazine, September-October 1948 (discussed).
S. Vassiliou, Lights and Shadows, Athens, 1969, no. 123, p. 304 (catalogued), p. 115 (illustrated).
A. Xydis, Propositions for the History of Modern Greek Art, vol. II, Olkos editions, Athens 1976, p. 110 (discussed).
H. Kambouridis, Spyros Vassiliou, Exhibitions, Ikaros editions, Athens 1982, p. 42 (listed).
A. Kouria, Images of Children in Greek Art of the 20th Century, Dodoni editions, Athens 1991, pp. 69-72 (discussed), p. 71 (illustrated).

"Dimitra, the portrait of Vassiliou's younger daughter, has freshness and sincerity." — Hellénisme Contemporain, 1948
"A luminous, brilliant work." — Nea Estia, 1948`,
  },
];

export function getLotDetail(
  auctionId: string,
  lotId: string
): LotDetail | undefined {
  return lotDetails.find(
    (detail) => detail.auction_id === auctionId && detail.lot_id === lotId
  );
}

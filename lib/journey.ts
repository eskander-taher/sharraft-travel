/**
 * The site's idea: the page travels north. Stops are ordered by real latitude
 * (rounded degrees north), so scrolling down is literally moving up the map.
 */
export const DUBAI_LATITUDE = 25;

export const journeyStops = [
  { slug: "sochi", latitude: 44, tint: "from-[#2b1608] via-[#2b1608]/80" },
  { slug: "moscow", latitude: 56, tint: "from-[#1c0a0a] via-[#1c0a0a]/80" },
  { slug: "saint-petersburg", latitude: 60, tint: "from-[#0b1a2c] via-[#0b1a2c]/80" },
  { slug: "murmansk", latitude: 69, tint: "from-[#04121c] via-[#04121c]/80" },
] as const;

/** Writes a number in Arabic-Indic digits, for the large decorative latitude marks. */
export function arabicDigits(value: number) {
  return String(value).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);
}

export function latitudeOf(slug: string) {
  return journeyStops.find((stop) => stop.slug === slug)?.latitude;
}

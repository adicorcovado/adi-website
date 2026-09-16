/** Corcovado park stations with a dedicated tourist-info landing page. Sirena is the first; more will follow. */
export const STATION_SLUGS = ["sirena"] as const;

export type StationSlug = (typeof STATION_SLUGS)[number];

export const getCurrentStation = (slug: string | undefined): StationSlug =>
  slug && (STATION_SLUGS as readonly string[]).includes(slug)
    ? (slug as StationSlug)
    : STATION_SLUGS[0];

/**
 * Top-level response structure from OpenCage.
 */
export interface OpencageResponse {
  documentation: string;
  licenses: License[];
  rate: Rate;
  results: Result[];
  status: Status;
  stay_informed: StayInformed;
  thanks: string;
  timestamp: Timestamp;
  total_results: number;
}

/**
 * License information.
 */
export interface License {
  name: string;
  url: string;
}

/**
 * Current API usage and limits.
 */
export interface Rate {
  limit: number;
  remaining: number;
  reset: number; // Unix epoch time when the limit resets
}

/**
 * An individual geocoding result.
 */
export interface Result {
  annotations: Annotations;
  bounds: Bounds;
  components: Components;
  confidence: number;
  formatted: string;
  geometry: Geometry;
}

/**
 * Contains various derived or extra data about the location.
 */
export interface Annotations {
  DMS?: DMS;
  MGRS?: string;
  Maidenhead?: string;
  Mercator?: Mercator;
  OSM?: OSM;
  UN_M49?: UN_M49;
  callingcode?: number;
  currency?: Currency;
  flag?: string;
  geohash?: string;
  qibla?: number;
  roadinfo?: RoadInfo;
  sun?: Sun;
  timezone?: Timezone;
  what3words?: What3Words;
}

/**
 * Degrees, Minutes, Seconds for lat/lng.
 */
export interface DMS {
  lat: string; // e.g. "23° 32' 13.54632'' S"
  lng: string; // e.g. "46° 50' 9.50460'' W"
}

/**
 * Mercator projection coordinates.
 */
export interface Mercator {
  x: number;
  y: number;
}

/**
 * OpenStreetMap edit/note references and URL.
 */
export interface OSM {
  edit_url: string;
  note_url: string;
  url: string;
}

/**
 * UN M49 region codes and groupings.
 */
export interface UN_M49 {
  regions: {
    AMERICAS?: string;
    BR?: string;
    LATIN_AMERICA?: string;
    SOUTH_AMERICA?: string;
    WORLD?: string;
    [key: string]: string | undefined;
  };
  statistical_groupings: string[];
}

/**
 * Information about the local currency.
 */
export interface Currency {
  decimal_mark: string;
  html_entity: string;
  iso_code: string;
  iso_numeric: string;
  name: string;
  smallest_denomination: number;
  subunit: string;
  subunit_to_unit: number;
  symbol: string;
  symbol_first: number; // 1 if symbol is placed before the amount
  thousands_separator: string;
}

/**
 * Road information such as the side of driving, road name, etc.
 */
export interface RoadInfo {
  drive_on: string; // "right" or "left"
  road: string;
  road_type: string; // e.g. "residential"
  speed_in: string; // e.g. "km/h"
}

/**
 * Sunrise and sunset times.
 */
export interface Sun {
  rise: SunTime;
  set: SunTime;
}

/**
 * Timestamps (in seconds since Unix epoch) for various stages of sunrise/sunset.
 */
export interface SunTime {
  apparent: number;
  astronomical: number;
  civil: number;
  nautical: number;
}

/**
 * Timezone details for the location.
 */
export interface Timezone {
  name: string; // e.g. "America/Sao_Paulo"
  now_in_dst: number; // 0 or 1
  offset_sec: number; // e.g. -10800
  offset_string: string; // e.g. "-0300"
  short_name: string; // e.g. "BRT"
}

/**
 * Three-word address (What3Words).
 */
export interface What3Words {
  words: string; // e.g. "reunion.risk.brothers"
}

/**
 * Bounds describing the area where the result is valid.
 */
export interface Bounds {
  northeast: LatLng;
  southwest: LatLng;
}

/**
 * Simple latitude/longitude pair.
 */
export interface LatLng {
  lat: number;
  lng: number;
}

/**
 * Address components (country, city, state, etc.).
 */
export interface Components {
  'ISO_3166-1_alpha-2'?: string;
  'ISO_3166-1_alpha-3'?: string;
  'ISO_3166-2'?: string[];
  _category?: string;
  _normalized_city?: string;
  _type?: string;
  city?: string;
  city_district?: string;
  continent?: string;
  country?: string;
  country_code?: string;
  county?: string;
  municipality?: string;
  postcode?: string;
  region?: string;
  road?: string;
  road_type?: string;
  state?: string;
  state_code?: string;
  state_district?: string;
  suburb?: string;
}

/**
 * Coordinates in the result's geometry (lat/lng).
 */
export interface Geometry {
  lat: number;
  lng: number;
}

/**
 * Status of the API response (HTTP status, etc.).
 */
export interface Status {
  code: number;
  message: string;
}

/**
 * Where to find official news or updates from OpenCage.
 */
export interface StayInformed {
  blog: string;
  mastodon?: string;
}

/**
 * Timestamps of when the response was created.
 */
export interface Timestamp {
  created_http: string; // e.g. "Wed, 19 Jun 2024 11:03:54 GMT"
  created_unix: number; // e.g. 1718795034
}

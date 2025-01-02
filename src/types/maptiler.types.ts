/**
 * Root object of the JSON response: a FeatureCollection.
 */
export interface MaptilerResponse {
  type: 'FeatureCollection';
  features: Feature[];
  // Fields outside of the 'features' array:
  query?: string[];
  attribution?: string;
}

/**
 * Represents each Feature within the FeatureCollection.
 */
export interface Feature {
  type: 'Feature';
  properties: Properties;
  geometry: Geometry;
  bbox: number[]; // [minLon, minLat, maxLon, maxLat]
  center: [number, number]; // [lon, lat]

  place_name: string;
  place_type: string[];
  relevance: number;
  id: string;
  text: string;
  place_type_name: string[];

  // Optional fields that may appear in some Features:
  matching_text?: string;
  matching_place_name?: string;
  context?: Context[];
  address?: string;
  language?: string;

  // Language-specific fields:
  text_en?: string;
  language_en?: string;
  place_name_en?: string;
  text_fr?: string;
  language_fr?: string;
  place_name_fr?: string;
}

/**
 * Properties of each Feature. You can expand or refine as needed.
 */
export interface Properties {
  ref?: string; // e.g. "osm:r17980263"
  country_code?: string; // e.g. "be", "ie", "es"
  wikidata?: string; // e.g. "Q85070069"
  kind?: string; // e.g. "street"
  place_type_name?: string[]; // e.g. ["address"]
}

/**
 * Geometry of each Feature (usually Point, Polygon, etc.).
 */
export interface Geometry {
  type: string; // e.g. "Point"
  coordinates: number[]; // For points: [lon, lat]
}

/**
 * Context array items that describe the hierarchy of location (e.g., city, region).
 */
export interface Context {
  ref?: string; // e.g. "osm:w36506610"
  country_code?: string; // e.g. "be"
  id?: string; // e.g. "postal_code.1540459"
  text?: string; // e.g. "1000"
  wikidata?: string; // e.g. "Q28472160"
  kind?: string; // e.g. "admin_area"
  language?: string; // e.g. "en"

  // Language-specific text fields
  text_en?: string;
  language_en?: string;
  text_fr?: string;
  language_fr?: string;

  // Optional categories or OSM tags, etc.
  categories?: string[];
  'osm:tags'?: Record<string, string>;
}

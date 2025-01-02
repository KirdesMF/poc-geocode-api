/**
 * Root object: FeatureCollection
 */
export interface MapboxResponse {
  type: 'FeatureCollection';
  features: Feature[];
  attribution: string;
}

/**
 * Each Feature in the collection
 */
export interface Feature {
  type: 'Feature';
  id: string;
  geometry: Geometry;
  properties: Properties;
}

/**
 * Geometry for each feature (Point in this dataset)
 */
export interface Geometry {
  type: 'Point';
  coordinates: [number, number];
}

/**
 * Main properties object for each feature
 */
export interface Properties {
  mapbox_id: string;
  feature_type: 'address' | 'postcode' | string; // fallback to string for unrecognized types
  full_address: string;
  name: string;
  name_preferred: string;

  /**
   * Coordinates details.
   * - "accuracy" is often "point" or other descriptors.
   * - "routable_points" are location(s) suitable for routing (e.g. for directions).
   */
  coordinates: {
    longitude: number;
    latitude: number;
    accuracy?: string;
    routable_points?: Array<{
      name: string;
      latitude: number;
      longitude: number;
    }>;
  };

  /**
   * Place-formatted string (e.g., '89400 Migennes, فرنسا')
   */
  place_formatted?: string;

  /**
   * Present only for address-type features (shows match confidence on parts of the address)
   */
  match_code?: {
    address_number?: 'matched' | 'unmatched' | 'not_applicable';
    street?: 'matched' | 'unmatched' | 'not_applicable';
    postcode?: 'matched' | 'unmatched' | 'not_applicable';
    place?: 'matched' | 'unmatched' | 'not_applicable';
    region?: 'matched' | 'unmatched' | 'not_applicable';
    locality?: 'matched' | 'unmatched' | 'not_applicable';
    country?: 'matched' | 'unmatched' | 'not_applicable' | 'inferred';
    confidence?: 'low' | 'medium' | 'high' | string;
  };

  /**
   * Bounding box for some features (e.g., postcodes)
   */
  bbox?: [number, number, number, number];

  /**
   * Context block, containing related administrative hierarchy
   */
  context?: {
    address?: AddressContext;
    street?: StreetContext;
    postcode?: PostcodeContext;
    place?: PlaceContext;
    region?: RegionContext;
    district?: DistrictContext;
    locality?: LocalityContext;
    country?: CountryContext;
  };
}

/**
 * Address context
 */
export interface AddressContext {
  mapbox_id: string;
  address_number: string;
  street_name: string;
  name: string;
}

/**
 * Street context
 */
export interface StreetContext {
  mapbox_id: string;
  name: string;
}

/**
 * Postcode context
 */
export interface PostcodeContext {
  mapbox_id: string;
  name: string;
}

/**
 * Place context
 */
export interface PlaceContext {
  mapbox_id: string;
  name: string;
  wikidata_id?: string;
  translations?: Translations;
}

/**
 * Region context (with possible "alternate" region inside)
 */
export interface RegionContext {
  mapbox_id: string;
  name: string;
  wikidata_id?: string;
  region_code?: string;
  region_code_full?: string;
  translations?: Translations;
  alternate?: {
    mapbox_id: string;
    name: string;
    wikidata_id?: string;
    region_code?: string;
    region_code_full?: string;
    translations?: Translations;
  };
}

/**
 * District context (e.g., county)
 */
export interface DistrictContext {
  mapbox_id: string;
  name: string;
  wikidata_id?: string;
  translations?: Translations;
}

/**
 * Locality context
 */
export interface LocalityContext {
  mapbox_id: string;
  name: string;
  wikidata_id?: string;
  translations?: Translations;
}

/**
 * Country context
 */
export interface CountryContext {
  mapbox_id: string;
  name: string;
  wikidata_id?: string;
  country_code?: string;
  country_code_alpha_3?: string;
  translations?: Translations;
}

/**
 * Generic dictionary of translations keyed by language code,
 * each containing an object with "language" and "name".
 */
export interface Translations {
  [key: string]: {
    language: string;
    name: string;
  };
}

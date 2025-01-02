/**
 * The root structure of the HERE API response.
 */
export interface HereApiResponse {
  items: HereItem[];
}

/**
 * Each item in the 'items' array describes a location result.
 */
export interface HereItem {
  title: string;
  id: string;
  resultType: string; // e.g., "houseNumber", "street", "locality", etc.
  houseNumberType: string; // e.g., "PA"

  address: HereAddress;
  position: LatLng;
  access: LatLng[];
  mapView: MapView;
  scoring: Scoring;
}

/**
 * Address details of a location.
 */
export interface HereAddress {
  label: string; // "5 Rue Daunou, 75002 Paris, France"
  countryCode: string; // "FRA"
  countryName: string; // "France"
  stateCode: string; // "IDF"
  state: string; // "Île-de-France"
  county: string; // "Paris"
  city: string; // "Paris"
  district: string; // "2e Arrondissement"
  street: string; // "Rue Daunou"
  postalCode: string; // "75002"
  houseNumber: string; // "5"
}

/**
 * Latitude/longitude coordinates.
 */
export interface LatLng {
  lat: number;
  lng: number;
}

/**
 * Defines the bounding box of the location.
 */
export interface MapView {
  west: number;
  south: number;
  east: number;
  north: number;
}

/**
 * Scoring details for how closely the result matches the query.
 */
export interface Scoring {
  queryScore: number;
  fieldScore: FieldScore;
}

/**
 * Provides a breakdown of how each field scored in the match.
 */
export interface FieldScore {
  country: number;
  city: number;
  streets: number[];
  houseNumber: number;
  postalCode: number;
}

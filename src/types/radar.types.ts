export interface RadarResponse {
  meta: Meta;
  addresses: Address[];
}

export interface Meta {
  code: number;
}

export interface Address {
  latitude: number;
  longitude: number;
  geometry: Geometry;
  country: string;
  countryCode: string;
  countryFlag: string;
  county: string;
  distance: number;
  borough: string;
  city: string;
  number: string;
  neighborhood: string;
  postalCode: string;
  stateCode: string;
  state: string;
  street: string;
  layer: string;
  formattedAddress: string;
  placeLabel: string;
}

export interface Geometry {
  type: 'Point';
  coordinates: [number, number]; // [longitude, latitude]
}

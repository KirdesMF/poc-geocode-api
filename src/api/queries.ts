import type { HereApiResponse } from '@/types/here.types';
import type { MapboxResponse } from '@/types/mapbox.types';
import type { MaptilerResponse } from '@/types/maptiler.types';
import type { OpencageResponse } from '@/types/opencage.types';
import type { RadarResponse } from '@/types/radar.types';
import { queryOptions } from '@tanstack/vue-query';
import { computed } from 'vue';
import type { Ref } from 'vue';

const LIMIT = 5;

type Geocoding = {
  query: Ref<string>;
  language: Ref<string[]>;
  signal?: AbortSignal;
  limit?: number;
};

//----------- MAPBOX ----------------//

const MAPBOX_BASE_URL = 'https://api.mapbox.com/search/geocode/v6/forward';
const MAPBOX_API_KEY = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

async function getMapboxGeocoding({ query, language, signal, limit = LIMIT }: Geocoding) {
  const url = `${MAPBOX_BASE_URL}?q=${query.value}&language=${language.value[0]}&access_token=${MAPBOX_API_KEY}&limit=${limit}`;
  const response = await fetch(url, { signal });
  return response.json() as Promise<MapboxResponse>;
}

export const mapboxQuery = ({ query, language, limit = LIMIT }: Geocoding) => {
  return queryOptions({
    queryKey: ['mapbox', query, language, limit],
    queryFn: ({ signal }) => getMapboxGeocoding({ query, language, signal, limit }),
    enabled: computed(() => query.value.length >= 3),
  });
};

//----------- RADAR ----------------//

const RADAR_BASE_URL = 'https://api.radar.io/v1/search/autocomplete';
const RADAR_API_KEY = import.meta.env.VITE_RADAR_ACCESS_TOKEN;

async function getRadarGeocoding({ query, language, signal, limit = LIMIT }: Geocoding) {
  const url = `${RADAR_BASE_URL}?query=${query.value}&lang=${language.value[0]}&limit=${limit}`;
  const response = await fetch(url, { signal, headers: { Authorization: RADAR_API_KEY } });
  return response.json() as Promise<RadarResponse>;
}

export const radarQuery = ({ query, language, limit = LIMIT }: Geocoding) => {
  return queryOptions({
    queryKey: ['radar', query, language, limit],
    queryFn: ({ signal }) => getRadarGeocoding({ query, language, signal, limit }),
    enabled: computed(() => query.value.length >= 3),
  });
};

//----------- MAPTILER ----------------//

const MAPTILER_BASE_URL = 'https://api.maptiler.com/geocoding';
const MAPTILER_API_KEY = import.meta.env.VITE_MAPTILER_ACCESS_TOKEN;

async function getMaptilerGeocoding({ query, language, signal, limit = LIMIT }: Geocoding) {
  const url = `${MAPTILER_BASE_URL}/${query.value}.json?language=${language.value[0]}&key=${MAPTILER_API_KEY}&limit=${limit}`;
  const response = await fetch(url, { signal });
  return response.json() as Promise<MaptilerResponse>;
}

export const maptilerQuery = ({ query, language, limit = LIMIT }: Geocoding) => {
  return queryOptions({
    queryKey: ['maptiler', query, language],
    queryFn: ({ signal }) => getMaptilerGeocoding({ query, language, signal, limit }),
    enabled: computed(() => query.value.length >= 3),
  });
};

//----------- OPENCAGE ----------------//

const OPENCAGE_BASE_URL = 'https://api.opencagedata.com/geocode/v1/json';
const OPENCAGE_API_KEY = import.meta.env.VITE_OPENCAGE_ACCESS_TOKEN;

async function getOpencageGeocoding({ query, language, signal, limit = LIMIT }: Geocoding) {
  const url = `${OPENCAGE_BASE_URL}?q=${query.value}&language=${language.value[0]}&key=${OPENCAGE_API_KEY}&limit=${limit}`;
  const response = await fetch(url, { signal });
  return response.json() as Promise<OpencageResponse>;
}

export const opencageQuery = ({ query, language, limit = LIMIT }: Geocoding) => {
  return queryOptions({
    queryKey: ['opencage', query, language, limit],
    queryFn: ({ signal }) => getOpencageGeocoding({ query, language, signal, limit }),
    enabled: computed(() => query.value.length >= 3),
  });
};

//----------- HERE ----------------//

const HERE_BASE_URL = 'https://geocode.search.hereapi.com/v1/geocode';
const HERE_APP_ID = import.meta.env.VITE_HERE_APP_ID;
const HERE_ACCESS_TOKEN = import.meta.env.VITE_HERE_ACCESS_TOKEN;

async function getHereGeocoding({ query, language, signal, limit = LIMIT }: Geocoding) {
  const url = `${HERE_BASE_URL}?q=${query.value}&lang=${language.value[0]}&apiKey=${HERE_ACCESS_TOKEN}&limit=${limit}`;
  const response = await fetch(url, { signal, headers: { 'X-Request-ID': HERE_APP_ID } });
  return response.json() as Promise<HereApiResponse>;
}

export const hereQuery = ({ query, language, limit = LIMIT }: Geocoding) => {
  return queryOptions({
    queryKey: ['here', query, language, limit],
    queryFn: ({ signal }) => getHereGeocoding({ query, language, signal, limit }),
    enabled: computed(() => query.value.length >= 3),
  });
};

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAPBOX_ACCESS_TOKEN: string;
  readonly VITE_RADAR_ACCESS_TOKEN: string;
  readonly VITE_MAPTILER_ACCESS_TOKEN: string;
  readonly VITE_OPENCAGE_ACCESS_TOKEN: string;
  readonly VITE_HERE_ACCESS_TOKEN: string;
  readonly VITE_HERE_APP_ID: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

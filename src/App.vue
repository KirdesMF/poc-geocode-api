<script setup lang="ts">
import HereCombobox from '@/components/comboboxes/HereCombobox.vue';
import MapboxCombobox from '@/components/comboboxes/MapboxCombobox.vue';
import MaptilerCombobox from '@/components/comboboxes/MaptilerCombobox.vue';
import OpencageCombobox from '@/components/comboboxes/OpencageCombobox.vue';
import RadarCombobox from '@/components/comboboxes/RadarCombobox.vue';
import SelectLanguage from '@/components/SelectLanguage.vue';
import { Separator } from 'radix-vue';

const MAPBOX_LINKS = [
  { label: 'Documentation', url: 'https://docs.mapbox.com/api/search/geocoding/' },
  { label: 'Pricing', url: 'https://www.mapbox.com/pricing/' },
  { label: 'Languages', url: 'https://www.mapbox.com/pricing/' },
];

const RADAR_LINKS = [
  { label: 'Documentation', url: 'https://radar.com/documentation/api#geocoding' },
  { label: 'Pricing', url: 'https://radar.com/pricing' },
];

const MAPTILER_LINKS = [
  { label: 'Documentation', url: 'https://docs.maptiler.com/cloud/api/geocoding/' },
  { label: 'Pricing', url: 'https://www.maptiler.com/pricing/' },
];

const OPENCAGE_LINKS = [
  { label: 'Documentation', url: 'https://opencagedata.com/api' },
  { label: 'Pricing', url: 'https://opencagedata.com/pricing' },
];

const HERE_LINKS = [
  {
    label: 'Documentation',
    url: 'https://www.here.com/docs/bundle/geocoding-and-search-api-v7-api-reference/page/index.html',
  },
  { label: 'Pricing', url: 'https://www.here.com/pricing' },
];
</script>

<template>
  <header class="flex items-center justify-end gap-2 p-4 border-b border-gray-200">
    <SelectLanguage />
  </header>

  <main class="p-4 flex flex-col items-center gap-8 py-12">
    <h1 class="sr-only text-4xl font-bold">Geocoding API POC</h1>

    <section>
      <p>Pricing is based on 250k requests per month.</p>
    </section>

    <section class="flex flex-col gap-4">
      <h2 class="text-2xl font-bold text-center">Search Mapbox</h2>
      <div class="p-4 border border-gray-200 rounded-md bg-gray-800 text-white grid gap-4">
        <ul>
          <li>Rate limit: 1000 requests per minute</li>
          <li>Feature types: address, place</li>
          <li>Languages: 100</li>
        </ul>
        <nav class="flex flex-col gap-1">
          <a
            v-for="link in MAPBOX_LINKS"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="underline"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
      <MapboxCombobox />
    </section>

    <Separator class="w-144 h-px bg-gray-200" />

    <section class="flex flex-col gap-4">
      <h2 class="text-2xl font-bold text-center">Search Radar</h2>
      <div class="p-4 border border-gray-200 rounded-md bg-gray-800 text-white grid gap-4">
        <ul>
          <li>Rate limit: 1000 requests per minute</li>
          <li>Feature types: address, place</li>
          <li>Languages: 100</li>
        </ul>
        <nav class="flex flex-col gap-1">
          <a
            v-for="link in RADAR_LINKS"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="underline"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
      <RadarCombobox />
    </section>

    <Separator class="w-144 h-px bg-gray-200" />

    <section class="flex flex-col gap-4">
      <h2 class="text-2xl font-bold text-center">Search Maptiler</h2>
      <div class="p-4 border border-gray-200 rounded-md bg-gray-800 text-white grid gap-4">
        <ul>
          <li>Rate limit: 1000 requests per minute</li>
          <li>Feature types: address, place</li>
          <li>Languages: 100</li>
        </ul>
        <nav class="flex flex-col gap-1">
          <a
            v-for="link in MAPTILER_LINKS"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="underline"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
      <MaptilerCombobox />
    </section>

    <Separator class="w-144 h-px bg-gray-200" />

    <section class="flex flex-col gap-4">
      <h2 class="text-2xl font-bold text-center">Search Opencage</h2>
      <div class="p-4 border border-gray-200 rounded-md bg-gray-800 text-white grid gap-4">
        <ul>
          <li>Rate limit: 1000 requests per minute</li>
          <li>Feature types: address, place</li>
          <li>Languages: 100</li>
        </ul>
        <nav class="flex flex-col gap-1">
          <a
            v-for="link in OPENCAGE_LINKS"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="underline"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
      <OpencageCombobox />
    </section>

    <Separator class="w-144 h-px bg-gray-200" />

    <section class="flex flex-col gap-4">
      <h2 class="text-2xl font-bold text-center">Search Here</h2>
      <div class="p-4 border border-gray-200 rounded-md bg-gray-800 text-white grid gap-4">
        <ul>
          <li>Rate limit: 1000 requests per minute</li>
          <li>Feature types: address, place</li>
          <li>Languages: 100</li>
        </ul>
        <nav class="flex flex-col gap-1">
          <a
            v-for="link in HERE_LINKS"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="underline"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
      <HereCombobox />
    </section>
  </main>
</template>

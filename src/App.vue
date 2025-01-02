<script setup lang="ts">
import HereCombobox from '@/components/comboboxes/HereCombobox.vue';
import MapboxCombobox from '@/components/comboboxes/MapboxCombobox.vue';
import MaptilerCombobox from '@/components/comboboxes/MaptilerCombobox.vue';
import OpencageCombobox from '@/components/comboboxes/OpencageCombobox.vue';
import RadarCombobox from '@/components/comboboxes/RadarCombobox.vue';
import SelectLanguage from '@/components/SelectLanguage.vue';
import { Separator } from 'radix-vue';
</script>

<template>
  <header class="flex items-center justify-end gap-2 p-4 border-b border-gray-200">
    <SelectLanguage />
  </header>

  <main class="p-4 flex flex-col items-center gap-8">
    <section>
      <h1 class="sr-only text-4xl font-bold">Geocoding API POC</h1>

      <div class="flex flex-col items-center gap-2">
        <h2 class="text-2xl font-bold">Search Mapbox</h2>
        <MapboxCombobox />
      </div>
    </section>

    <Separator class="w-144 h-px bg-gray-200" />

    <div class="flex flex-col items-center gap-2">
      <h2 class="text-2xl font-bold">Search Radar</h2>
      <RadarCombobox />
    </div>

    <Separator class="w-144 h-px bg-gray-200" />

    <div class="flex flex-col items-center gap-2">
      <h2 class="text-2xl font-bold">Search Maptiler</h2>
      <MaptilerCombobox />
    </div>

    <Separator class="w-144 h-px bg-gray-200" />

    <div class="flex flex-col items-center gap-2">
      <h2 class="text-2xl font-bold">Search Opencage</h2>
      <OpencageCombobox />
    </div>

    <Separator class="w-144 h-px bg-gray-200" />

    <div class="flex flex-col items-center gap-2">
      <h2 class="text-2xl font-bold">Search Here</h2>
      <HereCombobox />
    </div>
  </main>
</template>

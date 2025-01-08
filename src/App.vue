<script setup lang="ts">
import { DATA } from '@/data';
import HereCombobox from '@/components/comboboxes/HereCombobox.vue';
import MapboxCombobox from '@/components/comboboxes/MapboxCombobox.vue';
import MaptilerCombobox from '@/components/comboboxes/MaptilerCombobox.vue';
import OpencageCombobox from '@/components/comboboxes/OpencageCombobox.vue';
import RadarCombobox from '@/components/comboboxes/RadarCombobox.vue';
import SelectLanguage from '@/components/SelectLanguage.vue';
import CallOut from '@/components/CallOut.vue';
import MapboxLogo from '@/components/logos/MapboxLogo.vue';
import RadarLogo from '@/components/logos/RadarLogo.vue';
import MaptilerLogo from '@/components/logos/MaptilerLogo.vue';
import HereLogo from '@/components/logos/HereLogo.vue';
</script>

<template>
  <header class="flex items-center justify-end gap-2 p-4 border-b border-gray-200">
    <SelectLanguage />
  </header>

  <main class="p-4 flex flex-col items-center gap-8 py-12 max-w-320 mx-auto">
    <h1 class="sr-only text-4xl font-bold">Geocoding API POC</h1>

    <!-- <section class="mb-8">
      <p>Pricing is based on 250k requests per month.</p>
    </section> -->

    <section class="flex flex-col gap-4 w-[min(100%,450px)]">
      <h2 class="text-2xl font-bold justify-center flex items-center gap-2">
        Mapbox
        <MapboxLogo class="w-6 h-6" />
      </h2>

      <CallOut>
        <ul>
          <li v-for="info in DATA.mapbox.infos" :key="info.label" class="font-light">
            {{ info.label }}:
            <span class="font-bold">{{ info.value }}</span>
          </li>
        </ul>

        <nav class="flex flex-col gap-1">
          <a
            v-for="link in DATA.mapbox.links"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="underline"
          >
            {{ link.label }}
          </a>
        </nav>
      </CallOut>

      <MapboxCombobox />
    </section>

    <!-- <div role="separator" aria-orientation="horizontal" class="w-144 h-px bg-gray-200" />

    <section class="flex flex-col gap-4 w-[min(100%,450px)]">
      <h2 class="text-2xl font-bold justify-center flex items-center gap-2">
        Radar
        <RadarLogo class="w-6 h-6" />
      </h2>

      <CallOut>
        <ul>
          <li v-for="info in DATA.radar.infos" :key="info.label">
            {{ info.label }}:
            <span class="font-bold">{{ info.value }}</span>
          </li>
        </ul>

        <nav class="flex flex-col gap-1">
          <a
            v-for="link in DATA.radar.links"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="underline"
          >
            {{ link.label }}
          </a>
        </nav>
      </CallOut>

      <RadarCombobox />
    </section>

    <div role="separator" aria-orientation="horizontal" class="w-144 h-px bg-gray-200" />

    <section class="flex flex-col gap-4 w-[min(100%,450px)]">
      <h2 class="text-2xl font-bold justify-center flex items-center gap-2">
        Maptiler
        <MaptilerLogo class="w-6 h-6" />
      </h2>

      <CallOut>
        <ul>
          <li v-for="info in DATA.maptiler.infos" :key="info.label">
            {{ info.label }}:
            <span class="font-bold">{{ info.value }}</span>
          </li>
        </ul>

        <nav class="flex flex-col gap-1">
          <a
            v-for="link in DATA.maptiler.links"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="underline"
          >
            {{ link.label }}
          </a>
        </nav>
      </CallOut>

      <MaptilerCombobox />
    </section>

    <div role="separator" aria-orientation="horizontal" class="w-144 h-px bg-gray-200" />

    <section class="flex flex-col gap-4 w-[min(100%,450px)]">
      <h2 class="text-2xl font-bold text-center">Opencage</h2>

      <CallOut>
        <ul>
          <li v-for="info in DATA.opencage.infos" :key="info.label">
            {{ info.label }}:
            <span class="font-bold">{{ info.value }}</span>
          </li>
        </ul>

        <nav class="flex flex-col gap-1">
          <a
            v-for="link in DATA.opencage.links"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="underline"
          >
            {{ link.label }}
          </a>
        </nav>
      </CallOut>

      <OpencageCombobox />
    </section>

    <div role="separator" aria-orientation="horizontal" class="w-144 h-px bg-gray-200" />

    <section class="flex flex-col gap-4 w-[min(100%,450px)]">
      <h2 class="text-2xl font-bold justify-center flex items-center gap-2">
        Here
        <HereLogo class="w-6 h-6" />
      </h2>

      <CallOut>
        <ul>
          <li v-for="info in DATA.here.infos" :key="info.label">
            {{ info.label }}:
            <span class="font-bold">{{ info.value }}</span>
          </li>
        </ul>

        <nav class="flex flex-col gap-1">
          <a
            v-for="link in DATA.here.links"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="underline"
          >
            {{ link.label }}
          </a>
        </nav>
      </CallOut>

      <HereCombobox />
    </section> -->
  </main>
</template>

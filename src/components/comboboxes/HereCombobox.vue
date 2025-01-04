<script setup lang="ts">
import { hereQuery } from '@/api/queries';
import { DEFAULT_DEBOUNCE_TIME, DEFAULT_LANGUAGE, DEFAULT_LIMIT } from '@/constantes';
import { Combobox, createListCollection } from '@ark-ui/vue';
import { useQuery } from '@tanstack/vue-query';
import { useDebounce, useStorage } from '@vueuse/core';
import { Loader, Search } from 'lucide-vue-next';
import { computed, ref } from 'vue';

const query = ref('');

const language = useStorage('language', [DEFAULT_LANGUAGE]);
const debouncedQuery = useDebounce(query, DEFAULT_DEBOUNCE_TIME);
const { data, isFetching } = useQuery(
  hereQuery({ query: debouncedQuery, language, limit: DEFAULT_LIMIT }),
);

const collection = computed(() =>
  createListCollection({
    items: data?.value?.items ?? [],
    itemToString: (item) => item.title,
    itemToValue: (item) => item.title,
  }),
);

function handleInputChange(details: Combobox.InputValueChangeDetails) {
  query.value = details.inputValue.toLocaleLowerCase();
}
</script>

<template>
  <Combobox.Root :collection="collection" @input-value-change="handleInputChange">
    <Combobox.Control class="w-full p-2 border border-gray-200 rounded-md flex items-center gap-2">
      <Search class="w-4 h-4" />
      <Combobox.Input
        class="w-full outline-none placeholder:text-sm"
        placeholder="Search address"
      />
      <Loader v-if="isFetching" class="w-4 h-4 animate-spin" />
    </Combobox.Control>

    <Teleport to="body">
      <Combobox.Positioner>
        <Combobox.Content
          :class="[
            'w-full max-h-[220px] overflow-y-auto rounded-md bg-white shadow-md',
            data && 'border-gray-200 border',
          ]"
        >
          <Combobox.ItemGroup>
            <Combobox.Item
              v-for="item in collection.items"
              :key="item.id"
              :item="item"
              :class="[
                'px-2 py-1 max-w-full overflow-hidden text-ellipsis whitespace-nowrap',
                'data-highlighted:bg-gray-100',
              ]"
            >
              {{ item.title }}
            </Combobox.Item>
          </Combobox.ItemGroup>
        </Combobox.Content>
      </Combobox.Positioner>
    </Teleport>
  </Combobox.Root>
</template>

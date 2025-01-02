<script setup lang="ts">
import { maptilerQuery } from '@/api/queries';
import { Combobox, createListCollection } from '@ark-ui/vue';
import { useQuery } from '@tanstack/vue-query';
import { useDebounce, useStorage } from '@vueuse/core';
import { computed, ref } from 'vue';

const query = ref('');

const language = useStorage('language', ['']);
const debouncedQuery = useDebounce(query, 1500);
const { data, isFetching } = useQuery(maptilerQuery({ query: debouncedQuery, language, limit: 6 }));

const collection = computed(() =>
  createListCollection({
    items: data?.value?.features ?? [],
    itemToString: (item) => item.place_name,
    itemToValue: (item) => item.id,
  }),
);

function handleInputChange(details: Combobox.InputValueChangeDetails) {
  query.value = details.inputValue.toLocaleLowerCase();
}
</script>

<template>
  <Combobox.Root :collection="collection" @input-value-change="handleInputChange">
    <Combobox.Control class="w-96 p-2 border border-gray-200 rounded-md">
      <Combobox.Input class="w-full outline-none" placeholder="Search address" />
    </Combobox.Control>

    <Teleport to="body">
      <Combobox.Positioner>
        <Combobox.Content
          class="w-96 max-h-[220px] overflow-y-auto border border-gray-200 rounded-md bg-white"
        >
          <div v-if="isFetching">Loading...</div>
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
              {{ item.place_name }}
            </Combobox.Item>
          </Combobox.ItemGroup>
        </Combobox.Content>
      </Combobox.Positioner>
    </Teleport>
  </Combobox.Root>
</template>

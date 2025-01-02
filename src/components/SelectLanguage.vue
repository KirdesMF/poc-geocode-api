<script setup lang="ts">
import { createListCollection, Select } from '@ark-ui/vue';
import { Earth } from 'lucide-vue-next';
import { useStorage } from '@vueuse/core';

const language = useStorage('language', ['en']);
const languages = createListCollection({
  items: [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'Spanish', value: 'es' },
    { label: 'German', value: 'de' },
    { label: 'Italian', value: 'it' },
    { label: 'Portuguese', value: 'pt' },
    { label: 'Russian', value: 'ru' },
    { label: 'Chinese', value: 'zh' },
    { label: 'Dutch', value: 'nl' },
    { label: 'Arabic', value: 'ar' },
    { label: 'Japanese', value: 'ja' },
    { label: 'Korean', value: 'ko' },
    { label: 'Hindi', value: 'hi' },
  ],
});

function onChange(event: string[]) {
  const value = event[0];
  language.value = [value];
}
</script>

<template>
  <Select.Root :collection="languages" @update:model-value="onChange" v-model="language">
    <Select.Label as-child>
      <span class="sr-only">Language</span>
    </Select.Label>

    <Select.Control>
      <Select.Trigger class="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200">
        <Earth />
        <Select.ValueText placeholder="Select language" />
      </Select.Trigger>
    </Select.Control>

    <Teleport to="body">
      <Select.Positioner class="w-40">
        <Select.Content
          class="w-full bg-white rounded-md shadow-md border border-gray-200 p-2 grid gap-1"
        >
          <Select.Item
            v-for="item in languages.items"
            :key="item.value"
            :item="item"
            class="data-highlighted:bg-gray-100 flex items-center justify-between"
          >
            <Select.ItemText>{{ item.label }}</Select.ItemText>
            <Select.ItemIndicator>✓</Select.ItemIndicator>
          </Select.Item>
        </Select.Content>
      </Select.Positioner>
    </Teleport>
  </Select.Root>
</template>

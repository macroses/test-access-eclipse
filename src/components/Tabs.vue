<script setup lang="ts">
import {ref} from "vue";

const tabs = ref([
  { title: 'Список валют', },
  { title: 'Конвертер', },
])

const emits = defineEmits<{
  (e: 'setActiveTab', tab: number): void
}>();

const activeTab = ref(1);
const setActiveTab = (index: number) => {
  activeTab.value = index;
  emits('setActiveTab', activeTab.value)
}
</script>

<template>
  <div class="tabs">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      :class="{ active: activeTab === index }"
      @click="setActiveTab(index)">
      {{ tab.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import CurrencyListHead from "./CurrencyListHead.vue";
import CurrencyTable from "./CurrencyTable.vue";
import MyInput from "./MyInput.vue";
import {ref} from "vue";

const searchQuery = ref('');

const emits = defineEmits<{
  (e: 'dropSearch', value: string): void
}>()
const dropSearch = () => {
  emits('dropSearch', searchQuery.value)
}
</script>

<template>
  <div class="currency">
    <MyInput
      v-model="searchQuery"
      inputType="text"
      @input="dropSearch"
      placeholder="Найти валюту"
    />
    <CurrencyListHead />
    <CurrencyTable :search-query="searchQuery"/>
  </div>
</template>

<style scoped>

</style>
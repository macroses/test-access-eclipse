<script setup lang="ts">
import CurrencyListHead from "./CurrencyListHead.vue";
import CurrencyTable from "./CurrencyTable.vue";
import MyInput from "./MyInput.vue";
import {ref} from "vue";

const searchQuery = ref('');
</script>

<template>
  <div class="currency">
    <MyInput
      v-model="searchQuery"
      inputType="text"
      placeholder="Найти валюту"
    />
    <CurrencyListHead />
    <CurrencyTable :search-query="searchQuery"/>
  </div>
</template>
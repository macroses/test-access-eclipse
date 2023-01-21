<script setup lang="ts">
import {computed, ref} from "vue";
import {useStore} from "../store/store";
import CurrencyTableEmpty from "./CurrencyTableEmpty.vue";

const props = defineProps<{
  searchQuery: string
}>();

const store = useStore();
const isCurrencyGrow = ref(false);

const searchResult = computed(() => {
  // отдаем то что совпадает с запросом по имени или числовому коду
  return store.currencyCollection.filter((currency) => {
    const editedQuery = props.searchQuery.toLowerCase()

    if (
      currency.Name.toLowerCase().includes(editedQuery)
      || currency.NumCode.toLowerCase().includes(editedQuery)) {
      return currency
    }
  })
})

const calculateDifference = (current: number, prev: number) => {
  return (current - prev).toFixed(4)
}
</script>

<template>
  <ul class="currency__list" v-if="searchResult.length">
    <!-- можно было сделать и таблицей, но они хуже стилизуются -->
    <li class="currency__item" v-for="item in searchResult" :key="item.ID">
      <div class="currency__item-name cell">{{item.Name}}</div>
      <div class="currency__item-code cell">код: <span style="font-weight: bold">{{item.NumCode}}</span></div>
      <div class="currency__item-prev cell">{{item.Previous}} ₽</div>
      <div class="currency__item-value cell">{{item.Value}} ₽</div>
      <div
        :class="Math.sign(item.Value - item.Previous) === 1 ? 'grow' : 'down'"
        class="currency__item-change cell"
      >{{ calculateDifference(item.Value, item.Previous) }}</div>
    </li>
  </ul>
  <CurrencyTableEmpty v-else/>
</template>
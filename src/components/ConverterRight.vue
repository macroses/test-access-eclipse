<script setup lang="ts">
import MySelect from "./MySelect.vue";
import {Collection} from "../interfaces/types";
import {useStore} from "../store/store";
import {watch, ref} from "vue";

const store = useStore();

const getChangeRightValue = (rightSide: Collection) => store.currencyRightValue = rightSide;
watch(() => ({ left: store.currencyLeftValue, right: store.currencyRightValue }), () => {
  store.calculateCurrency
}, {immediate: true});
</script>

<template>
  <div class="converter__right">
    <MySelect
      @emitCurrency="getChangeRightValue"
      :data="store.currencyCollection"
      :chosen-value="store.currencyRightValue"
    />
    <div class="result">{{ store.calculateCurrency }}</div>
  </div>
</template>

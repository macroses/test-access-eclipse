<script setup lang="ts">
import MySelect from "./MySelect.vue";
import {Collection} from "../interfaces/types";
import {useStore} from "../store/store";

const store = useStore();

const getChangeRightValue = (rightSide: Collection) => store.currencyRightValue = rightSide;
</script>

<template>
  <div class="converter__right">
    <MySelect
      @emitCurrency="getChangeRightValue"
      :data="store.currencyCollection"
      :chosen-value="store.currencyRightValue"
    />
    <div class="result">{{ store.calculatedResult }}</div>
  </div>
</template>

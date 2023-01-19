<script setup lang="ts">
import MySelect from "./MySelect.vue";
import MyInput from "./MyInput.vue";
import {Collection} from "../interfaces/types";
import {useStore} from "../store/store";

const store = useStore();

const getChangeLeftValue = (leftSide: Collection) => store.currencyLeftValue = leftSide;
</script>

<template>
  <div class="converter__left">
    <MySelect
      @emitCurrency="getChangeLeftValue"
      :data="store.currencyCollection"
      :chosen-value="store.currencyLeftValue"
    />
    <MyInput
      v-model.number="store.currencyNumber"
      input-type="number"
      placeholder="Количество приорбретаемой валюты"/>
  </div>
</template>

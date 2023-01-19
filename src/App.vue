<script setup lang="ts">
import { useStore } from "./store/store";
import { onMounted, ref } from "vue";
import MyHeader from "./components/MyHeader.vue";
import Currency from "./components/Currency.vue";
import MySelect from "./components/MySelect.vue";
import Tabs from "./components/Tabs.vue";
import MyInput from "./components/MyInput.vue";
import {Collection} from "./interfaces/types";

const store = useStore();
onMounted(() => store.fetchCurrency());
const activeTab = ref(0);

const getActiveTab = (emitTab: number) => activeTab.value = emitTab;
const getChangeLeftValue = (leftSide: Collection) => store.currencyLeftValue = leftSide;
const getChangeRightValue = (rightSide: Collection) => store.currencyRightValue = rightSide;
</script>

<template>
  <MyHeader />
  <main>
    <div class="container">
      <Tabs @setActiveTab="getActiveTab"/>
      <div class="tab-content">
        <Currency v-if="activeTab === 0" />

        <div class="converter" v-if="activeTab === 1">
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
          <button
            @click="store.revertValues"
            type="button"
            class="converter__change-button">
            ⇆
          </button>
          <div class="converter__right">
            <MySelect
              @emitCurrency="getChangeRightValue"
              :data="store.currencyCollection"
              :chosen-value="store.currencyRightValue"
            />
            <div class="result">{{ store.calculatedResult }}</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.converter {
  display: flex;
  gap: 20px;
}

.converter__left,
.converter__right {
  flex: 1;
}

.converter__change-button {
  background-color: transparent;
  border: 0;
  font-size: 20px;
}
</style>

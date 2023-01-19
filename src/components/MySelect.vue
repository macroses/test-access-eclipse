<script setup lang="ts">
import {ref} from "vue";
import type {Collection} from "../interfaces/types";
import {clickOutside} from "../utility/clickOutside";

const props = defineProps<{
  data: Array<Collection>,
  chosenValue?: Collection
}>();

const selectList = ref(null);

const isListOpen = ref(false);

const emits = defineEmits<{ (e: 'emitCurrency', value: Collection): void }>();
const selectedValue = ref(props.chosenValue?.Name)
const emitCurrency = ( value: Collection) => {
  selectedValue.value = value.Name
  emits('emitCurrency', value);
}

const openList = () => isListOpen.value = !isListOpen.value;

clickOutside(selectList, () => isListOpen.value = false);
</script>

<template>
  <div class="select">
    <div
      ref="selectList"
      class="select__value"
      @click="openList">
      {{chosenValue?.Name || 'Выберите валюту'}}
    </div>
    <ul
      :class="{active: isListOpen}"
      class="select__list">
      <li
        v-for="option in data"
        :value="option.Name"
        :key="option.ID"
        class="select__option"
        @click="emitCurrency(option)"
      >
        {{ option.Name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.select {
  width: 100%;
  position: relative;
  font-size: 14px;
}

.select__value {
  border: 1px solid rgba(0,0,0, 0.1);
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.select__list {
  max-height: 200px;
  border: 1px solid rgba(0,0,0, 0.1);
  border-top: 0;
  top: 100%;
  left: 0;
  width: 100%;
  overflow: auto;
  position: absolute;
  transform: scaleY(0);
  transform-origin: top;
  transition: 0.3s;
}

.select__option {
  font-size: 13px;
  background-color: var(--color-bg);
  padding: 5px 10px;
  cursor: pointer;
}

.select__option:hover {
  background-color: rgba(250, 250, 250, 1);
}

.select__list.active {
  transform: scaleY(1);
}
</style>
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

<script setup lang="ts">
import {createDebounce} from "../utility/debounce";

const props = defineProps<{
  inputType: string;
  placeholder?: string;
  modelValue: any;
}>();

const debounce = createDebounce()
</script>

<template>
  <input class="search"
     type="text"
     :value="modelValue"
     @input="debounce(() => $emit('update:modelValue', $event.target.value), 500)"
     :type="inputType"
     :placeholder="placeholder">
</template>

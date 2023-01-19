<script setup lang="ts">
const props = defineProps<{
  inputType: string;
  placeholder?: string;
  modelValue: any;
}>();
</script>

<template>
  <input class="search"
     type="text"
     :value="modelValue"
     @input="$emit('update:modelValue', $event.target.value)"
     :type="inputType"
     :placeholder="placeholder">
</template>

<script setup lang="ts">
import { inject } from 'vue'

const props = defineProps<{
  title: string
}>()

const selectedTitle = inject('selectedTitle')
</script>

<template>
  <div class="tabs__content" v-if="selectedTitle === title">
    <slot />
  </div>
</template>
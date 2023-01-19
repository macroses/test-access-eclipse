<script setup lang="ts">
import { useStore } from "./store/store";
import { onMounted } from "vue";
import MyHeader from "./components/MyHeader.vue";
import Main from "./components/Main.vue";

const store = useStore();
onMounted(() => store.fetchCurrency());
</script>

<template>
  <MyHeader />
  <Main />
</template>

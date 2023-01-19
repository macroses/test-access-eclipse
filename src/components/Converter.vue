<script setup lang="ts">
import MySelect from "./MySelect.vue";
import MyInput from "./MyInput.vue";
import {useStore} from "../store/store";
import {Collection} from "../interfaces/types";
import ConverterLeft from "./ConverterLeft.vue";
import ConverterRight from "./ConverterRight.vue";

const store = useStore();


</script>

<template>
  <div class="converter" >
    <ConverterLeft />
    <button
      @click="store.revertValues"
      type="button"
      class="converter__change-button">
      ⇆
    </button>
    <ConverterRight />
  </div>
</template>

<script setup lang="ts">
import TabsWrapper from "./TabsWrapper.vue";
import TabItem from "./TabItem.vue";
import Currency from "./Currency.vue";
import Converter from "./Converter.vue";
</script>

<template>
  <main>
    <div class="container">
      <TabsWrapper>
        <TabItem title="Просмотр валют">
          <Currency />
        </TabItem>
        <TabItem title="Конвертер">
          <Converter />
        </TabItem>
      </TabsWrapper>
    </div>
  </main>
</template>

<style scoped>

</style>
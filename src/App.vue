<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import AppTable from "./components/AppTable.vue";
import AppButton from "./components/AppButton.vue";
import AppModal from "./components/AppModal.vue";

import { store } from "./store_company.js";

store.value.initStore();

</script>

<template>
  <AppHeader pageheader="Тестовое задание" />
  <AppTable />
  <AppButton />
  <AppModal />
</template>

<style scoped></style>

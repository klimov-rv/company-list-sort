<script lang="ts" setup>
import { store } from "@/store_company.js";
import AppModalWindow from "./AppModalWindow.vue";
</script>
<template>
  <div class="overlay" v-if="store.isShowModal" @click="store.closeModal"></div>
  <AppModalWindow v-if="store.isShowModal" />
</template>
<style scoped>
.overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
}
</style> 
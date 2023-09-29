<script setup lang="ts">
import { ref } from "vue";
import { table_store } from "./../store_table_data.js";
const selectedCompany = ref<number>(0);
</script>
<template lang="">
  <br />
  {{ selectedCompany }}
  <select v-model="selectedCompany">
    <option :value="0" disabled>Выберите из списка...</option>
    <option v-for="option in table_store.data" :value="option.id">
      {{ option.td1 }}
    </option>
  </select>
</template>
<style lang=""></style>

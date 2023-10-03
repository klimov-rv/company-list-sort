<script setup lang="ts">
import { ref } from "vue";
import { store } from "@/store_company.js";

const selectedCompany = ref<number>(0);
defineEmits(["change:selected"]);
</script>
<template lang="">
  <select
    v-model="selectedCompany"
    @change="$emit('change:selected', parseInt($event.target.value))"
  >
    <option :value="0" disabled>Выберите из списка...</option>
    <option v-for="option in store.companyList" :value="option.id">
      {{ option.title }}
    </option>
  </select>
</template>
<style lang=""></style>

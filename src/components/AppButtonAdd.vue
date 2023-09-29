<script setup lang="ts">
import { store } from "./../store_company.js";
import type { Company } from "./../types/Company";
defineProps<{ company: Company }>(); 
</script>

<template>
  <button @click="store.addCompanyHandler(company)">Добавить</button>
</template>
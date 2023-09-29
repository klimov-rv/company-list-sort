<script lang="ts" setup>
import { ref } from "vue";
import { store } from "./../store_company.js";
import AppSelect from "./AppSelect.vue";
import AppButtonAdd from "./AppButtonAdd.vue";
import type { Company } from "./../types/Company";

const newCompany = ref<Company>({
  id: 0,
  title: "",
  phone: "+7",
  parent_company_id: 1,
});
</script>
<template>
  <div class="modal" v-if="store.isShowModal">
    <button class="close" @click="store.closeModal">x</button>
    <h3>Добавить</h3>
    <p>Название компании</p>
    <input v-model="newCompany.title" placeholder="Введите название..." />
    <p>Телефон компании</p>
    <input v-model="newCompany.phone" placeholder="Введите название..." />
    <p>Выберите родительскую компанию</p>
    <input
      v-model="newCompany.parent_company_id"
      placeholder="Введите название..."
    />

    <AppSelect :company="newCompany" />
    <p>Добавить и закрыть</p>
    <pre>{{ newCompany }}</pre>
    <AppButtonAdd :company="newCompany" />
  </div>
</template>
<style scoped>
.modal {
  position: fixed;
  width: 300px;
  z-index: 9999;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>

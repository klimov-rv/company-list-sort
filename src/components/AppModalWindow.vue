<script lang="ts" setup>
import type { Company } from "./../types/Company";
import { ref } from "vue";
import { store } from "./../store_company.js";
import AppSelect from "./AppSelect.vue";
import AppButtonAdd from "./AppButtonAdd.vue";

const newCompany = ref<Company>({
  id: 0,
  title: "",
  phone: "+7",
  parent_company_id: null,
});
function updateId(id_value: number) {
  newCompany.value.parent_company_id = id_value;
}
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
    <AppSelect @change:selected="updateId" />
    <p></p>
    <!-- <pre>{{ newCompany }}</pre> -->
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

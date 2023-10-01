<script setup lang="ts">
import type { TableRow } from "./../types/TableRow";
import { nextTick, computed } from "vue";
import { store } from "./../store_company.js";
import { table_store } from "./../store_table_data.js";
import AppTableRow from "./AppTableRow.vue";

table_store.value.initTableData();
const tableData = table_store.value.getTableData();

let sortDirection = 1;
let sortKey = "";

async function sortBy(key: any) {
  if (sortKey === key) {
    sortDirection = sortDirection * -1;
  } else {
    sortDirection = 1;
    sortKey = key;
  }
  table_store.value.sortTableData(key, sortDirection);  
}

function sortIcon(key: any) {
  if (sortKey === key) {
    return sortDirection && "fas fa-chevron-down";
  }
  return;
}

function iconStyle(key: any) {
  if (sortKey === key) {
    return { transform: `rotate(${sortDirection === 1 ? 0 : 180}deg)` };
  }
  return {};
}
</script>
<template lang="">
  <div style="display: flex;">
    <div class="table_wrapper">
      <table>
        <colgroup>
          <col style="width: 230px;" />
          <col style="width: 50%;" />
        </colgroup>
        <tr>
          <th @click="sortBy('td1')">
            Компания
            <i :class="sortIcon('name')" :style="iconStyle('name')"></i>
          </th>
          <th @click="sortBy('td2')">
            Телефон
            <i :class="sortIcon('phone')" :style="iconStyle('phone')"></i>
          </th>
        </tr>
        <AppTableRow
          v-for="item in table_store.data"
          :key="item.id"
          :tableRow="item"
        />
      </table>
    </div>
    <!-- <div style="height: 500px; overflow: scroll;">
      <pre>{{ store.companyList }}</pre>
    </div>
    <div style="height: 500px; overflow: scroll;">
      <pre>{{ table_store.data }}</pre>
    </div> -->
  </div>
</template>
<style>
.table_wrapper {
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid #eeeeee;
}
table {
  border-radius: 16px;
  border-spacing: 0;
  border-collapse: collapse;
  border: 0px solid;
}
table th {
  text-align: left;
  color: #888888;
}
table tr {
  border-bottom: 1px solid #eeeeee;
}
table tr:last-child {
  border-bottom: 0px solid;
}
table th,
table td {
  padding: 8px 16px;
}

table th:first-child,
table td:first-child {
  background-color: #f8f8f8;
  border-right: 1px solid #eeeeee;
  white-space: nowrap;
}
</style>

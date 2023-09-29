<script setup lang="ts">
import type { TableRow } from "./../types/TableRow";
import { ref } from "vue";
import { table_store } from "./../store_table_data.js";
import AppTableRow from "./AppTableRow.vue";
 
</script>
<template lang=""> 
  <table>
    <colgroup>
      <col style="width: 50%;" />
      <col style="width: 50%;" />
    </colgroup>

    <tr>
      <!-- <th @click="sortBy('id')"></td>
            <th @click="sortBy('name')">
                Name
                <i
                    :class="sortIcon('name')"
                    :style="iconStyle('name')"
                >
                </i>
            </th> -->
      <th>Компания</th>
      <th>
        Телефон
      </th>
    </tr>
    <AppTableRow
      v-for="item in table_store.data"
      :key="item.id"
      :tableRow="item"
    />
  </table>
</template>
<style lang=""></style>

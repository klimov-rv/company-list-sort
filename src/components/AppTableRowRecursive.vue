<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    tableRow: Object;
    tabLevel?: number | undefined;
  }>(),
  {
    tabLevel: 0,
  }
);

import { ref } from "vue";
import type { TableRow } from "./../types/TableRow";
const isShowChildList = ref<boolean>(false);
const tabRepeat = props.tabLevel + 1;
const tabulation = "&nbsp;&nbsp;&nbsp;&nbsp;".repeat(tabRepeat);
</script>
<template lang="">
  <tr>
    <td>
      <span v-html="tabulation"></span>
      <span
        v-if="tableRow.isParent"
        @click="isShowChildList = !isShowChildList"
      >
        +
      </span>
      {{ tableRow.td1 }}
    </td>
    <td>
      {{ tableRow.td2 }}
    </td>
  </tr>
  <AppTableRowRecursive
    v-if="tableRow.isParent && isShowChildList"
    v-for="item in tableRow.child_rows"
    :key="item.id"
    :tableRow="item"
    :tabLevel="tabLevel + 1"
  />
</template>
<style lang=""></style>

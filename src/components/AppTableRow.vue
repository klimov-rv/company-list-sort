<script lang="ts" setup>
import { ref } from "vue";
defineProps<{
  tableRow: Object;
}>();
import AppTableRowRecursive from "./AppTableRowRecursive.vue";
const isShowChildList = ref<boolean>(false);
</script>
<template lang="">
  <tr>
    <td>
      <span
        v-if="tableRow.isParent"
        @click="isShowChildList = !isShowChildList"
        :class="{'opened': isShowChildList}"
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
  />
</template>
<style lang=""></style>

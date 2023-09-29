<script lang="ts" setup>
defineProps<{
  tableRow: Object;
}>();
// import { defineComponent, type PropType } from "vue";
// export default defineComponent({
//   props: {
//     tableRow: {
//       type: Object as PropType<{
//         id: number,
//         td1: string,
//         td2: string,
//         haveChild: boolean
//       }>,
//       required: true,
//     },
//   },
// });
</script>
<template lang="">
  <tr>
    <td>
      <span v-if="tableRow.haveChild">+</span>
      {{ tableRow.td1 }}
    </td>
    <td>
      {{ tableRow.td2 }}
    </td>
  </tr>
</template>
<style lang=""></style>

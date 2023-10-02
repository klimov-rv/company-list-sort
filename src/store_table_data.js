import { ref, computed } from 'vue'
import { store } from "./store_company.js";
import mutateForTable from "./mutate_to_table.js";
import sortTable from "./sort_table.js";

export const table_store = ref({
    data: [],
    initTableData() {
        this.data = computed(() => mutateForTable(store.value.companyList, undefined, true));
        const table_sort = JSON.parse(localStorage.getItem('table_sort'));
        if (table_sort) {
            this.sortTableData(table_sort.key, table_sort.direction);
        }
    },
    sortTableData(key, direction) {
        this.data = computed(() => sortTable(mutateForTable(store.value.companyList, undefined, true), key, direction));
        localStorage.setItem('table_sort', JSON.stringify({ key: key, direction: direction }));
    }
})
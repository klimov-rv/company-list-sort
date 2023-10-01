import { ref, computed } from 'vue'
import { store } from "./store_company.js";
import mutateForTable from "./mutate_to_table.js";
import sortTable from "./sort_table.js";

export const table_store = ref({
    isSorted: false,
    sortKey: "",
    sortDirection: 1,
    data: [],
    sortedData: [],
    initTableData() {

        // if (process.browser) {
        //     state.table_store = localStorage.getItem('table_store')  
        // }
        this.data = computed(() => mutateForTable(store.value.companyList, undefined, true));
    },
    getTableData() {
        this.sortTableData(this.sortKey, this.sortDirection)
        return computed(() => this.data)
    },
    sortTableData(key, direction) {
        this.sortKey = key;
        this.sortDirection = direction;
        const dataToSort = this.data; 
        this.data = computed(() => sortTable(mutateForTable(store.value.companyList, undefined, true), key, direction));
    }
})
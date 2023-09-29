import { ref, computed } from 'vue'
import { store } from "./store_company.js";

function tableDataAdapter(companyList) {
    const tableData = [];
    companyList.forEach((company) => {
        tableData.push({
            id: company.id,
            td1: company.title,
            td2: company.phone,
            haveChild: (company.parent_id) ? true : false,
            haveParent: (company.parent_id) ? true : false
        })
    })
    return tableData
}

export const table_store = ref({
    isSorted: false,
    data: computed(() => tableDataAdapter(store.value.companyList)),
    getData() {
        return this.data;
    },
})
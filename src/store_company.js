import { ref } from 'vue'

export const store = ref({
    isShowModal: false,
    // mockData: [
    //     {
    //         id: 313,
    //         td1: "Сбербанк",
    //         td2: "+7 941 123 21 42",
    //         haveChild: false,
    //     },
    //     {
    //         id: 311,
    //         td1: "Яндекс",
    //         td2: "+7 312 312 31 23",
    //         haveChild: false,
    //     },
    //     {
    //         id: 111,
    //         td1: "VK Group",
    //         td2: "+7 123 999 99 99",
    //         haveChild: true,
    //     },
    // ],
    // companyList: [],
    companyList: [{
        id: 313,
        title: "Сбербанк",
        phone: "+7 941 123 21 42",
        parent_id: null,
    },
    {
        id: 311,
        title: "Яндекс",
        phone: "+7 312 312 31 23",
        parent_id: null,
    },
    {
        id: 111,
        title: "VK Group",
        phone: "+7 123 999 99 99",
        parent_id: 311,
    }],
    openModal() {
        this.isShowModal = true;
    },
    closeModal() {
        this.isShowModal = false;
    },
    addCompany(company) {
        console.log(this.companyList);
        this.companyList.push({
            id: Date.now(),
            title: company.title,
            phone: company.phone,
            parent_id: company.parent_company_id,
        })
    },
    addCompanyHandler(company) {
        this.addCompany(company);
        this.closeModal();
    }
    // getTableData() {
    //     let
    //     numbers.forEach((num) => {
    //         const square = num * num
    //         console.log('Квадрат числа равен: ' + square)
    //       })
    //     return tableData
    // } 
})
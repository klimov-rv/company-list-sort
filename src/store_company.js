import { ref } from 'vue'

export const store = ref({
    isShowModal: false,
    companyList: [{
        id: 313,
        title: "Сбербанк",
        phone: "+7 941 123 21 42",
    },
    {
        id: 311,
        title: "Яндекс",
        phone: "+7 312 312 31 23",
    },
    {
        id: 111,
        title: "VK Group",
        phone: "+7 123 999 99 99",
        child_ids: [33, 55],
    },
    {
        id: 33,
        title: "VK",
        phone: "+7 123 999 99 99",
        parent_id: 111,
    },
    {
        id: 55,
        title: "Mail.ru",
        phone: "+7 123 999 99 99",
        parent_id: 111,
    },
    {
        id: 17,
        title: "Ozon",
        phone: "+7 123 999 42 42",
    }],
    openModal() {
        this.isShowModal = true;
    },
    closeModal() {
        this.isShowModal = false;
    },
    addCompany(company) {
        const newCompanyId = Date.now() % 1000;
        this.companyList.push({
            id: newCompanyId,
            title: company.title,
            phone: company.phone,
            parent_id: company.parent_company_id,
        })
        return newCompanyId;
    },
    addChild(parent_id, child_id) {
        const finded = this.companyList.find((element) => element.id === parent_id);
        if (finded) { 
            if (finded.child_ids) { 
                finded.child_ids.push(child_id);
            } else { 
                finded.child_ids = [child_id];
            }
        } 
    },
    addCompanyHandler(company) {
        this.addChild(company.parent_company_id, this.addCompany(company));
        this.closeModal();
    }
})
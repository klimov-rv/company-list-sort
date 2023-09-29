export interface Company {
    id: number;
    title: string;
    phone: string;
    parent_company_id: number|null;
};
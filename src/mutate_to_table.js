function mutateForTable(firstLevelList, currLevelList, isFirstLevel = false, sortKey, sortDirection) {
    const tempTableData = [];
    currLevelList = (typeof currLevelList === 'undefined') ? firstLevelList : currLevelList;
    const doubles_ids = []

    if (!currLevelList) {
        return
    }

    function sortData(tableData) {
        return tableData.sort((a, b) => {
            if (a[sortKey] > b[sortKey]) return sortDirection;
            if (a[sortKey] < b[sortKey]) return -sortDirection;
            return 0;
        });
    }

    function copyChildren(ids_array) {
        const tableDataNested = [];
        ids_array.forEach((child_id) => {
            const find_el = firstLevelList.find((child) => child.id === child_id)
            if (find_el) {
                tableDataNested.push(find_el);
            }
        })
        return tableDataNested
    }

    function tableDataAdapter(company) {
        return {
            id: company.id,
            td1: company.title,
            td2: company.phone,
            parent_id: company.parent_id,
            isParent: (company.child_ids) ? true : false,
            child_rows: (company.child_ids) ? mutateForTable(firstLevelList, copyChildren(company.child_ids), false, sortKey, sortDirection) : null,
        }
    }
    currLevelList.forEach((company) => {
        if (company) {
            if (company.child_ids) {
                doubles_ids.push(...company.child_ids)
            }
        }
    })
    currLevelList.forEach((company) => {
        if (company) {
            if (isFirstLevel) {
                if (!doubles_ids.includes(company.id)) {
                    tempTableData.push(tableDataAdapter(company));
                }
            } else {
                tempTableData.push(tableDataAdapter(company));
            }
        }
    })
    return sortData(tempTableData)
}


export default mutateForTable

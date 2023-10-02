function sortTable(currLevelData, sortKey, sortDirection) {

    if (!currLevelData) {
        return
    }
    
    function sortData(tableData) {
        return tableData.sort((a, b) => {
            if (a[sortKey] > b[sortKey]) return sortDirection;
            if (a[sortKey] < b[sortKey]) return -sortDirection;
            return 0;
        });
    }

    currLevelData.forEach((company) => {
        if (company.child_rows) {
            company.child_rows = sortTable(company.child_rows, sortKey, sortDirection);
        }
    })
    return sortData(currLevelData)
}


export default sortTable

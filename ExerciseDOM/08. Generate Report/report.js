function generateReport() {
    const selectionElements = document.querySelectorAll('input');
    const allRows = document.querySelectorAll('tbody tr');

    const result = [];

    if (selectionElements.length < 1) {
        return;
    }

    for (let i = 0; i < allRows.length; i++) {
        let newObj = {}
        for (let y = 0; y < selectionElements.length; y++ ) {
            if (selectionElements[y].checked) {
                newObj[selectionElements[y].name] = allRows[i].children[y].textContent;
            }
        }
        result.push(newObj)
    }

    document.getElementById('output').textContent = JSON.stringify(result);
}

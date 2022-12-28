function sumTable() {

    const rows = Array.from(document.querySelectorAll('tr')).slice(1 , - 1);
    let result = 0;

    for (const row of rows) {
        const currentValue = Number(row.lastElementChild.textContent);

        result += currentValue;
    }

    document.getElementById('sum').textContent = result;
}
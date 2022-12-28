function extractText() {

    const liElement = Array.from(document.querySelectorAll(`li`));

    const result = liElement.map(e => e.textContent).join(`\n`);

    document.getElementById(`result`).value = result;
}
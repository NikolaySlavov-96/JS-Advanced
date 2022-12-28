function extract(content) {

    const text = document.getElementById(`content`).textContent;
    const pattern = /\((.+?)\)/g;
    const result = [];

    const afterMatch = text.matchAll(pattern);

    for (const line of afterMatch) {
        result.push(line[1]);
    }

    return result.join(`;`)
}
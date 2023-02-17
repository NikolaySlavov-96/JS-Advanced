function sortArray(array , type) {
    
    const types = {
        asc: (a , b) => a - b,
        desc: (a , b) => b - a
    }

    array.sort(types[type]);

    return array
}

sortArray([14, 7, 17, 6, 8], 'asc')
sortArray([14, 7, 17, 6, 8], 'desc')
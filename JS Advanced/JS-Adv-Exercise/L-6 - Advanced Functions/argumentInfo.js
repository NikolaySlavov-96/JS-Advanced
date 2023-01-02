function argumentInfo(...input) {

    const parts = {};

    for (const part of input) {
        
        const current = typeof(part);
        console.log(`${current}: ${part}`)
        if(!parts[current]) {
            parts[current] = 0;
        }
        parts[current]++;
    }

    const resultSort = Object.entries(parts).sort((a , b) => b[1] - a[1]);

    for (const [type , quantity] of resultSort) {
        
        console.log(`${type} = ${quantity}`)
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })
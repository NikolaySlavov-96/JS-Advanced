function storageCatalogue (array) {

    const sortArray = array.sort((a , b) => a.localeCompare(b));

    let currentSymbol = '';

    for (const line of sortArray) {
        
        if(line[0] !== currentSymbol){
            console.log(line[0]);
            currentSymbol = line[0];
        }

        let temporary = line.split(` : `).join(`: `);
        
        console.log(`  ${temporary}`)
    }
}

storageCatalogue (['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])
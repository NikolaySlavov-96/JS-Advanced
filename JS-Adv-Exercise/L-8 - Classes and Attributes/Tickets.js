function ticketSorting(array, criterion) {
    
    class Tickets {
        constructor(city, price, status) {
            this.destination = city;
            this.price = price;
            this.status = status;
        }
    }

    const result = [];

    const sortTypes = {
        destination: (a, b) => a[0].localeCompare(b[0]),
        price: (a, b) => a[1] - b[1],
        status: (a, b) => a[2].localeCompare(b[2]),
    }

    let sortArray = array.map(a => a.split(`|`)).sort(sortTypes[criterion]);


    for (const line of sortArray) {

        let [destin, price, status] = line;
        price = Number(price)

        const city = new Tickets(destin, price, status)
        result.push(city);
    }

    return result;
}

ticketSorting(['Philadelphia|94.2|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status')
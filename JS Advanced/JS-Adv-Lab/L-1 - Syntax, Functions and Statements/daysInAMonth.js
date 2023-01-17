function daysInAMonth(month , year) {

    let dataM = new Date(year, month, 0).getDate();

    console.log(dataM)
}

daysInAMonth(1, 2012)
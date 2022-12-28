function colorize() {
    
    const row = document.querySelectorAll('tr');

    for(let n = 1; n < row.length; n+= 2 ){
        row[n].style.background = 'teal';
    }
}

// function colorize() {
    
//     const row = document.querySelectorAll('tr:nth-child(2n)');

//     row.forEach(e => e.style.background = 'teal');
// }
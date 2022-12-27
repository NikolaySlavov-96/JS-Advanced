function fromJSONtoHTML (string) {
    
    const convertToArray = JSON.parse(string);

    const result = ['<table>'];

    for(let n = 0; n < convertToArray.length; n++){
        let currentLine = [`   <tr>`];
        
        if(n === 0) {
            for (const key in convertToArray[n]) {
                currentLine.push(`<th>${key}</th>`);
                
            }
            currentLine.push(`</tr>`)
            result.push(currentLine.join(``));
            currentLine = [`   <tr>`];
        }

        for(const name in convertToArray[n]){
            currentLine.push(`<td>${convertToArray[n][name]}</td>`)
        }
        
        currentLine.push(`</tr>`)
        result.push(currentLine.join(``));
    }

    result.push(`</table>`);

    for (const line of result) {
        
        console.log(line)
    }
}

fromJSONtoHTML(`[{"Name":"Pesho",
"Score":4,
" Grade":8},   
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`)

// <table>
//    <tr><th>Name</th><th>Score</th></tr>
//    <tr><td>Stamat</td><td>5.5</td></tr>
//    <tr><td>Rumen</td><td>6</td></tr>
// </table>

{/* <table>
   <tr><th>Name</th><th>Score</th><th>Grade</th></tr>
   <tr><td>Pesho</td><td>4</td><td>8</td></tr>
   <tr><td>Gosho</td><td>5</td><td>8</td></tr>
   <tr><td>Angel</td><td>5.5</td><td>10</td></tr>
</table> */}
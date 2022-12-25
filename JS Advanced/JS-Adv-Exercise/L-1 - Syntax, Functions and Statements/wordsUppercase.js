function wordsUppercase(string){

    let patternEdit = /[A-Za-z0-9]+/g;

    let matches = string.match(patternEdit);
    let matchLength = matches.length;

    for(let n = 0; n < matchLength; n++){
        let beforEdit = matches.shift();
        beforEdit = beforEdit.toUpperCase();
        matches.push(beforEdit);
    }
    
    console.log(matches.join(`, `))
}

wordsUppercase('hello')
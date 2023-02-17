function wordsUpercase(arg) {

    let result = arg.split(/\W+/).map(w => w.toUpperCase()).filter(l => l.length !== 0);
    
    console.log(result.join(`, `))
}

wordsUpercase('Hi, how are you?')
wordsUpercase('hello')
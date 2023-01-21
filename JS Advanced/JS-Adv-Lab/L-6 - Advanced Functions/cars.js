function cars(arr) {

    const closure = {};

    const funcAll = {
        create: (name, inherits, lastname) => (closure[name] = inherits ? Object.create(closure[lastname]) : {}),
        set: (name, vR, vF) => (closure[name][vR] = vF),
        print: n => {
            const result = [];

            for(const line in closure[n]) {
                result.push(`${line}:${closure[n][line]}`)
            }
            console.log(result.join(`,`))

        }
    }

    for(const line of arr) {
        const [func, n, k, l] = line.split(` `)
        funcAll[func](n, k, l)
    }
}

cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2'])
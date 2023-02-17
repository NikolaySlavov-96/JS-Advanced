function circleArea(argumen){

    let isBoolean = typeof argumen;

    if(isBoolean === 'number'){
        let area = Math.pow(argumen, 2) * Math.PI;
        return console.log(area.toFixed(2))
    }

    console.log(`We can not calculate the circle area, because we receive a ${typeof argumen}.`);
}

circleArea(5)
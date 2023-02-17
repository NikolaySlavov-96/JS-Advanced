function carFactory (obj) {

    const engins = [{power: 90 , volume: 1800} , {power: 120 , volume: 2400} , {power: 200 , volume: 3500}];
    const carriages = [{ type: 'hatchback', color: obj.color} , { type: 'coupe', color: obj.color}];
    const wheelSize = obj.wheelsize % 2 === 1 ? obj.wheelsize : obj.wheelsize - 1;

    return { 
        model: obj.model,
        engine: engins.filter(e => e.power >= obj.power)[0],
        carriage: carriages.filter(e => e.type === obj.carriage)[0],
        wheels: [wheelSize , wheelSize , wheelSize , wheelSize]
    }
}

carFactory ({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 })
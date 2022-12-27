function townPopulation(arrayOfCitys){

    let allCityObj = {};

    for (const city of arrayOfCitys) {

        let [town , population] = city.split(` <-> `);

        if(!allCityObj[town]){
            allCityObj[town] = 0;
        }
        allCityObj[town] += Number(population)
    }

    for (const townAndPopulation in allCityObj) {
        console.log(`${townAndPopulation} : ${allCityObj[townAndPopulation]}`)
    }
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])
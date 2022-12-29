function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick () {
        const result = JSON.parse(document.querySelector('#inputs textarea').value);

        //["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660"]
        const calculatingObj = {};
        const saveResult = {};

        for (const restaurant of result) {
            
            let [nameRestaurant , allPeople] = restaurant.split(` - `);
            
            if(!calculatingObj[nameRestaurant]){
                calculatingObj[nameRestaurant] = {currentSalary: 0 , counter: 0 , bestSalary: 0 , avgSalary: 0};
                saveResult[nameRestaurant] = {};
            }
            
            const peoples = allPeople.split(`, `);
            
            for (const people of peoples) {
                
                let [name , peopleSalary] = people.split(` `);
                peopleSalary = Number(peopleSalary);
                
                if(calculatingObj[nameRestaurant].bestSalary < peopleSalary) {
                    calculatingObj[nameRestaurant].bestSalary = peopleSalary;
                }
                calculatingObj[nameRestaurant].currentSalary += peopleSalary;
                calculatingObj[nameRestaurant].counter++;

                saveResult[nameRestaurant][name] = peopleSalary;
            }
        }

        for (const namesRestaurant in calculatingObj) {
            const salary = calculatingObj[namesRestaurant].currentSalary;
            const currentCounter = calculatingObj[namesRestaurant].counter;
    
            let sum = Number(salary / currentCounter);
    
            calculatingObj[namesRestaurant].avgSalary = sum;
        }
    
        let sorting = Object.entries(calculatingObj).sort((a , b) => b[1].avgSalary - a[1].avgSalary);
        
        document.querySelector('#bestRestaurant p').textContent = `Name: ${sorting[0][0]} Average Salary: ${(sorting[0][1].avgSalary).toFixed(2)} Best Salary: ${(sorting[0][1].bestSalary).toFixed(2)}`;


        let sortPopler = Object.entries(saveResult[sorting[0][0]]).sort((a , b) => b[1] - a[1]);
        let sortWorkPeople = '';

        for(const worker of sortPopler) {
            sortWorkPeople += `Name: ${worker[0]} With Salary: ${worker[1]} `
        }
        console.log(sortWorkPeople)

        document.querySelector('#workers p').textContent = sortWorkPeople;
    }
}
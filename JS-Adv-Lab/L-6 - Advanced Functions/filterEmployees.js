function filterEmployees(input , critery) {

    const employees = JSON.parse(input);
    const [typeCriteries , nameCriteries] = critery.split(`-`);
    let counter = 0;

    for(const employee of employees) {

        if(employee[typeCriteries] === nameCriteries) {
            prints(employee)
        } else if(typeCriteries === 'all') {
            prints(employee)
        }   
    }

    function prints (employee) {
        console.log(`${counter}. ${employee.first_name} ${employee.last_name} - ${employee.email}`)
        counter++;
    }
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female')
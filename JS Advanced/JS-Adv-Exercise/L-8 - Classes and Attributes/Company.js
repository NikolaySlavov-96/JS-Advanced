class Company {

    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {

        salary = Number(salary);

        if([...arguments].some(a => a === null || a === undefined || a === '') || salary < 0){
            throw new Error('Invalid input!');
        }

        if(!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        this.departments[department].push({name, salary, position});

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {

        let result = '';
        const bestSalaryPrice = {};

        for (const line in this.departments) {
            for (const counter of this.departments[line]) {
                if(!bestSalaryPrice.hasOwnProperty(line)){
                    bestSalaryPrice[line] = {salary: 0, people: 0};
                }
                bestSalaryPrice[line].salary += counter.salary;
                bestSalaryPrice[line].people++;
            }
            bestSalaryPrice[line] = (bestSalaryPrice[line].salary / bestSalaryPrice[line].people).toFixed(2);
        }

        const sortSalary = Object.entries(bestSalaryPrice).sort((a, b) => a - b);
        result += `Best Department is: ${sortSalary[0][0]}\nAverage salary: ${sortSalary[0][1]}\n`;

        const finalPrint = this.departments[sortSalary[0][0]];

        const sortPrintResult = Object.entries(finalPrint).sort((a, b) => b[1].salary - a[1].salary || a[1].name.localeCompare(b[1].name));

        for (const workers of sortPrintResult) {
            result += `${workers[1].name} ${workers[1].salary} ${workers[1].position}\n`;
        }
        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

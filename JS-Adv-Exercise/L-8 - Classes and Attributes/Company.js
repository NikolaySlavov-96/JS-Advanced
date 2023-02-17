class Company {

    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {

        salary = Number(salary);

        if(name === '' || salary === '' || position === '' || department === '' || name === undefined || salary ===  undefined || position === undefined|| department === undefined || name === null || salary === null || position === null || department === null) {
            throw new Error('Invalid input!');
        }

        if(salary < 0) {
            throw new Error('Invalid input!')
        }

        if(!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        this.departments[department].push({name, salary, position});

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {

        let result = [];
        const bestSalaryPrice = {};

        for (const line in this.departments) {

            for (const counter of this.departments[line]) {
                if(!bestSalaryPrice.hasOwnProperty(line)){
                    bestSalaryPrice[line] = {salary: 0, people: 0, price: 0};
                }
                bestSalaryPrice[line].salary += Number(counter.salary);
                bestSalaryPrice[line].people++;
            }
            bestSalaryPrice[line].price = (bestSalaryPrice[line].salary / bestSalaryPrice[line].people).toFixed(2);
        }

        const sortSalary = Object.entries(bestSalaryPrice).sort((a, b) => b[1].price - a[1].price);

        result.push(`Best Department is: ${sortSalary[0][0]}`);
        result.push(`Average salary: ${sortSalary[0][1].price}`);

        const finalPrint = this.departments[sortSalary[0][0]];

        const sortPrintResult = finalPrint.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

        for (const workers of finalPrint) {
            result.push(`${workers.name} ${workers.salary} ${workers.position}`);
        }
        return result.join(`\n`);
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

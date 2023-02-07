function solve() {

    document.getElementById('add-worker').addEventListener('click', submit);
    const inputFirstName = document.getElementById('fname');
    const inputLastName = document.getElementById('lname');
    const inputEmail = document.getElementById('email');
    const inputBirth = document.getElementById('birth');
    const inputPosition = document.getElementById('position');
    const inputSalary = document.getElementById('salary');

    const tableBody = document.getElementById('tbody');
    
    const inputSum = document.getElementById('sum');

    function submit(ev) {
        ev.preventDefault();
        const firsName = inputFirstName.value;
        const lastName = inputLastName.value;
        const email = inputEmail.value;
        const birth = inputBirth.value;
        const position = inputPosition.value;
        let salary = inputSalary.value;


        if(firsName === '' || lastName === '' || email === '' || birth === '' || position === '' || salary === '') {
            return
        }

        salary = Number(salary);

        if(!Number.isInteger(salary)) {
            salary = salary.toFixed(2);
        }
        
        const tr = document.createElement('tr');
        tr.appendChild(createTd(firsName));
        tr.appendChild(createTd(lastName));
        tr.appendChild(createTd(email));
        tr.appendChild(createTd(birth));
        tr.appendChild(createTd(position));
        tr.appendChild(createTd(salary));
        tr.appendChild(createTd('', 'btn'));

        tableBody.appendChild(tr);

        const currentPrice = Number(inputSum.textContent);
        inputSum.textContent = (Number(salary) + currentPrice).toFixed(2);

        tr.querySelector('.fired').addEventListener('click', fired);
        tr.querySelector('.edit').addEventListener('click', edit);

        inputFirstName.value = '';
        inputLastName.value = '';
        inputEmail.value = '';
        inputBirth.value = '';
        inputPosition.value = '';
        inputSalary.value = '';
        
        function fired() {
            const currentSalary = inputSum.textContent;
            inputSum.textContent = (currentSalary - salary).toFixed(2);

            tr.remove();
        }

        function edit() {
            inputFirstName.value = firsName;
            inputLastName.value = lastName;
            inputEmail.value = email;
            inputBirth.value = birth;
            inputPosition.value = position;
            inputSalary.value = salary;

            const currentSalary = inputSum.textContent;
            inputSum.textContent = (currentSalary - salary).toFixed(2);
            tr.remove();
        }
    }

    function createTd(textCont, btn) {
        const td = document.createElement('td');
        td.textContent = textCont;

        if(btn !== '' && btn !== undefined) {
            td.appendChild(createBtn('Fired', 'fired'))
            td.appendChild(createBtn('Edit', 'edit'))
        }

        return td;
    }

    function createBtn(textCont, className) {
        const btn = document.createElement('button');
        btn.classList.add(className);
        btn.textContent = textCont;

        return btn;
    }
}
solve()
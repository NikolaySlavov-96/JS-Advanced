window.addEventListener('load', solve)

function solve() {

    const btn = document.querySelector('button');
    btn.addEventListener('click', worksTask);
    btn.addEventListener('click',taskEdint);

    const input = Array.from(document.querySelectorAll('form input'));
    const [firstName, lastName, fromDate, toDate, guest] = input;

    const outputInfor = document.getElementById('verification');
    
    function worksTask(ev) {
        ev.preventDefault();
        taskEdint();        
    }

    function taskEdint() {
        const first = firstName.value;
        const second = lastName.value;
        const beginDate = fromDate.value;
        const endDatae = toDate.value;
        const person = guest.value;
        
        let store = {};

        if(first !== '' && second !== '' && beginDate != '' && endDatae !== '' && person !== '' && beginDate <= endDatae) {

            store = {first , second, beginDate, endDatae, person}

            const li = createLine('li', 'reservation-content');
            const artic = createLine('article');
            artic.appendChild(createLine('h3', '' , `Name: ${first} ${second}`));
            artic.appendChild(createLine('p', '' , `From date: ${beginDate}`));
            artic.appendChild(createLine('p', '' , `To date: ${endDatae}`));
            artic.appendChild(createLine('p', '' , `For ${person} people`));

            const edintBtn = createLine('button', 'edit-btn', 'Edit');
            const continueBtn = createLine('button', 'continue-btn', 'Continue');
            const confirmBtn = createLine('button', 'confirm-btn', 'Confirm');
            const cancelBtn = createLine('button', 'cancel-btn', 'Cancel');
            
            li.appendChild(artic);
            document.querySelector('div ul').appendChild(li)
            li.appendChild(edintBtn);
            li.appendChild(continueBtn);

            edintBtn.addEventListener('click', editClick);
            continueBtn.addEventListener('click', continueClick);
            confirmBtn.addEventListener('click', confirmClick);
            cancelBtn.addEventListener('click', cancelClick);

            Object.values(input).forEach(e => e.value = '');

            btn.disabled = true;

            function editClick() {
                firstName.value = store.first;
                lastName.value = store.second;
                fromDate.value = store.beginDate;
                toDate.value = store.endDatae;
                guest.value = store.person;

                li.remove();
                btn.disabled = false;
            }

            function continueClick() {    
                edintBtn.remove();
                continueBtn.remove();
                li.appendChild(confirmBtn);
                li.appendChild(cancelBtn);
                document.querySelector('#confirm-reservations div div ul').appendChild(li);
            }
            
            function confirmClick() {
                li.remove();
                outputInfor.className = 'reservation-confirmed'
                outputInfor.textContent = 'Confirmed.'
                btn.disabled = false;
            }

            function cancelClick() {
                li.remove();
                outputInfor.className = 'reservation-cancelled';
                outputInfor.textContent = 'Cancelled.'
                btn.disabled = false;
            }
        }
    }

    function createLine(type, classEl, text) {
        const first = document.createElement(type);
        
        if(classEl !== '' && classEl !== undefined) {
            first.className = classEl;
        }
        if(text !== '') {
            first.textContent = text;
        }
        return first;
    }
}
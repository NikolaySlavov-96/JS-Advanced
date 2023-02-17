window.addEventListener('load', solve);

function solve() {
    const btns = Array.from(document.querySelectorAll(`button`));
    btns[0].addEventListener('click', onSubmit);
    btns[1].addEventListener('click', onSubmit)
    document.querySelector(`#completed-orders button`).addEventListener('click', onClear);

    const typeProductInput =  document.getElementById(`type-product`);
    const descriptionInput = document.getElementById(`description`);
    const clientName = document.getElementById(`client-name`);
    const clientPhone = document.getElementById(`client-phone`);

    const createOrder = document.getElementById(`received-orders`);
    const completeOrder = document.getElementById(`completed-orders`);

    function onSubmit(ev) {

        ev.preventDefault();

        const clientNameV = clientName.value;
        const clientPhoneV = clientPhone.value;
        const descriptionV = descriptionInput.value;

        if(clientNameV == '' || clientPhoneV == '' || descriptionV == '') {
            return;
        }

        const divEl = createHTML('div', '', 'container');
        divEl.appendChild(createHTML('h2', `Product type for repair: ${typeProductInput.value}`));
        divEl.appendChild(createHTML('h3', `Client information: ${clientNameV}, ${clientPhoneV}`));
        divEl.appendChild(createHTML('h4', `Description of the problem: ${descriptionV}`));
        const startBtn = createHTML('button', 'Start repair', 'start-btn');
        divEl.appendChild(startBtn);
        const finishBtn = createHTML('button', 'Finish repair', 'finish-btn', 'disable');
        divEl.appendChild(finishBtn);

        startBtn.addEventListener('click', onStart);
        finishBtn.addEventListener('click', onFinish);
        createOrder.appendChild(divEl);

        clientName.value = '';
        clientPhone.value = '';
        descriptionInput.value = '';

        function onStart(ev) {
            ev.preventDefault(); 

            startBtn.disabled = true;
            finishBtn.disabled = false;
        }

        function onFinish(ev) {
            ev.preventDefault();

            startBtn.remove();
            finishBtn.remove();
            completeOrder.appendChild(divEl);
        }
    }

    function onClear(ev) {
        ev.preventDefault()

        const childrenDiv = ev.target.parentElement.querySelectorAll(`div .container`)

        console.log(childrenDiv)
        for (const child of childrenDiv) {
            child.remove();
        }
    }

    function createHTML(type, content, classN, disableBtn) {

        const elem = document.createElement(type);

        if(content !== '' && content !== undefined) {
            elem.textContent = content;
        }

        if(classN !== '' && classN !== undefined) {
            elem.classList.add(classN);
        }

        if(disableBtn !== undefined && disableBtn !== '') {
            elem.disabled = true;
        }
        return elem
    }
}
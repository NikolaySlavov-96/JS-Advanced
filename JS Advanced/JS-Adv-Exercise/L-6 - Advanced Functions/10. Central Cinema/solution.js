function solve() {

    const button = document.querySelector('#container button');
    button.addEventListener('click', onCheck);
    const inputData = document.querySelectorAll('#container input');
    const moviesUl = document.querySelector('#movies ul');

    const cinema = {};


    function onCheck(ev) {
        ev.preventDefault();

        // const [name, hall, price] = inputData;
        const name = inputData[0].value;
        const hall = inputData[1].value;
        const price = inputData[2].value;
        
        if(name !== '' && hall !== '' && price !== '' && !isNaN(price)) {

            //problem is secand decimal 

            const li = create('li');
            li.appendChild(create('span', name));
            li.appendChild(create('strong', `Hall: ${hall}`));

            const div = create('div');
            div.appendChild(create('strong', price));
            div.appendChild(create('input', '', 'Tickets Sold'));
            const btnL = create('button', 'Archive');
            div.appendChild(btnL);
            li.appendChild(div);
            moviesUl.appendChild(li);

            btnL.addEventListener('click', onCheckBillet);
            cinema[name] = price;
            
            inputData.forEach(e => e.value = '');
        }
    }

    function create(type, text, oth) { 
        const elm = document.createElement(type);

        if(text !== undefined || text !== '') {
            elm.textContent = text;            
        }
        
        if(oth !== undefined) {
            elm.placeholder = oth;
        }

        return elm;
    }

    function onCheckBillet() {
        const inputCounter = document.querySelector('#movies div input');
        const span = document.querySelector('#movies span');

        if(!isNaN(inputCounter.value)) {
            let allPrice = cinema[span.textContent] * inputCounter.value;
            console.log(allPrice)
        }
    }
}
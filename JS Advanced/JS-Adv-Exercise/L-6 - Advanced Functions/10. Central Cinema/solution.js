function solve() {

    const button = document.querySelector('#container button');
    button.addEventListener('click', onCheck);
    const inputData = document.querySelectorAll('#container input');

    const moviesUl = document.querySelector('#movies ul');
    moviesUl.addEventListener('click', onArchive);
    const archiveUl = document.querySelector('#archive ul');
    archiveUl.addEventListener('click', onDelete);

    const allClear = document.querySelector('#archive button');
    allClear.addEventListener('click', clearAll);

    const cinema = {};
    
    function onCheck(ev) {
        ev.preventDefault();
        
        const name = inputData[0].value;
        const hall = inputData[1].value;
        let price = inputData[2].value;

        if(name !== '') {
            console.log(name)
        }
        
        if(name !== '' && hall !== '' && price !== '' && !isNaN(Number(price))) {
            
            price = Number(price).toFixed(2);
        
            const li = create('li');
            li.appendChild(create('span', name));
            li.appendChild(create('strong', `Hall: ${hall}`));

            const div = create('div');
            div.appendChild(create('strong', price));
            div.appendChild(create('input', '', 'Tickets Sold'));
            div.appendChild(create('button', 'Archive'));
            li.appendChild(div);
            moviesUl.appendChild(li);

            cinema[name] = price;
            
            inputData.forEach(e => e.value = '');
        }
    }
    
    function onArchive(ev) {

        const li = ev.target.parentElement.parentElement;
        const inputCounter = li.querySelector('input');
        const span = li.querySelector('span');

        const strong = li.querySelector('strong');
        const div = li.querySelector('div');
        
        if(!isNaN(Number(inputCounter.value)) && ev.target.tagName === 'BUTTON' && inputCounter.value !== '') {
            let allPrice = cinema[span.textContent] * inputCounter.value;
            
            strong.textContent = `Total amount: ${(allPrice).toFixed(2)}`
            li.removeChild(div);
            li.appendChild(create('button', 'Delete'));
            
            archiveUl.appendChild(li);
        }
    }
    
    function onDelete(ev) {
        const li = ev.target.parentElement;
        if(ev.target.tagName === 'BUTTON') {
            li.remove()
        }
    }

    function clearAll(ev) {
        archiveUl.innerHTML = '';
    }

    function create(type, text, oth) { 
        const elm = document.createElement(type);
        
        if(text !== undefined || text !== '') {
            elm.textContent = text;            
        }
        
        if(oth !== undefined || oth !== '') {
            elm.placeholder = oth;
        }
    
        return elm;
    }
}
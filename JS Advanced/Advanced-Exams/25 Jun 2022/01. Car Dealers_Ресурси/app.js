window.addEventListener("load", solve);

function solve() {

  const btnPolish = document.getElementById('publish');
  const input = document.querySelectorAll('input');
  const inputSelect = document.getElementById('fuel');
  const tableBodyProcess = document.getElementById('table-body');
  const sellCars = document.getElementById('cars-list');
  const profitPrice = document.getElementById('profit');

  btnPolish.addEventListener('click', onCheck);

  function onCheck(e) {
    e.preventDefault();

    const [makeIn, modelIn, yearIn, priceOriIn, priceSellIn] = input;

    if(makeIn.value === '' || modelIn.value === '' || yearIn.value === '' || priceOriIn.value === '' || priceSellIn.value === '' || priceOriIn.value > priceSellIn.value) {
      return;
    }

    const row = document.createElement('tr');
    row.setAttribute('class', 'row');

    const tdMake = document.createElement('td');
    tdMake.textContent = makeIn.value;
    const tdModel = document.createElement('td');
    tdModel.textContent = modelIn.value;
    const tdYearI = document.createElement('td');
    tdYearI.textContent = yearIn.value;
    const tdFuel = document.createElement('td');
    tdFuel.textContent = inputSelect.value;
    const tdPriceOrigin = document.createElement('td');
    tdPriceOrigin.textContent = priceOriIn.value;
    const tdSellPrice = document.createElement('td');
    tdSellPrice.textContent = yearIn.value;
    const tdButton = document.createElement('td');
    const btnEdit = document.createElement('button');
    btnEdit.setAttribute('class', 'action-btn edit');
    btnEdit.textContent = 'Edit';
    tdButton.appendChild(btnEdit);
    const btnSell = document.createElement('button');
    btnSell.setAttribute('class', 'action-btn sell')
    btnSell.textContent = 'Sell';
    tdButton.appendChild(btnSell);

    row.appendChild(tdMake);
    row.appendChild(tdModel);
    row.appendChild(tdYearI);
    row.appendChild(tdFuel);
    row.appendChild(tdPriceOrigin);
    row.appendChild(tdSellPrice);
    row.appendChild(tdButton);
    
    tableBodyProcess.appendChild(row);

    btnEdit.addEventListener('click', onEdin);
    btnSell.addEventListener('click', onSell);

    let makeStore =  makeIn.value;
    let modelStore = modelIn.value;
    let yearStore = yearIn.value;
    let priceOriStore = priceOriIn.value;
    let priceSellStore = priceSellIn.value;
    let fuelStore = inputSelect.value;

    inputSelect.value = '';
    input.forEach(l => l.value = '');

    function onEdin() {
      makeIn.value = makeStore;
      modelIn.value = modelStore;
      yearIn.value = yearStore;
      priceOriIn.value = priceOriStore;
      priceSellIn.value = priceSellStore;
      inputSelect.value = fuelStore;

      row.remove();
    }

    function onSell() {
      console.log
      const li = document.createElement('li');
      li.setAttribute('class', 'each-list');
      
      let differencePrice = Number(priceSellStore) - Number(priceOriStore);

      const spanMakeModel = document.createElement('span');
      spanMakeModel.textContent = `${makeStore} ${modelStore}`;
      const spanYear = document.createElement('span');
      spanYear.textContent = yearStore;
      const spanWinPrice = document.createElement('span');
      spanWinPrice.textContent = differencePrice;

      li.appendChild(spanMakeModel);
      li.appendChild(spanYear);
      li.appendChild(spanWinPrice);

      sellCars.appendChild(li);
      row.remove();

      profitPrice.textContent = (Number(profitPrice.textContent) + differencePrice).toFixed(2);
    }
  } 
}

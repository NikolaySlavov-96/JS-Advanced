function solve() {

  const [generateBtn , buyBtn] =  Array.from(document.querySelectorAll('button'));
  const [input , output] = Array.from(document.querySelectorAll('textarea'));
  const tbody = document.querySelector('tbody');
  
  generateBtn.addEventListener('click' , onGenerate);
  buyBtn.addEventListener('click' , onBuy);

  const items = [];

  function onGenerate (e) {
    const furniturs = JSON.parse(input.value);

    for (const furnitur of furniturs) {
      const trRow = document.createElement('tr');
  
      trRow.appendChild(createColumn('img' , furnitur.img));
      trRow.appendChild(createColumn('p' , furnitur.name));
      trRow.appendChild(createColumn('p' , furnitur.price));
      trRow.appendChild(createColumn('p' , furnitur.decFactor));
      const checkbox = createColumn('input' , 'checkbox')
      trRow.appendChild(checkbox);

      tbody.appendChild(trRow);

      items.push({
        ...furnitur,
        isChecked
      });

      function isChecked() {
        return checkbox.children[0].checked;
      }
    }
  }
  
  function onBuy (e) {

    const buyProduct = [];
    let counterPrice = 0;
    let counterDecorFactor = 0;

    const checkProdoct = items.filter(e => e.isChecked());

    for (const product of checkProdoct) {
        buyProduct.push(product.name);
        counterPrice += Number(product.price);
        counterDecorFactor += Number(product.decFactor)
    }

    output.value = [
      `Bought furniture: ${buyProduct.join(`, `)}`,
      `Total price: ${counterPrice.toFixed(2)}`,
      `Average decoration factor: ${counterDecorFactor / buyProduct.length}`
    ].join(`\n`)
  }

  function createColumn(type, content) {
    
    const result = document.createElement('td');
    let inner;

    if(type === 'img') {
      inner = document.createElement(type); //|| 'img'
      inner.src = content;
    } else if(type === 'p') {
      inner = document.createElement(type); //|| 'p'
      inner.textContent = content;
    } else if(type === 'input') {
      inner = document.createElement(type); //|| 'input'
      inner.type = content;
    }
    result.appendChild(inner);

    return result;
  }

}
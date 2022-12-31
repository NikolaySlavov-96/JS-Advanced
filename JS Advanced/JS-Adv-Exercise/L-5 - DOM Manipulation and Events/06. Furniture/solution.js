function solve() {

  const [generateBtn , buyBtn] =  Array.from(document.querySelectorAll('button'));
  generateBtn.addEventListener('click' , onGenerate);
  buyBtn.addEventListener('click' , onBuy);

  function onGenerate (e) {
    const furnitursInput = JSON.parse(document.querySelector('#exercise textarea').value);

    furnitursInput.forEach(furnitur => {

      const trFurniture = document.createElement('tr');
      
      const tdImg = document.createElement('td');
      const img = document.createElement('img');
      img.src = furnitur.img;
      tdImg.appendChild(img);
      trFurniture.appendChild(tdImg);

      const tdPName = document.createElement('td');
      const pName = document.createElement('p');
      pName.textContent = furnitur.name;
      tdPName.appendChild(pName);
      trFurniture.appendChild(tdPName);

      const tdPPrice = document.createElement('td');
      const pPrice = document.createElement('p');
      pPrice.textContent = Number(furnitur.price);
      tdPPrice.appendChild(pPrice);
      trFurniture.appendChild(tdPPrice);

      const tdDecorFactor = document.createElement('td');
      const pDecorFactor = document.createElement('p');
      pDecorFactor.textContent = Number(furnitur.decFactor);
      tdDecorFactor.appendChild(pDecorFactor);
      trFurniture.appendChild(tdDecorFactor);

      const tdCheck = document.createElement('td');
      const inputCheck = document.createElement('input');
      inputCheck.type = 'checkbox';
      tdCheck.appendChild(inputCheck);
      trFurniture.appendChild(tdCheck);

      document.querySelector('tbody').appendChild(trFurniture);
    });
  }

  function onBuy (e) {
    const checked = Array.from(document.querySelectorAll('tbody input')).filter(chek => chek.checked);

    const buyProduct = [];
    let counterPrice = 0;
    let counterDecorFactor = 0;

    checked.forEach(chek => {
      const twoParents = chek.parentElement.parentElement;

      const currentData = Array.from(twoParents.querySelectorAll('p'));

      const productName = currentData[0].textContent;
      const producePrice = currentData[1].textContent;
      const produceDecorFactor = currentData[2].textContent;

      buyProduct.push(productName);
      counterPrice += Number(producePrice);
      counterDecorFactor += Number(produceDecorFactor);

    })
    const result = document.querySelectorAll('#exercise textarea')[1];

    result.value += `Bought furniture: ${buyProduct.join(`, `)}\n`;
    result.value += `Total price: ${counterPrice.toFixed(2)}\n`;
    result.value += `Average decoration factor: ${counterDecorFactor / checked.length}`;
  }
}
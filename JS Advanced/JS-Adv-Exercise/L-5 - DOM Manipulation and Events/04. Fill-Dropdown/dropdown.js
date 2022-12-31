function addItem() {

    const itemText = document.getElementById('newItemText');
    const itemValue = document.getElementById('newItemValue');
    
    const optionCreate = document.createElement('option');
    optionCreate.textContent = itemText.value;
    optionCreate.value = itemValue.value;

    document.getElementById('menu').appendChild(optionCreate);

    itemText.value = '';
    itemValue.value = '';
}
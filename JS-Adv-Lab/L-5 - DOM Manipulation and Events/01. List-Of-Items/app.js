function addItem() {
    
    const inputText = document.getElementById('newItemText');
    
    let addLi = document.createElement('li');
    addLi.textContent = inputText.value;
    
    const addItem = document.getElementById('items');
    addItem.appendChild(addLi);

    inputText.value = '';
}
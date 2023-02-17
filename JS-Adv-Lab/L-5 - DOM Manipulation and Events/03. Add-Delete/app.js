function addItem() {
        
    const inputText = document.getElementById('newItemText');
    
    let addLi = document.createElement('li');
    addLi.textContent = inputText.value;

    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    addLi.appendChild(deleteBtn);

    deleteBtn.addEventListener('click' , onDelete);
    
    const addItem = document.getElementById('items');
    addItem.appendChild(addLi);

    inputText.value = '';

    function onDelete (event) {
        event.target.parentElement.remove()
    }
}
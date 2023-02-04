function solve() {

    const inputRecipient = document.getElementById('recipientName');
    const inputTitle = document.getElementById('title');
    const inputMessage = document.getElementById('message');
    
    document.getElementById('add').addEventListener('click', onAdd);
    document.getElementById('reset').addEventListener('click',onClear);

    const addInList = document.getElementById('list');
    const sendList = document.querySelector('.sent-list');
    const deleteList = document.querySelector('.delete-list');

    function onAdd(ev) {
        ev.preventDefault();
        
        if(inputRecipient.value === '' || inputTitle.value === '' || inputMessage === '') {
            return
        }
        const li = document.createElement('li');
        li.innerHTML = `
            <h4>Title: ${inputTitle.value}</h4>
            <h4>Recipient Name: ${inputRecipient.value}</h4>
            <span>${inputMessage.value}</span>
            <div id="list-action">
                <button type="submit" id="send">Send</button>
                <button type="submit" id="delete">Delete</button>
        </div>`

        const recipientStore = inputRecipient.value;
        const titleStore = inputTitle.value;

        inputRecipient.value = '';
        inputTitle.value = '';
        inputMessage.value = '';

        li.querySelector(`#send`).addEventListener('click', onSend);
        li.querySelector(`#delete`).addEventListener('click', onDelete);

        addInList.appendChild(li);

        function onSend() {
            const liS = document.createElement('li');
            liS.innerHTML = `<span>To: ${recipientStore}</span>
            <span>Title: ${titleStore}</span>
            <div class="btn">
                <button type="submit" class="delete">Delete</button>
            </div>`

            sendList.appendChild(liS)
            const deleteBtn = liS.querySelector('.delete');
            deleteBtn.addEventListener('click', onDeleteLIS);
            li.remove()

            function onDeleteLIS(ev) {
                ev.preventDefault();
                const liD = document.createElement('li');

                liD.innerHTML = `<span>To: ${recipientStore}</span>
                <span>Title: ${titleStore}</span>`;

                deleteList.appendChild(liD);
                liS.remove();
            }
        }

        function onDelete(ev) {
            ev.preventDefault();

            const liDel = document.createElement('li');

            liDel.innerHTML = `<span>To: ${recipientStore}</span>
            <span>Title: ${titleStore}</span>`;

            deleteList.appendChild(liDel);
            li.remove();
        }
    }

    function onClear(ev) {
        ev.preventDefault();

        inputRecipient.value = '';
        inputTitle.value = '';
        inputMessage.value = '';
    }
}
solve()
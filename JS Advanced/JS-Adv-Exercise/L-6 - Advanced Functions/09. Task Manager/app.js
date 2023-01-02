function solve() {

    const dateFromUser = {
        name: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date'),
    }
    const [_ , openSection , progresSection , finishSections] = Array.from(document.querySelectorAll('section')).map(e => e.children[1]);
    document.getElementById('add').addEventListener('click' , addTask);

    function addTask(ev) {
        ev.preventDefault()

        const article = document.createElement('article');

        article.appendChild(createElement('h3' , dateFromUser.name.value));
        article.appendChild(createElement('p' , `Description: ${dateFromUser.description.value}`));
        article.appendChild(createElement('p' ,`Due Date: ${dateFromUser.date.value}`));

        const div = createElement('div' , '' , 'flex');

        const startBtn = createElement('button' , 'Start' , 'green');
        const deleteBtn = createElement('button' , 'Delete' , 'red');
        const finishBtn = createElement('button' , 'Finish' , 'orange');
        div.appendChild(startBtn);
        div.appendChild(deleteBtn);

        article.appendChild(div);
        openSection.appendChild(article);
        
        Object.values(dateFromUser).forEach(i => i.value = '');

        startBtn.addEventListener('click' , onStart);
        deleteBtn.addEventListener('click' , onDelete);
        finishBtn.addEventListener('click' , onFinish);

        
        function onStart() {
            startBtn.remove();
            div.appendChild(finishBtn);
            progresSection.appendChild(article);

        }
        
        function onDelete() {
            article.remove()
        }
        
        function onFinish() {
            div.remove();
            finishSections.appendChild(article);
        }
    }

    function createElement(elementType , text , className) {

        const element = document.createElement(elementType);
        element.textContent = text;

        if(className) {
            element.className = className;
        }

        return element;
    }
}
window.addEventListener("load", solve);

function solve() {

    const buttonPublish = document.getElementById('form-btn');
    buttonPublish.addEventListener('click', onChech);

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const age = document.getElementById('age');
    const storyTitle = document.getElementById('story-title');
    const genge = document.getElementById('genre');
    const story = document.getElementById('story');
    const bodyEl = document.querySelector('.body')
    const addPreview = document.getElementById('preview-list');
    const mainEl = document.getElementById('main');

    function onChech(ev) {
        ev.preventDefault();

        if(firstName.value !== '' && lastName.value !== '' && age.value !== '' && storyTitle.value !== '' && story.value !== '') {
            
            const li = create('li', 'class', 'story-info');
            const article = create('article');
            article.appendChild(create('h4', '', '', `Name: ${firstName.value} ${lastName.value}`));
            article.appendChild(create('p', '', '', `Age: ${age.value}`));
            article.appendChild(create('p', '', '', `Title: ${storyTitle.value}`));
            article.appendChild(create('p', '', '', `Genge: ${genge.value}`));
            article.appendChild(create('p', '', '', story.value));
            const btnSave = create('button', 'class', 'save-btn', 'Save Story');
            const btnEdit = create('button', 'class', 'edit-btn', 'Edit Story');
            const btnDelete = create('button', 'class', 'delete-btn', 'Delete Story');
            article.appendChild(btnSave);
            article.appendChild(btnEdit);
            article.appendChild(btnDelete);
            li.appendChild(article);

            addPreview.appendChild(li);
            buttonPublish.disabled = true;

            let storeFirstName = firstName.value;
            let storeLastName = lastName.value;
            let storeAge = age.value;
            let storeStoryTitle = storyTitle.value;
            let storeGenge = genge.value;
            let storeStory = story.value;

            firstName.value = '';
            lastName.value = '';
            age.value = '';
            genge.value = '';
            storyTitle.value = '';
            story.value = '';

            btnSave.addEventListener('click', (ev) => {
                mainEl.innerHTML = '';
                mainEl.appendChild(create('h1', '', '', 'Your scary story is saved!'))
            });

            btnEdit.addEventListener('click', (ev) => {
                firstName.value = storeFirstName;
                lastName.value = storeLastName;
                age.value = storeAge;
                storyTitle.value = storeStoryTitle;
                genge.value = storeGenge;
                story.value = storeStory;
                ev.target.parentElement.parentElement.remove()
                buttonPublish.disabled = false;
            });

            btnDelete.addEventListener('click', (ev) => {
                ev.target.parentElement.parentElement.remove()
                buttonPublish.disabled = false;
            });
        }
    }

    function create(tag, atribut, atributeContent, text) {

        const el = document.createElement(tag);

        if(atributeContent !== '' && atributeContent !== undefined) {
            el.classList.add(atributeContent);
        }

        if(text !== '' && text !== undefined) {
            el.textContent = text;
        }

        return el;
    }
}
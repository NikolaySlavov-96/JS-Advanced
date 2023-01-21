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

    const addPreview = document.getElementById('preview-list');
    addPreview.addEventListener('click', onEvents);

    const store = {};

    const main = document.getElementById('main');

    
    function onChech() {

        if(firstName.value !== '' && lastName.value !== '' && age.value !== '' && storyTitle.value !== '' && story.value !== '') {
            
            const li = create('li', 'story-info');
            const article = create('article');
            article.appendChild(create('h4', '', `Name: ${firstName.value} ${lastName.value}`));
            article.appendChild(create('p', '', `Age: ${age.value}`));
            article.appendChild(create('p', '', `Title: ${storyTitle.value}`));
            article.appendChild(create('p', '', `Genge: ${genge.value}`));
            article.appendChild(create('p', '', story.value));
            article.appendChild(create('button', 'save-btn', 'Save Story'));
            article.appendChild(create('button', 'edit-btn', 'Edit Story'));
            article.appendChild(create('button', 'delete-btn', 'Delete Story'));
            li.appendChild(article);

            addPreview.appendChild(li);
            buttonPublish.disabled = true;

            store[firstName] = firstName.value;
            store[lastName] = lastName.value;
            store[age] = age.value;
            store[storyTitle] = storyTitle.value;
            store[genge] = genge.value;
            store[story] = story.value;

            firstName.value = '';
            lastName.value = '';
            age.value = '';
            storyTitle.value = '';
            genge.value = '';
            story.value = '';
        }
    }

    function onEvents(ev) {

        const funcEdit = {
            'Save Story': () => {
                main.innerHTML = '';
                main.appendChild(create('h1', '', 'Your scary story is saved!'))
            },
            'Edit Story': (ev) => {
                firstName.value = store[firstName];
                lastName.value = store[lastName];
                age.value = store[age];
                storyTitle.value = store[storyTitle];
                genge.value = store[genge];
                story.value = store[story];
                ev.target.parentElement.parentElement.remove()
                buttonPublish.disabled = false;
            },
            'Delete Story': (ev) => {
                ev.target.parentElement.parentElement.remove()
                buttonPublish.disabled = false;
            },
        }


        if(ev.target.tagName === 'BUTTON') {
            funcEdit[ev.target.textContent](ev)
        }
    }

    function create(tag, classIn, text) {

        const el = document.createElement(tag);

        if(classIn !== '' && classIn !== undefined) {
            el.className = classIn;
        }

        if(text !== '' && text !== undefined) {
            el.textContent = text;
        }

        return el;
    }
}
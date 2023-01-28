window.addEventListener("load", solve);

function solve() {

    const postTitle = document.getElementById('post-title');
    const postCategory = document.getElementById('post-category');
    const postContent = document.getElementById('post-content');
    const btnPublich = document.getElementById('publish-btn');
    const review = document.getElementById('review-list');
    const publish = document.getElementById('published-list');
    const btnClear = document.getElementById('clear-btn');

    btnPublich.addEventListener('click', onCheck);
    review.addEventListener('click', onRewie);
    btnClear.addEventListener('click', onClear);
    const store = []

    function onCheck(ev) {
        ev.preventDefault();

        if(postTitle.value === '' || postCategory.value === '' || postContent.value === '') {
            return;
        }
        const li = create('li', 'class', 'rpost');
        const article = create('article');
        article.appendChild(create('h4', '', '', `${postTitle.value}`))
        article.appendChild(create('p', '', '', `Category: ${postCategory.value}`));
        article.appendChild(create('p', '', '', `Content: ${postContent.value}`));
        li.appendChild(article);
        li.appendChild(create('button', 'class', 'action-btn edit', 'Edit'));
        li.appendChild(create('button', 'class', 'action-btn aprrove', 'Aprrove'));
        review.appendChild(li);

        store.push({name: postTitle.value, category: postCategory.value, content: postContent.value});

        postTitle.value = '';
        postCategory.value = '';
        postContent.value = '';
    }

    function onRewie(ev) {
        if(ev.target.tagName === 'BUTTON') {
            const li = ev.target.parentElement;
            if(ev.target.textContent === 'Edit') {
                const article = ev.target.parentElement.children[0].children[0].textContent;
                const info = store.find(el => el.name === article);
                postTitle.value = info.name;
                postCategory.value = info.category;
                postContent.value = info.content
                li.remove();
            } else if(ev.target.textContent === 'Aprrove') {
                li.removeChild(li.children[1]);
                li.removeChild(li.children[1]);
                publish.appendChild(li);
            }
        }
    }

    function onClear() {
        publish.innerHTML = '';
    }

    function create(tag, type, nameType, contents) {

        const element = document.createElement(tag);
        if(type !== undefined && type !== '') {
            element.setAttribute(type, nameType);
        }
        if(contents !== undefined && contents !== '') {
            element.textContent = contents;
        }
        return element;
    }
}
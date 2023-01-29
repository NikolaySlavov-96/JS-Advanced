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
    // review.addEventListener('click', onRewie);
    btnClear.addEventListener('click', onClear);
    const store = []

    function onCheck(ev) {
        ev.preventDefault();

        const title = postTitle.value;
        const category = postCategory.value;
        const content = postContent.value;

        if(title === '' || category === '' || content === '') {
            return;
        }
        const li = create('li', 'class', 'rpost');
        li.innerHTML = `<article>
            <h4>${title}</h4>
            <p>Category: ${category}</p>
            <p>Content: ${content}</p>
        </article>
        <button class="action-btn edit">Edit</button>
        <button class="action-btn approve">Approve</button>`;
        // const article = create('article');
        // article.appendChild(create('h4', '', '', `${postTitle.value}`))
        // article.appendChild(create('p', '', '', `Category: ${postCategory.value}`));
        // article.appendChild(create('p', '', '', `Content: ${postContent.value}`));
        // li.appendChild(article);
        // const edit = create('button', 'class', 'action-btn', 'Edit');
        // edit.classList.add('edit');
        // li.appendChild(edit);
        // li.appendChild(create('button', 'class', 'action-btn aprrove', 'Aprrove'));

        review.appendChild(li);
        
        postTitle.value = '';
        postCategory.value = '';
        postContent.value = '';
        
        const btnEdit = li.querySelector('.edit');
        const btnApprove = li.querySelector('.approve');
        
        btnEdit.addEventListener('click', (ev) => {
            postTitle.value = title;
            postCategory.value = category;
            postContent.value = content;
            li.remove();
        });
        btnApprove.addEventListener('click', () => {
            btnEdit.remove();
            btnApprove.remove();
            publish.appendChild(li);
        });
    }

    // function onRewie(ev) {
    //     if(ev.target.tagName === 'BUTTON') {
    //         const li = ev.target.parentElement;
    //         if(ev.target.textContent === 'Edit') {
    //             const article = ev.target.parentElement.children[0].children[0].textContent;
    //             const info = store.find(el => el.name === article);
    //             postTitle.value = info.name;
    //             postCategory.value = info.category;
    //             postContent.value = info.content
    //             li.remove();
    //         } else if(ev.target.textContent === 'Aprrove') {
    //             li.removeChild(li.children[1]);
    //             li.removeChild(li.children[1]);
    //             publish.appendChild(li);
    //         }
    //     }
    // }

    function onClear(ev) {
        ev.preventDefault();
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
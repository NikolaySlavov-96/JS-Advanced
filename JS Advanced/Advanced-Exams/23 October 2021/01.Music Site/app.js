window.addEventListener('load', solve);

function solve() {
    
    document.getElementById(`add-btn`).addEventListener('click', onFormClick);
    
    const genreIn = document.getElementById('genre');
    const nameSongIn = document.getElementById('name');
    const authorIn = document.getElementById('author');
    const dataIn = document.getElementById('date');

    const hitsContainer = document.querySelector('#all-hits .all-hits-container');
    const saveContainer = document.querySelector('#saved-hits .saved-container');
    const totalLikes = document.querySelector('#total-likes p');

    function onFormClick(ev) {
        ev.preventDefault();

        const genge = genreIn.value;
        const nameSong = nameSongIn.value;
        const author = authorIn.value;
        const data = dataIn.value;

        if(genge == '' || nameSong == '' || author == '' || data == '') {
            return;
        }

        const hits = (createElemHTML({ genge, nameSong, author, data}))
        hits.querySelector('.save-btn').addEventListener('click', onSaveBtn);
        hits.querySelector('.like-btn').addEventListener('click', onLikeBtn);
        hits.querySelector('.delete-btn').addEventListener('click', onDeleteBtn);

        hitsContainer.appendChild(hits)

        genreIn.value = '';
        nameSongIn.value = '';
        authorIn.value = '';
        dataIn.value = '';
    }

    function onLikeBtn(ev) {
        ev.preventDefault();
        const likeP = totalLikes.textContent.split(' ');
        const currentLikes = Number(likeP[likeP.length - 1]);
        const nextLike = currentLikes + 1
        totalLikes.textContent = `Total Likes: ${nextLike}`;
        ev.target.disabled = true;
    }

    function onSaveBtn(ev) {
        ev.preventDefault();
        const parenBtn = ev.target.parentElement;
        parenBtn.querySelector('.save-btn').remove();
        parenBtn.querySelector('.like-btn').remove();

        saveContainer.appendChild(parenBtn)
    }

    function onDeleteBtn(ev) {
        ev.preventDefault();
        ev.target.parentElement.remove()
    }

    function createElemHTML(dataIn) {
        
        const divHits = createOnlyType('div', 'hits-info');
        divHits.appendChild(createOnlyType('img', '', '', './static/img/img.png'));
        divHits.appendChild(createOnlyType('h2', '', `Genre:${dataIn.genge}`));
        divHits.appendChild(createOnlyType('h2', '', `Name:${dataIn.nameSong}`));
        divHits.appendChild(createOnlyType('h2', '', `Author:${dataIn.author}`));
        divHits.appendChild(createOnlyType('h3', '', `Date:${dataIn.data}`));
        divHits.appendChild(createOnlyType('button', 'save-btn', 'Save song'));
        divHits.appendChild(createOnlyType('button', 'like-btn', 'Like song'));
        divHits.appendChild(createOnlyType('button', 'delete-btn', 'Delete'));

        return divHits;
    }

    function createOnlyType(typeEl, classN, content, srcIn) {

        const el = document.createElement(typeEl);

        if(classN !== '' && classN !== undefined) {
            el.classList.add(classN);
        }

        if(content !== '' && content !== undefined) {
            el.textContent = content;
        }

        if(srcIn !== '' && srcIn !== undefined) {
            el.src = srcIn;
        }

        return el;
    }
}
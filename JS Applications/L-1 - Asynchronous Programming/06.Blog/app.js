function attachEvents() {
    
    document.getElementById(`btnLoadPosts`).addEventListener('click', onGetPosts);
    document.getElementById(`btnViewPost`).addEventListener('click', onViewPost)

    const selecPost = document.getElementById(`posts`);

    async function onGetPosts() {

        try {
            const respons = await fetch('http://localhost:3030/jsonstore/blog/posts');
    
            if(respons.status !== 200) {
                throw new Error('@')
            }

            const data = await respons.json();
            const dataArr = Object.values(data)

            selecPost.innerHTML = '';
            for (const dataLine of dataArr) {
                selecPost.appendChild(createOption(dataLine.id, dataLine.title));
            }

        } catch(err) {
            console.log(err.message)
        }

    }

    async function onViewPost() {
        const idPost = selecPost.selectedOptions[0].value;
    
        console.log(idPost);
        const requestPost = await fetch(`http://localhost:3030/jsonstore/blog/posts/${idPost}`);
        const requestComment = await fetch(`http://localhost:3030/jsonstore/blog/comments`);

        if(requestPost.status !== 200) {
            throw new Error(`'`);
        }

        const dataPost = await requestPost.json();

        const postTitle = document.getElementById(`post-title`);
        const postBody = document.getElementById(`post-body`);

        postTitle.textContent = dataPost.title;
        postBody.textContent = dataPost.body;



    }

    function createOption(inputValut, contentTitle) {
        const el = document.createElement('option');
        el.value = inputValut
        el.textContent = contentTitle;
        return el;
    }
}

attachEvents();
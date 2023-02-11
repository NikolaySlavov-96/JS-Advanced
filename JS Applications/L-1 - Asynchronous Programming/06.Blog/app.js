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

            for (const dataLine of dataArr) {
                selecPost.appendChild(createOption(dataLine.id, dataLine.title));
            }

        } catch(err) {
            console.log(err.message)
        }

    }

    async function onViewPost() {

    }

    function createOption(inputValut, contentTitle) {
        const el = document.createElement('option');
        el.value = inputValut
        el.textContent = contentTitle;
        return el;
    }
}

attachEvents();
import {contentHomeViewGetPost, contentPostViewTitle, contentPostViewComment, contentPostViewUserCommen} from './createConteiner.js';


const addComment = document.querySelector('.topic-title');
const addPostViewTitle = document.getElementsByClassName('theme-title')[0];
const addPostViewComment = document.getElementsByClassName(`comment`)[0];

export async function homeViewGetPost(resposne) {
    const data = Object.values(resposne)
    for (const post of data) {
        addComment.appendChild(contentHomeViewGetPost(post));
    }
}

export async function homeViewPostPost(response) {
    addComment.appendChild(contentHomeViewGetPost(response))
}

export async function postViewTitle(resposne, typeRequest) {
    const resposneData = await resposne.json();
    
    addPostViewTitle.replaceChildren(contentPostViewTitle(resposneData));
}
let id;
export async function postViewComment(resposne, typeRequest) {
    const resposneData = await resposne.json();

    
    addPostViewComment.replaceChildren(contentPostViewComment(resposneData));
    id = resposneData._id;
}

export async function postViewUserCommen(resposne, typeRequest) {
    const resposneData = await resposne.json();
    if(typeRequest == 'post') {
        addPostViewComment.appendChild(contentPostViewUserCommen(resposneData));
        return
    }
    
    const dataArr = Object.values(resposneData)
    const comment = dataArr.filter(c => c.postId === id);

    for (const post of comment) {
        addPostViewComment.appendChild(contentPostViewUserCommen(post));
    }
}
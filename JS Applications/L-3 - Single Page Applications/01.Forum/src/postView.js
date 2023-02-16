import { getRequest, postRequest } from './requestrs.js';

const sectionPost = document.getElementById('postView');
sectionPost.getElementsByClassName(`answer-comment`)[0].addEventListener('submit', onFormData);
sectionPost.remove();

const urlComment = `/jsonstore/collections/myboard/comments`;
const urlPost = '/jsonstore/collections/myboard/posts';
let idFromRequest;

export function postView(url) {
    idFromRequest = url;
    const urlPostId = urlPost + `/` + url;
    getRequest(urlPostId);
    getRequest(urlPostId);
    getRequest(urlComment); // chek more or zero comment
    document.querySelector('main').replaceChildren(sectionPost);
}

function onFormData(ev) {
    ev.preventDefault()

    const parentForm = ev.target
    const formData = new FormData(parentForm);
    const data = Object.fromEntries(formData);
    data.postId = idFromRequest;
    data.currentData = new Date();
    postRequest(urlComment, data);

    parentForm.reset();
}
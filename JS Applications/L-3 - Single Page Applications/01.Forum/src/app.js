import { homeViewSection } from './homeView.js';
import { getRequest } from './requestrs.js';

// window.addEventListener('load', homeViewRequestData)
document.querySelector('nav a').addEventListener('click', homeViewSection);


function homeViewRequestData(ev) {
    const urlPost = '/jsonstore/collections/myboard/posts';
    getRequest(urlPost);
}
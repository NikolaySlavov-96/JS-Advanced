function getArticleGenerator(articles) {

    const contentDisplay = document.getElementById(`content`);

    return function showNext() {
        let currentText = articles.shift();

        if(currentText !== undefined) {

            const article = document.createElement('article');
            article.textContent = currentText;

            contentDisplay.appendChild(article)
        }
    }
}

function getArticleGenerator(articles) {
    let receivedArticles = articles;

    function handleElement() {
        if (articles.length < 1) {
            return;
        } else {
            let contentDiv = document.getElementById('content');

            let article = document.createElement('article');
            article.textContent = receivedArticles.shift();
            contentDiv.appendChild(article);
        }
    }

    return handleElement;
}

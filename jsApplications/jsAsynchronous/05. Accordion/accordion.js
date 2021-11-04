function solution() {
    let section = document.getElementById('main');
    
    async function createAccordion() {
        let loadingP = document.createElement('p');
        loadingP.textContent = 'Loading...'
        section.appendChild(loadingP);

        try {
            let articleList = await fetch(`http://localhost:3030/jsonstore/advanced/articles/list`)
                .then(e => e.json());
            articleList.forEach(article => createArticles(article));
        } catch {
                let errorDiv = document.createElement('div');
                errorDiv.id = 'error';
                
                let errorHeading = document.createElement('h2');
                errorHeading.textContent = 'ERROR ! Please make sure server is running!'
                errorHeading.style.color = 'red';
                
                errorDiv.appendChild(errorHeading);
                section.appendChild(errorDiv);
        }

        loadingP.remove();
    }
    createAccordion();

    function createArticles(article) {
        let accordionDiv = document.createElement('div');
        accordionDiv.classList.add('accordion');

        let headDiv = document.createElement('div');
        headDiv.classList.add('head');

        let titleSpan = document.createElement('span');
        titleSpan.textContent = article.title;

        let toggleButton = document.createElement('button');
        toggleButton.classList.add('button');
        toggleButton.id = article._id;
        toggleButton.textContent = 'MORE';
        toggleButton.addEventListener('click', toggleArticle);

        let contentDiv = document.createElement('div');
        contentDiv.classList.add('extra');

        let contentPara = document.createElement('p');
        getArticleData(article._id, contentPara);

        headDiv.appendChild(titleSpan);
        headDiv.appendChild(toggleButton);

        contentDiv.appendChild(contentPara);

        accordionDiv.appendChild(headDiv);
        accordionDiv.appendChild(contentDiv);
        
        section.appendChild(accordionDiv);

        async function getArticleData(id, element) {
            let articleData = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`)
                .then(article => article.json());
            
            element.textContent = articleData.content;
        }
    }

    function toggleArticle(e) {
        let currentExtraContent = e.target.parentElement.nextElementSibling
        currentExtraContent.classList.contains('extra') 
            ? currentExtraContent.classList.remove('extra')
            : currentExtraContent.classList.add('extra');
    }   
    
}

solution();
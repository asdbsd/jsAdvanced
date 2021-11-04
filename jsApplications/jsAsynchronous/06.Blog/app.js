function attachEvents() {
    let htmlBody = document.querySelector('body');
    
    let postsBtn = document.getElementById('btnLoadPosts');
    let commentsBtn = document.getElementById('btnViewPost');

    let postElements = document.getElementById('posts');
    let commentsUl = document.getElementById('post-comments');

    let myLoadingElement = document.createElement('p');
    myLoadingElement.textContent = 'Loading Posts...'
    myLoadingElement.fontWeight = 'bold';

    postsBtn.addEventListener('click', createPostsList);
    

    async function createPostsList(e) {
        
        try {
            if (document.querySelector('.error') !== null) {
                document.querySelector('.error').remove();
            }
            htmlBody.insertAdjacentElement('afterbegin', myLoadingElement);

            document.getElementById('post-title').textContent = 'Post Details';
            postElements.textContent = '';
            document.getElementById('post-body').textContent = '';
            commentsUl.textContent = '';

            let posts = await fetch('http://localhost:3030/jsonstore/blog/posts').then(posts => posts.json());
            let comments = await fetch(`http://localhost:3030/jsonstore/blog/comments`).then(comment => comment.json());

            for(let post in posts) {
                let postElement = document.createElement('option');
                postElement.label = posts[post].title;
                postElement.value = post;

                postElements.appendChild(postElement);
            }

            commentsBtn.addEventListener('click', getComment);

            function getComment(e) {
                commentsUl.textContent = '';

                let options = Array.from(document.querySelectorAll('select option'));
                let selectedOption = options.filter(option => option.selected)[0];
                let postId = selectedOption.value;
    
                let titleElement = document.getElementById('post-title');
                titleElement.textContent = selectedOption.label;
    
                for(let post in posts) {
                    if (posts[post].id === postId) {
                        let postBody = document.getElementById('post-body');
                        postBody.textContent = posts[post].body
                    }
                }
    
                let currentPostComments = [];
                for(let comment in comments) {
                    if (comments[comment].postId === postId) {
                        currentPostComments.push(comments[comment])
                    }
                }

                currentPostComments.forEach(comment => {
                    let commentLi = document.createElement('li');
                    commentLi.textContent = comment.text;
    
                    commentsUl.appendChild(commentLi)
                })
                
            }
        } catch(err) {
            myLoadingElement.remove()
            let erorPara = document.createElement('p');
            erorPara.textContent = 'Error! Please make sure that the server is running';
            erorPara.style.color = 'red';
            erorPara.classList.add('error');
            erorPara.style.fontWeight = 'bold';

            htmlBody.insertAdjacentElement('afterbegin', erorPara);
        }

        myLoadingElement.remove();
        
    }
}

attachEvents();
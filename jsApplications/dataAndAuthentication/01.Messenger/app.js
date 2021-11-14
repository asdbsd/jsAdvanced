function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const submitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    // For loading notice
    const controlsBox = document.getElementById('controls');
    const loadingSpan = document.createElement('span');
    loadingSpan.textContent = 'Loading...';
    const loadingBr = document.createElement('br');
    controlsBox.appendChild(loadingBr);

    onRefresh();

    submitBtn.addEventListener('click', onSend);
    refreshBtn.addEventListener('click', onRefresh);

    async function onSend() {
        const author = document.querySelector('input[name="author"]');
        const message = document.querySelector('input[name="content"]');

        if (author.value.trim() === '' || message.value.trim() === '') {
            let error = new Error('Author and Message both fields should be filled in.');
            alert(error.message);
            throw error;
        }


        controlsBox.appendChild(loadingSpan);

        let newMessage = {
            author: author.value.trim(),
            content: message.value.trim()
        };

        try {
            const response = await fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/js'
                },
                body: JSON.stringify(newMessage)
            });

            await response.json();
            author.value = '';
            message.value = '';
            loadingSpan.remove();
        } catch {
            loadingSpan.remove();
            sendServerError();
        }

    }

    async function onRefresh() {
        const contentBox = document.getElementById('messages');

        controlsBox.appendChild(loadingSpan);

        try {
            let authorMessages = await fetch(url).then(response => response.json());

            contentBox.value = '';
            Object.keys(authorMessages).forEach(key => {
                contentBox.value += (authorMessages[key].author + ': ') + authorMessages[key].content + '\n';
            });
            loadingSpan.remove();
        } catch {
            loadingSpan.remove();
            sendServerError();
        }
    }

    function sendServerError() {
        let error = new Error('Error! Please make sure that the server is running');
        alert(error.message);
        throw error;
    }

}

attachEvents();
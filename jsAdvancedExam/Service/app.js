window.addEventListener('load', solve);

function solve() {
    const[ receivedSection, completedSection ] = Array.from(document.querySelectorAll('#wrapper section'));
    const repairForm = document.querySelector('div#right form');
    const sendFormBtn = document.querySelector('div#right form button');
    const [ clearBtn ] = [...Array.from(completedSection.getElementsByClassName('clear-btn'))];
    clearBtn.addEventListener('click', onClear);


    sendFormBtn.addEventListener('click', onSend);



    function onSend(e) {
        e.preventDefault();

        let productType = document.getElementById('type-product');
        let description = document.getElementById('description');
        let clientName = document.getElementById('client-name');
        let clientPhone = document.getElementById('client-phone');

        if(!productType.value.trim() 
            && (!productType.value.trim() == 'Computer' || !productType.value.trim() == 'Phone')
            || !description.value.trim() || !clientName.value.trim() || !clientPhone.value.trim()) {
                return;
        }

        const newElement = createReceivedOrderElement(productType.value.trim(), description.value.trim(), clientName.value.trim(), clientPhone.value.trim());
        const [ startBtn, finishBtn] = [...Array.from(newElement.querySelectorAll('button'))];
        startBtn.addEventListener('click', onStart.bind(null, startBtn, finishBtn, e));
        finishBtn.addEventListener('click', onFinish.bind(null, newElement));
        receivedSection.appendChild(newElement);
        repairForm.reset();

        function createReceivedOrderElement(type, description, name, phone) {
            const newDiv = document.createElement('div');
            newDiv.className = 'container';
            newDiv.innerHTML = `<h2>Product type for repair: ${type}</h2>
            <h3>Client information: ${name}, ${phone}</h3>
            <h4>Description of the problem: ${description}</h4>
            <button class="start-btn">Start repair</button>
            <button class="finish-btn" disabled>Finish repair</button>`

            return newDiv;
        }
    }

    function onStart(startElement, endElement,e) {
        startElement.disabled = true;
        endElement.disabled = false;
    }

    function onFinish(completedElement, e) {
        completedElement.remove();
        const [ startBtn, finishBtn] = [...Array.from(completedElement.querySelectorAll('button'))];
        startBtn.remove();
        finishBtn.remove();

        completedSection.appendChild(completedElement);
    }

    function onClear(e) {
        const containerDivs = Array.from(completedSection.querySelectorAll('div.container'));
        if(containerDivs.length < 1) {
            return;
        } else {
            containerDivs.forEach(containerElement => containerElement.remove());
        }
    }
    
}
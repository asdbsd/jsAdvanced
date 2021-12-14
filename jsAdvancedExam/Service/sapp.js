window.addEventListener('load', solve);

function solve() {
    let productType = document.getElementById("type-product");
    let desc = document.getElementById("description");
    let name = document.getElementById("client-name");
    let phone = document.getElementById("client-phone");
    let btn = document.querySelector('#right button');
 
    btn.addEventListener('click', gettingInformation)
 
    function gettingInformation(e) {
        e.preventDefault();
 
        let product = productType.value;
        let description = desc.value;
        let clientName = name.value;
        let clientPhone = phone.value;
 
        if (product == "" || (product !== 'Computer' || product !== 'Phone') || description == "" || clientName == "" || clientPhone == "") {
            return;
        }
 
        let receivedSection = document.getElementById('received-orders');
 
        let container = document.createElement('div');
        container.classList.add("container");
 
        let h2inDiv = document.createElement('h2');
        h2inDiv.textContent = `Product type for repair: ${product}`;
        // let compOption = productType[0].value;
        // let phoneOption = productType[1].value;
 
        // if (product == "Computer") {
        //     h2inDiv.textContent = `Product type for repair: ${compOption}`;
        // } else {
        //     h2inDiv.textContent = `Product type for repair: ${phoneOption}`;
        // }
 
        let h3inDiv = document.createElement('h3');
        h3inDiv.textContent = `Client information: ${clientName}, ${clientPhone}`;
 
        let h4inDiv = document.createElement('h4');
        h4inDiv.textContent = `Description of the problem: ${description}`;
 
        let startBtn = document.createElement('button');
        startBtn.classList.add("start-btn");
        startBtn.textContent = "Start repair";
 
        let finishBtn = document.createElement('button');
        finishBtn.classList.add("finish-btn");
        finishBtn.textContent = "Finish repair";
 
        container.appendChild(h2inDiv);
        container.appendChild(h3inDiv);
        container.appendChild(h4inDiv);
        container.appendChild(startBtn);
        container.appendChild(finishBtn);
 
        receivedSection.appendChild(container);
 
 
        startBtn.addEventListener('click', startRepairing);
        finishBtn.addEventListener('click', finishFunc);
 
        startBtn.disabled = false;
        finishBtn.disabled = true;
 
        function startRepairing() {
            if (startBtn.disabled == false) {
                startBtn.disabled = true;
                finishBtn.disabled = false;
            }
        }
 
        function finishFunc(e) {
            let productTarget = e.target.parentElement;
 
            let lastSection = document.getElementById('completed-orders');
 
            let firstBtn = productTarget.querySelector('.start-btn');
            let secondBtn = productTarget.querySelector('.finish-btn');
 
            productTarget.removeChild(firstBtn);
            productTarget.removeChild(secondBtn);
 
            lastSection.appendChild(productTarget);
        }
 
        let clearBtn = document.querySelector('.clear-btn');
        clearBtn.addEventListener('click', removing);
 
        function removing() {
            let asd = document.querySelector('#completed-orders .container');
            if (!asd) {
                return;
            }
            asd.remove();
        }
 
        productType.value = "";
        desc.value = "";
        name.value = "";
        phone.value = "";
    }
}
 
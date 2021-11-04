function solve() {
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let infoSpan = document.querySelector('#info .info');
    let controlsDiv = document.getElementById('controls');
    let lastStop = false;

    function depart() {
        let nextStopId = 'depot';

        if(infoSpan.getAttribute('data-next-stop-id') !== null) {
            nextStopId = infoSpan.getAttribute('data-next-stop-id');
        }

        let myUrl = `http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`;

        fetch(myUrl)
            .then(body => body.json())
            .then((busInfo) => {
                departBtn.disabled = true;
                arriveBtn.disabled = false;
                infoSpan.textContent = `Next stop ${busInfo.name}`;
                infoSpan.setAttribute('data-next-stop', busInfo.name);
                infoSpan.setAttribute('data-next-stop-id', busInfo.next);
            })
            .catch(err => {
                departBtn.disabled = true;
                arriveBtn.disabled = true;
                infoSpan.textContent = "Error";
                let resetBtn = document.createElement('input');
                resetBtn.type = 'button';
                resetBtn.value = 'Try Again';
                controlsDiv.appendChild(resetBtn);
                resetBtn.addEventListener('click', () => {
                    window.location.reload()
                    resetBtn.remove();
                });
            });
    }

    function arrive() {

        if (infoSpan.getAttribute('data-next-stop-id') == 'depot') {
            departBtn.disabled = true;
            arriveBtn.disabled = true;
            infoSpan.textContent = `Arriving at Last Stop ${infoSpan.getAttribute('data-next-stop')}`;
            let resetBtn = document.createElement('input');
            resetBtn.type = 'button';
            resetBtn.value = 'Try Again';
            controlsDiv.appendChild(resetBtn);
            resetBtn.addEventListener('click', () => {
                window.location.reload()
                resetBtn.remove();
            });
        } else {
            departBtn.disabled = false;
            arriveBtn.disabled = true;
            infoSpan.textContent = `Arriving at ${infoSpan.getAttribute('data-next-stop')}`;
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
window.addEventListener('DOMContentLoaded', (e) => {
    let addCatchForm = document.getElementById('addForm');
    let newCatchButton = addCatchForm.querySelector('button')
    if (sessionStorage.getItem('userData') !== null) {
        document.getElementById('guest').style.display = 'none';
        document.querySelector('nav p span').textContent = JSON.parse(sessionStorage.userData).name;
        document.getElementById('user').style.display = '';
        addCatchForm.angler.disabled = false;
        addCatchForm.weight.disabled = false;
        addCatchForm.species.disabled = false;
        addCatchForm.location.disabled = false;
        addCatchForm.bait.disabled = false;
        addCatchForm.captureTime.disabled = false;
        addCatchForm.captureTime.disabled = false;
        newCatchButton.disabled = false;
        addCatchForm.addEventListener('submit', onCreate);
    } else {
        document.getElementById('guest').style.display = 'inline-block';
        document.querySelector('nav p span').textContent = 'Guest';
        document.getElementById('user').style.display = 'none';
        addCatchForm.angler.disabled = true;
        addCatchForm.weight.disabled = true;
        addCatchForm.species.disabled = true;
        addCatchForm.location.disabled = true;
        addCatchForm.bait.disabled = true;
        addCatchForm.captureTime.disabled = true;
        addCatchForm.captureTime.disabled = true;
    }

    loadCatches();

    function catchAction(e) {

        if (e.target.type !== 'submit') {
            return;
        }

        if (e.target.textContent == 'Update') {
            let newDataInputs = Array.from(e.target.parentElement.querySelectorAll('input'));
            let newObj = newDataInputs.reduce((acc, nextInput) => {
                let updatedObjKey = nextInput.className;
                acc[updatedObjKey] = nextInput.value.trim();

                return acc;
            }, {});

            if(validateObject(newObj)) {
                updateCatch(e.target.dataset.id, newObj)
                newDataInputs.forEach(input => {
                    let dataKey = input.className;
                    input.value = newObj[dataKey];
                });
            } else {
                alert('Please make sure all the fields are filled in. Weight & Capture Time fields should be numbers.');
                return;
            }
            
            
        } else if (e.target.textContent == 'Delete') {
            deleteCatch(e.target.dataset.id)
            e.target.parentElement.remove();
        }
    }

    function validateObject(obj) {
        const [angler,weight,species,location, bait, captureTime] = [...Object.values(obj)];

        let anglerIsvalid = angler !== '' ? true : false;
        let baitIsvalid = bait !== '' ? true : false;
        let captureTimeIsvalid = captureTime !== '' && isNaN(Number(captureTime)) !== true ? true : false;
        let locationIsValid = location !== '' ? true : false;
        let speciesIsValid = species !== '' ? true : false;
        let weightIsValid = weight !== '' && isNaN(Number(weight)) !== true ? true : false;

        if (anglerIsvalid
            && baitIsvalid
            && captureTimeIsvalid
            && locationIsValid
            && speciesIsValid
            && weightIsValid) {
                return true;
        } else {
                return false;
        }

    }

    async function updateCatch(id, newCatch) {
        let updateUrl = 'http://localhost:3030/data/catches/' + id;

        try {
            let res = await fetch(updateUrl, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': JSON.parse(sessionStorage.userData).token
                },
                body: JSON.stringify(newCatch)
            });
    
            if (res.ok !== true) {
                let error = await res.json();
                throw new Error(error.message);
            }
        } catch (err) {
            alert(err);
        }
    }

    async function deleteCatch(id) {
        let deleteUrl = 'http://localhost:3030/data/catches/' + id;

        try {
            let res = await fetch(deleteUrl, {
                method: 'delete',
                headers: {
                    'X-Authorization': JSON.parse(sessionStorage.userData).token
                }
            });

            if(res.ok !== true) {
                let error = await res.json();
                throw new Error(error.message);
            }

        } catch(err) {
            alert(err);
        }

    }

    async function onCreate(e) {
        const catchesUrl = 'http://localhost:3030/data/catches';
        e.preventDefault();
        try {
            let res = await fetch(catchesUrl, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': JSON.parse(sessionStorage.userData).token
                },
                body: JSON.stringify({
                    "angler": e.target.angler.value,
                    "weight": e.target.weight.value,
                    "species": e.target.species.value,
                    "location": e.target.location.value,
                    "bait": e.target.bait.value,
                    "captureTime": e.target.captureTime.value
                })
            });

            if (res.ok !== true) {
                let error = await res.json();
                throw new Error(error.message)
            }
            e.target.reset();
            alert('New Catch has been created');
            loadCatches();
        } catch (err) {
            alert(err);
        }

    }

    async function loadCatches() {
        let catchesDiv = document.getElementById('catches');
        catchesDiv.textContent = '';
        const catchesUrl = 'http://localhost:3030/data/catches';
        try {
            const res = await fetch(catchesUrl);

            if (res.ok !== true) {
                let error = await res.json();
                throw new Error(error.message);
            }

            let catches = await res.json();


            Object.values(catches).map((currentCatch) => {
                let newCatchDiv = document.createElement('div');
                newCatchDiv.className = "catch";
                newCatchDiv.innerHTML = createCatch(currentCatch);
                newCatchDiv.addEventListener('click', catchAction)
                catchesDiv.appendChild(newCatchDiv);
            })
        } catch (err) {
            alert(err);
        }
    }


    function createCatch(catchData) {
        let catchIsEnabled = sessionStorage.getItem('userData') !== null && catchData._ownerId == JSON.parse(sessionStorage.getItem('userData')).id ? '' : 'disabled';

        return `
<label>Angler</label>
<input type="text" class="angler" value="${catchData.angler}" ${catchIsEnabled}>
<label>Weight</label>
<input type="text" class="weight" value="${catchData.weight}" ${catchIsEnabled}>
<label>Species</label>
<input type="text" class="species" value="${catchData.species}" ${catchIsEnabled}>
<label>Location</label>
<input type="text" class="location" value="${catchData.location}" ${catchIsEnabled}>
<label>Bait</label>
<input type="text" class="bait" value="${catchData.bait}" ${catchIsEnabled}>
<label>Capture Time</label>
<input type="number" class="captureTime" value="${catchData.captureTime}" ${catchIsEnabled}>
<button class="update" data-id="${catchData._id}" ${catchIsEnabled}>Update</button>
<button class="delete" data-id="${catchData._id}" ${catchIsEnabled}>Delete</button>
`
    }


    document.getElementById('logout').addEventListener('click', userLogout);
    async function userLogout() {
        let logoutUrl = 'http://localhost:3030/users/logout';
        try {
            let res = await fetch(logoutUrl, {
                method: 'get',
                headers: {
                    'X-Authorization': JSON.parse(sessionStorage.userData).token
                }
            });

            if (res.ok !== true && res.status !== '204') {
                let errMessage = 'Please make sure the server is running & you are currently logged in';
                throw new Error(errMessage);
            }

            sessionStorage.removeItem('userData');
            window.location = 'index.html';
        } catch (err) {
            alert(err);
        }
    }

});



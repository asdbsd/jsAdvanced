function lockedProfile() {
    let profileTemplate = document.querySelector('#main .profile');
    profileTemplate.remove();

   (async () => {
        let profileRequest = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
        let profiles = await profileRequest.json();
        let mainDiv = document.querySelector('#main');

        Object.keys(profiles).forEach((key, i) => {
            let profile = profiles[key];
            mainDiv.appendChild(createHtmlProfile(i + 1, profile.username, profile.email, profile.age));
        })
   })();

   function createHtmlProfile(userIndex, username, email, age) {

        let profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');

        let profileImg = document.createElement('img');
        profileImg.src = './iconProfile2.png';
        profileImg.classList.add('userIcon');

        let lockLabel = document.createElement('label');
        lockLabel.textContent = 'Lock';

        let lockRadio = document.createElement('input');
        lockRadio.type = 'radio';
        lockRadio.name = `user${userIndex}Locked`;
        lockRadio.value = 'lock';
        lockRadio.checked = true;

        let unlockLabel = document.createElement('label');
        unlockLabel.textContent = 'Unlock';

        let unlockRadio = document.createElement('input');
        unlockRadio.type = 'radio';
        unlockRadio.name = `user${userIndex}Locked`;
        unlockRadio.value = 'unlock';

        let br = document.createElement('br');
        let hr = document.createElement('hr')

        let usernameLabel = document.createElement('label');
        usernameLabel.textContent = 'Username';

        let usernameInput = document.createElement('input');
        usernameInput.name = `user${userIndex}Username`;
        usernameInput.value = username;
        usernameInput.readOnly = true;
        usernameInput.disabled = true;

        let hiddenFieldsDiv = document.createElement('div');
        hiddenFieldsDiv.id = `user${userIndex}HiddenFields`;

        let hiddenFieldsHr = document.createElement('hr');

        let emailLabel = document.createElement('label')
        emailLabel.textContent = 'Email:'

        let emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.value = email;
        emailInput.name = `user${userIndex}Email`;
        emailInput.disabled = true;
        emailInput.readOnly = true;

        let ageLabel = document.createElement('label')
        ageLabel.textContent = 'Age:'

        let ageInput = document.createElement('input');
        ageInput.type = 'email';
        ageInput.value = age;
        ageInput.name = `user${userIndex}Age`;
        ageInput.disabled = true;
        ageInput.readOnly = true;

        let showMoreBtn = document.createElement('button');
        showMoreBtn.textContent = 'Show more';
        showMoreBtn.addEventListener('click', showHideMore);

        profileDiv.appendChild(profileImg);
        profileDiv.appendChild(lockLabel);
        profileDiv.appendChild(lockRadio);
        profileDiv.appendChild(unlockLabel);
        profileDiv.appendChild(unlockRadio);
        profileDiv.appendChild(br);
        profileDiv.appendChild(hr);
        profileDiv.appendChild(usernameLabel);
        profileDiv.appendChild(usernameInput);

        hiddenFieldsDiv.appendChild(hiddenFieldsHr);
        hiddenFieldsDiv.appendChild(emailLabel);
        hiddenFieldsDiv.appendChild(emailInput);
        hiddenFieldsDiv.appendChild(ageLabel);
        hiddenFieldsDiv.appendChild(ageInput);

        profileDiv.appendChild(hiddenFieldsDiv);
        profileDiv.appendChild(showMoreBtn);

        return profileDiv;
   }

   function showHideMore(e) {

       let profile = e.target.parentElement;
       let showMoreBtn = e.target;
       let hiddenFieldsDiv = e.target.previousElementSibling;
       let radioButton = profile.querySelector('input[type="radio"]:checked');

       if (radioButton.value !== 'unlock') {
           return;
       }

        showMoreBtn.textContent = showMoreBtn.textContent == 'Show more'
            ? 'Hide it'
            : 'Show more';

       hiddenFieldsDiv.style.display = hiddenFieldsDiv.style.display == 'block'
            ? 'none'
            : 'block';
   }

}




			// <div class="profile">
			// 	<img src="./iconProfile2.png" class="userIcon" />
			// 	<label>Lock</label>
			// 	<input type="radio" name="user1Locked" value="lock" checked>
			// 	<label>Unlock</label>
			// 	<input type="radio" name="user1Locked" value="unlock"><br>
			// 	<hr>
			// 	<label>Username</label>
			// 	<input type="text" name="user1Username" value="" disabled readonly />
			// 	<div id="user1HiddenFields">
			// 		<hr>
			// 		<label>Email:</label>
			// 		<input type="email" name="user1Email" value="" disabled readonly />
			// 		<label>Age:</label>
			// 		<input type="email" name="user1Age" value="" disabled readonly />
			// 	</div>
			// 	<button>Show more</button>
			// </div>
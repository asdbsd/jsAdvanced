function lockedProfile() {
    const profileButtons = document.querySelectorAll('.profile button');

    document.getElementById('main').addEventListener('click', showMore);


    function showMore(e) {
        if (e.target.localName == 'button' && e.currentTarget.localName == 'main') {

            let profile = e.target.parentElement
            let checkedElement = profile.querySelector('input[type="radio"]:checked').value;

            if (checkedElement == 'unlock') {
                if (profile.querySelector('button').textContent == 'Show more') {
                    profile.querySelector('div').style.display = 'block'
                    profile.querySelector('button').textContent = 'Hide it'
                } else {
                    profile.querySelector('div').style.display = 'none'
                    profile.querySelector('button').textContent = 'Show more'
                }
               
            }
        }
    }
}
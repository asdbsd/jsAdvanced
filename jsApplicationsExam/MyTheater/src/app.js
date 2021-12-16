import { logout } from './api/data.js';
import { page, render } from './lib.js'
import { getUserData } from './utils.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { eventPage } from './views/event.js';
import { homePage } from './views/home.js'
import { loginPage } from './views/login.js';
import { profilePage } from './views/profile.js';
import { registerPage } from './views/register.js';

document.querySelector('#logoutBtn').addEventListener('click', onLogout);

const main = document.getElementById('content');
const guestUl = document.getElementById('guest');
const userUl = document.getElementById('user');
guestUl.remove();
userUl.remove();

page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/create', createPage);
page('/events/:id', eventPage);
page('/events/:id/edit', editPage);
page('/register', registerPage);
page('/profile', profilePage);

page.start();
updateNav();

function updateNav() {
    const navigation = document.querySelector('nav');
    if(getUserData()) {
        guestUl.remove();
        navigation.appendChild(userUl);
    } else {
        userUl.remove();
        navigation.appendChild(guestUl);
    }
}

function onLogout(e) {
    e.preventDefault();
    logout();
    updateNav();
    page.redirect('/')
}


function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.updateNav = updateNav;
    next();
}
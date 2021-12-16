import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getAllEvents() {
    return api.get('/data/theaters?sortBy=_createdOn%20desc&distinct=title');
}

export async function createEvent(event) {
    return api.post('/data/theaters', event);
}

export async function getEvent(id) {
    return api.get('/data/theaters/' + id);
}

export async function updateEvent(id, event) {
    return api.put('/data/theaters/' + id, event);
}

export async function deleteEvent(id) {
    return api.del('/data/theaters/' + id);
}

export async function getUserProfile(userId) {
    return api.get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function getEventLikes(eventId) {
    return api.get(`/data/likes?where=theaterId%3D%22${eventId}%22&distinct=_ownerId&count`);
}

export async function addLike(id) {
    return api.post('/data/likes', id)
}

export async function getUserLiked(userId, theaterId) {
    return api.get(`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}
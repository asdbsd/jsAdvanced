import { html } from '../lib.js'
import { getUserData } from "../utils.js";
import { addLike, deleteEvent, getEvent, getEventLikes, getUserLiked } from "../api/data.js";

const eventTemplate = (event, isOwner, onDelete, likes, onLike, liked) => html`
    <section id="detailsPage">
        <div id="detailsBox">
            <div class="detailsInfo">
                <h1 .textContent=${'Title: ' + event.title}></h1>
                <div>
                    <img src="${event.imageUrl}" />
                </div>
            </div>
            <div class="details">
                <h3>Theater Description</h3>
                <p .textContent=${event.description}></p>
                <h4 .textContent=${'Date: ' + event.date}></h4>
                <h4 .textContent=${'Author: ' + event.author}></h4>

                ${ isOwner
                    ? html`
                    <div class="buttons">
                        <a @click=${onDelete} class="btn-delete">Delete</a>
                        <a class="btn-edit" href="/events/${event._id}/edit">Edit</a>
                    </div>`
                    : html`${ liked == 0 
                                ? html`<div class="buttons"><a @click=${onLike} class="btn-like" href="javascript:void(0)">Like</a></div>`
                                : html`<div class="buttons"></div>`}`}
                <p class="likes">Likes: ${likes}</p>
            </div>
        </div>
    </section>
`;


export async function eventPage(ctx) {
    const event = await getEvent(ctx.params.id);
    let likes = await getEventLikes(ctx.params.id);
    const userData = getUserData();
    let liked;

    if(userData) {
        liked = await getUserLiked(userData.id, ctx.params.id);
    }

    const isOwner = userData && userData.id == event._ownerId
    ctx.render(eventTemplate(event, isOwner, onDelete, likes, onLike, liked));


    function onDelete(e) {
        confirm('Are you sure that you want to remove this meme FOREVER?');

        if(confirm) {
            deleteEvent(ctx.params.id);
            ctx.page.redirect('/profile');
        }
    }

    async function onLike(id) {
        await addLike({
            "theaterId": ctx.params.id
        });
        likes = await getEventLikes(ctx.params.id);
        liked = await getUserLiked(userData.id, ctx.params.id);
        ctx.render(eventTemplate(event, isOwner, onDelete, likes, onLike, liked));
    }


}
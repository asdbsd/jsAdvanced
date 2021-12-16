import { getUserProfile } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const profileTemplate = (userData, events) => html`
    <section id="profilePage">
        <div class="userInfo">
            <div class="avatar">
                <img src="./images/profilePic.png">
            </div>
            <h2 .textContent=${userData.email}></h2>
        </div>
        <div class="board">
            ${ events.length == 0 
                ? html`
                    <div class="no-events">
                        <p>This user has no events yet!</p>
                    </div>`
                : events.map(eventTemplate)
            }

        </div>
    </section>
`;

const eventTemplate = (event) => html`
    <div class="eventBoard">
        <div class="event-info">
            <img src="./images/Moulin-Rouge!-The-Musical.jpg">
            <h2 .textContent=${event.title}></h2>
            <h6 .textContent=${event.date}></h6>
            <a href="/events/${event._id}" class="details-button">Details</a>
        </div>
    </div>`

export async function profilePage(ctx) {
    const userData = getUserData();
    if(userData && userData.id) {
        const userEvents = await getUserProfile(userData.id);
        ctx.render(profileTemplate(userData, userEvents))
    }
}
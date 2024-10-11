import React, { useState } from 'react';
import './Traveling.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Traveling() {
    const [response, setResponse] = useState('');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handlePollClick = (option) => {
        switch (option) {
            case 'Cultural Exploration':
                setResponse("Ah, the art lover! Don’t forget to take a selfie with the Mona Lisa!");
                break;
            case 'Adventure and Hiking':
                setResponse("You adventurous soul! Just remember, even the best explorers need to hydrate!");
                break;
            case 'Relaxing on the Beach':
                setResponse("Beach bum alert! Sunscreen is your best friend in paradise!");
                break;
            case 'City Breaks':
                setResponse("City slicker! Just make sure to explore the hidden gems, not just the tourist traps!");
                break;
            default:
                setResponse('');
        }
    };

    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const headerStyle = {
        transform: `translate(${(mousePosition.x / 100) - 5}px, ${(mousePosition.y / 100) - 5}px)`,
        transition: 'transform 0.1s',
    };

    return (
        <div className="container text-center" onMouseMove={handleMouseMove}>
            <h1 className="header" style={headerStyle}>Exploring the World</h1>
            <section className="section">
                <h2 className="subHeader">Why Travel?</h2>
                <p className="paragraph">
                    Traveling is an adventure that transforms you. It allows you to step outside your comfort zone and embrace the unknown. Each trip is an opportunity to learn, grow, and connect with people from all walks of life. From the bustling streets of Tokyo to the serene beaches of Bali, each destination tells a story waiting to be discovered.
                </p>
                <p className="paragraph">
                    Imagine savoring a delicious paella in Spain, hiking through the lush landscapes of New Zealand, or exploring the ancient ruins of Machu Picchu. These experiences not only enrich our minds but also create lasting memories that shape who we are. Traveling fosters understanding and appreciation for diverse cultures, making the world feel like a smaller, friendlier place.
                </p>
                <p className="paragraph">
                    The thrill of planning a new journey, the excitement of packing your bags, and the anticipation of new experiences fill our lives with joy. Traveling teaches us resilience and adaptability, as we navigate unfamiliar places and cultures. Each journey adds a chapter to our life story, filled with laughter, challenges, and unforgettable moments.
                </p>
            </section>
            <section className="section">
                <h2 className="subHeader">Common Questions</h2>
                <ul className="list">
                    <li>Do you like traveling?</li>
                    <li>Where do you dream of traveling next?</li>
                    <li>Which countries would you like to visit?</li>
                    <li>What travel hacks have you discovered along the way?</li>
                    <li>When do you think is the best time to explore Asia?</li>
                </ul>
            </section>
            <section className="section">
                <h2 className="subHeader">English Collocations About Traveling</h2>
                <p className="paragraph"><strong>The wealth of wildlife</strong> - богатство дикой природы. Discovering diverse ecosystems is one of the greatest joys of traveling.</p>
                <p className="paragraph"><strong>Have a stopover in</strong> - останавливаться в. It can be a great way to explore a new city during your journey.</p>
                <p className="paragraph"><strong>Pack your bags</strong> - собирать вещи. The excitement builds as you prepare for your next adventure.</p>
                <p className="paragraph"><strong>Travel off the beaten path</strong> - путешествовать в малоизвестные места. This often leads to unique experiences and hidden gems.</p>
                <p className="paragraph"><strong>Book a flight</strong> - бронировать рейс. Planning ahead ensures you get the best deals and options.</p>
                <p className="paragraph"><strong>Catch a glimpse of</strong> - увидеть. Whether it's a famous landmark or a stunning sunset, these moments are unforgettable.</p>
                <p className="paragraph"><strong>Explore the local cuisine</strong> - исследовать местную кухню. Trying new foods is a delicious way to experience a culture.</p>
                <p className="paragraph"><strong>Make lasting memories</strong> - создавать незабываемые воспоминания. Travel enriches our lives and connects us with others.</p>
            </section>
            <section className="section">
                <h2 className="subHeader">Quick Travel Poll</h2>
                <p className="paragraph">What's your favorite type of travel experience?</p>
                <div className="poll-options">
                    <button className="btn btn-primary m-2" onClick={() => handlePollClick('Cultural Exploration')}>Cultural Exploration</button>
                    <button className="btn btn-success m-2" onClick={() => handlePollClick('Adventure and Hiking')}>Adventure and Hiking</button>
                    <button className="btn btn-warning m-2" onClick={() => handlePollClick('Relaxing on the Beach')}>Relaxing on the Beach</button>
                    <button className="btn btn-info m-2" onClick={() => handlePollClick('City Breaks')}>City Breaks</button>
                </div>
                {response && <p className="response mt-4">{response}</p>}
            </section>
        </div>
    );
}

export default Traveling;
import React, { useState } from 'react';
import './Traveling.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToLinkButton from '../../../Components/Buttons/ToLinkButton/ToLinkButton';

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
            <ToLinkButton link={"/topics-page"} placeholder={"Topics"} />
            <h1 className="header" style={headerStyle}>Exploring the World</h1>
            <section className="section">
                <h2 className="subHeader">Words about travel</h2>
                <div className="row">
                    <div className="col">
                        <ul className="list">
                            <li><strong>Adventure</strong> - приключение</li>
                            <li><strong>Journey</strong> - путешествие</li>
                            <li><strong>Destination</strong> - место назначения</li>
                            <li><strong>Itinerary</strong> - маршрут</li>
                            <li><strong>Expedition</strong> - экспедиция</li>
                            <li><strong>Explorer</strong> - исследователь</li>
                            <li><strong>Passport</strong> - паспорт</li>
                            <li><strong>Travel insurance</strong> - страхование путешествий</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="list">
                            <li><strong>Tourist trap</strong> - туристическая ловушка</li>
                            <li><strong>Souvenir</strong> - сувенир</li>
                            <li><strong>Backpacking</strong> - пеший туризм</li>
                            <li><strong>Accommodation</strong> - жильё</li>
                            <li><strong>Sightseeing</strong> - осмотр достопримечательностей</li>
                            <li><strong>Culture</strong> - культура</li>
                            <li><strong>Guidebook</strong> - путеводитель</li>
                            <li><strong>Local cuisine</strong> - местная кухня</li>
                        </ul>
                    </div>
                </div>
                <div className="sentences mt-4">
                    <p><strong>Adventure</strong>: I love going on an adventure to new places. - Мне нравится отправляться в приключение в новые места.</p>
                    <p><strong>Journey</strong>: Our journey took us through beautiful landscapes. - Наше путешествие проходило через красивые пейзажи.</p>
                    <p><strong>Destination</strong>: Paris is my dream destination. - Париж — это моя мечта о месте назначения.</p>
                    <p><strong>Itinerary</strong>: We planned our itinerary carefully. - Мы тщательно спланировали наш маршрут.</p>
                    <p><strong>Expedition</strong>: The expedition to the mountains was challenging. - Экспедиция в горы была сложной.</p>
                    <p><strong>Explorer</strong>: He is a famous explorer of the Amazon rainforest. - Он известный исследователь амазонских джунглей.</p>
                    <p><strong>Passport</strong>: Don't forget to bring your passport to the airport. - Не забудь взять с собой паспорт в аэропорт.</p>
                    <p><strong>Travel insurance</strong>: It's important to have travel insurance for safety. - Важно иметь страхование путешествий для безопасности.</p>
                    <p><strong>Tourist trap</strong>: That cafe is just a tourist trap. - Это кафе — просто туристическая ловушка.</p>
                    <p><strong>Souvenir</strong>: I bought a charming souvenir from my trip. - Я купил очаровательный сувенир из поездки.</p>
                    <p><strong>Backpacking</strong>: Backpacking through Europe was an unforgettable experience. - Пеший туризм по Европе был незабываемым опытом.</p>
                    <p><strong>Accommodation</strong>: We found great accommodation near the beach. - Мы нашли отличное жильё рядом с пляжем.</p>
                    <p><strong>Sightseeing</strong>: Sightseeing in Rome is a must for every traveler. - Осмотр достопримечательностей в Риме — обязательное дело для каждого путешественника.</p>
                    <p><strong>Culture</strong>: Experiencing the local culture is exciting. - Познавать местную культуру — это увлекательно.</p>
                    <p><strong>Guidebook</strong>: I always carry a guidebook when I travel. - Я всегда беру с собой путеводитель, когда путешествую.</p>
                    <p><strong>Local cuisine</strong>: Tasting the local cuisine is one of the best parts of traveling. - Дегустация местной кухни — одна из лучших частей путешествий.</p>
                </div>
            </section>
            <section className="section">
                <h2 className="subHeader">Common Questions</h2>
                <ul className="list">
                    <li>Do you like traveling? - Тебе нравится путешествовать?</li>
                    <li>Where do you dream of traveling next? - Куда ты мечтаешь поехать следующим?</li>
                    <li>Which countries would you like to visit? - Какие страны ты хотел бы посетить?</li>
                    <li>What travel hacks have you discovered along the way? - Какие советы для путешествий ты открыл на своём пути?</li>
                    <li>When do you think is the best time to explore Asia? - Когда, по твоему мнению, лучше всего исследовать Азию?</li>
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
import React, { useState } from 'react';
import './CardWordsPages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToLinkButton from '../../../Components/Buttons/ToLinkButton/ToLinkButton';

function Nature() {
    const [response, setResponse] = useState('');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handlePollClick = (option) => {
        switch (option) {
            case 'Forest':
                setResponse("You love forests! The sounds of nature are truly magical there!");
                break;
            case 'Ocean': 
                setResponse("Ocean lover! The waves and salty air are so refreshing!");
                break;
            case 'Mountains':
                setResponse("Mountain enthusiast! The views from the peaks are breathtaking!");
                break;
            case 'Desert':
                setResponse("Desert explorer! The vastness and silence are incredible!");
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
            <h1 className="header" style={headerStyle}>Nature Topic</h1>
            <section className="section">
                <h2 className="subHeader">Words about Nature</h2>
                <div className="row">
                    <div className="col">
                        <ul className="list">
                            <li><strong>Forest</strong> - лес</li>
                            <li><strong>Mountain</strong> - гора</li>
                            <li><strong>River</strong> - река</li>
                            <li><strong>Lake</strong> - озеро</li>
                            <li><strong>Ocean</strong> - океан</li>
                            <li><strong>Valley</strong> - долина</li>
                            <li><strong>Desert</strong> - пустыня</li>
                            <li><strong>Waterfall</strong> - водопад</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="list">
                            <li><strong>Ecosystem</strong> - экосистема</li>
                            <li><strong>Wildlife</strong> - дикая природа</li>
                            <li><strong>Climate</strong> - климат</li>
                            <li><strong>Landscape</strong> - пейзаж</li>
                            <li><strong>Flora</strong> - растительность</li>
                            <li><strong>Fauna</strong> - животный мир</li>
                            <li><strong>Wilderness</strong> - дикая местность</li>
                            <li><strong>Environment</strong> - окружающая среда</li>
                        </ul>
                    </div>
                </div>
                <div className="sentences mt-4">
                    <p><strong>Forest</strong>: The ancient forest is home to many species. - Древний лес является домом для многих видов.</p>
                    <p><strong>Mountain</strong>: Snow-capped mountains stretch across the horizon. - Заснеженные горы простираются до горизонта.</p>
                    <p><strong>River</strong>: The river flows swiftly through the valley. - Река быстро течёт через долину.</p>
                    <p><strong>Lake</strong>: The lake reflects the surrounding mountains. - Озеро отражает окружающие горы.</p>
                    <p><strong>Ocean</strong>: The vast ocean contains countless mysteries. - Огромный океан содержит бесчисленные тайны.</p>
                    <p><strong>Valley</strong>: The fertile valley is perfect for farming. - Плодородная долина идеальна для земледелия.</p>
                    <p><strong>Desert</strong>: The desert comes alive at night. - Пустыня оживает ночью.</p>
                    <p><strong>Waterfall</strong>: The powerful waterfall creates a rainbow. - Мощный водопад создает радугу.</p>
                    <p><strong>Ecosystem</strong>: Every ecosystem is delicately balanced. - Каждая экосистема находится в хрупком равновесии.</p>
                    <p><strong>Wildlife</strong>: Local wildlife adapts to changing seasons. - Местная дикая природа приспосабливается к смене сезонов.</p>
                    <p><strong>Climate</strong>: The climate affects all living things. - Климат влияет на все живые существа.</p>
                    <p><strong>Landscape</strong>: The dramatic landscape takes your breath away. - Впечатляющий пейзаж захватывает дух.</p>
                    <p><strong>Flora</strong>: Tropical flora is incredibly diverse. - Тропическая флора невероятно разнообразна.</p>
                    <p><strong>Fauna</strong>: Arctic fauna has adapted to extreme cold. - Арктическая фауна приспособилась к экстремальному холоду.</p>
                    <p><strong>Wilderness</strong>: The untouched wilderness remains pristine. - Нетронутая дикая местность остается первозданной.</p>
                    <p><strong>Environment</strong>: We must protect our environment. - Мы должны защищать нашу окружающую среду.</p>
                </div>
            </section>
            <section className="section">
                <h2 className="subHeader">Common Nature Questions</h2>
                <ul className="list">
                    <li>What is your favorite natural landscape?</li>
                    <li>How often do you spend time in nature?</li>
                    <li>Which ecosystem interests you the most?</li>
                    <li>What wildlife have you encountered?</li>
                    <li>How do you help protect the environment?</li>
                </ul>
            </section>
            <section className="section">
                <h2 className="subHeader">English Collocations About Nature</h2>
                <p className="paragraph"><strong>Natural habitat</strong> - естественная среда обитания. Every species needs its natural habitat to survive.</p>
                <p className="paragraph"><strong>Endangered species</strong> - вымирающие виды. Many endangered species need our protection.</p>
                <p className="paragraph"><strong>Environmental impact</strong> - влияние на окружающую среду. Human activities have a significant environmental impact.</p>
                <p className="paragraph"><strong>Pristine wilderness</strong> - нетронутая природа. Few areas of pristine wilderness remain.</p>
                <p className="paragraph"><strong>Natural resources</strong> - природные ресурсы. We must use natural resources wisely.</p>
                <p className="paragraph"><strong>Wildlife conservation</strong> - охрана дикой природы. Wildlife conservation is crucial for biodiversity.</p>
                <p className="paragraph"><strong>Climate change</strong> - изменение климата. Climate change affects ecosystems worldwide.</p>
                <p className="paragraph"><strong>Biodiversity hotspot</strong> - точка биоразнообразия. Rainforests are important biodiversity hotspots.</p>
            </section>
            <section className="section">
                <h2 className="subHeader">Quick Nature Poll</h2>
                <p className="paragraph">What's your favorite natural environment?</p>
                <div className="poll-options">
                    <button className="btn btn-success m-2" onClick={() => handlePollClick('Forest')}>Forest</button>
                    <button className="btn btn-info m-2" onClick={() => handlePollClick('Ocean')}>Ocean</button>
                    <button className="btn btn-secondary m-2" onClick={() => handlePollClick('Mountains')}>Mountains</button>
                    <button className="btn btn-warning m-2" onClick={() => handlePollClick('Desert')}>Desert</button>
                </div>
                {response && <p className="response mt-4">{response}</p>}
            </section>
        </div>
    );
}

export default Nature;
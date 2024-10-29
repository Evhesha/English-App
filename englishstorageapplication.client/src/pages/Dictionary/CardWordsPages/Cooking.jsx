import React, { useState } from 'react';
import './Cooking.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToLinkButton from '../../../Components/Buttons/ToLinkButton/ToLinkButton';

function Cooking() {
    const [response, setResponse] = useState('');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handlePollClick = (option) => {
        switch (option) {
            case 'Baking':
                setResponse("You love baking! Don't forget to try new recipes to impress your friends!");
                break;
            case 'Grilling':
                setResponse("Grilling enthusiast! Remember, it's all about the right seasoning!");
                break;
            case 'Frying':
                setResponse("Frying fan! Crispy is the way to go, but watch out for the oil!");
                break;
            case 'Steaming':
                setResponse("Steaming lover! Healthy cooking is the best cooking!");
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
            <h1 className="header" style={headerStyle}>Cooking Topic</h1>
            <section className="section">
                <h2 className="subHeader">Words about Cooking</h2>
                <div className="row">
                    <div className="col">
                        <ul className="list">
                            <li><strong>Baking</strong> - выпечка</li>
                            <li><strong>Grilling</strong> - гриль</li>
                            <li><strong>Frying</strong> - жарка</li>
                            <li><strong>Steaming</strong> - приготовление на пару</li>
                            <li><strong>Boiling</strong> - варка</li>
                            <li><strong>Roasting</strong> - запекание</li>
                            <li><strong>Chopping</strong> - нарезка</li>
                            <li><strong>Mixing</strong> - смешивание</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="list">
                            <li><strong>Seasoning</strong> - приправы</li>
                            <li><strong>Sautéing</strong> - обжаривание</li>
                            <li><strong>Simmering</strong> - томление</li>
                            <li><strong>Marinating</strong> - маринование</li>
                            <li><strong>Whipping</strong> - взбивание</li>
                            <li><strong>Garnishing</strong> - украшение</li>
                            <li><strong>Plating</strong> - оформление блюда</li>
                            <li><strong>Fermenting</strong> - ферментация</li>
                        </ul>
                    </div>
                </div>
                <div className="sentences mt-4">
                    <p><strong>Baking</strong>: I love baking fresh bread on weekends. - Мне нравится печь свежий хлеб по выходным.</p>
                    <p><strong>Grilling</strong>: Grilling vegetables adds a smoky flavor. - Жарка овощей придаёт им дымный вкус.</p>
                    <p><strong>Frying</strong>: Frying potatoes makes them crispy and delicious. - Жарка картошки делает её хрустящей и вкусной.</p>
                    <p><strong>Steaming</strong>: Steaming fish keeps it moist and tender. - Приготовление рыбы на пару сохраняет её сочность и нежность.</p>
                    <p><strong>Boiling</strong>: Boiling pasta is the first step to a great meal. - Варка пасты — это первый шаг к отличному блюду.</p>
                    <p><strong>Roasting</strong>: Roasting chicken gives it a golden brown skin. - Запекание курицы придаёт ей золотистую корочку.</p>
                    <p><strong>Chopping</strong>: Chopping onions can make you cry! - Нарезка лука может заставить вас плакать!</p>
                    <p><strong>Mixing</strong>: Mixing the batter well is essential for fluffy pancakes. - Хорошее смешивание теста необходимо для пышных блинов.</p>
                    <p><strong>Seasoning</strong>: Seasoning your food enhances its flavor. - Приправление пищи улучшает её вкус.</p>
                    <p><strong>Sautéing</strong>: Sautéing garlic in olive oil creates a wonderful aroma. - Обжаривание чеснока в оливковом масле создаёт прекрасный аромат.</p>
                    <p><strong>Simmering</strong>: Simmering the soup makes all the flavors blend together. - Томление супа позволяет всем вкусам смешаться.</p>
                    <p><strong>Marinating</strong>: Marinating meat overnight improves its taste. - Маринование мяса на ночь улучшает его вкус.</p>
                    <p><strong>Whipping</strong>: Whipping cream until stiff peaks form is crucial for desserts. - Взбивание сливок до образования жестких пиков важно для десертов.</p>
                    <p><strong>Garnishing</strong>: Garnishing with fresh herbs adds color to the dish. - Украшение свежей зеленью добавляет цвет блюду.</p>
                    <p><strong>Plating</strong>: Plating your food beautifully makes it more appetizing. - Красивое оформление пищи делает её более аппетитной.</p>
                    <p><strong>Fermenting</strong>: Fermenting vegetables can enhance their health benefits. - Ферментация овощей может увеличить их полезные свойства.</p>
                </div>
            </section>
            <section className="section">
                <h2 className="subHeader">Common Cooking Questions</h2>
                <ul className="list">
                    <li>What is your favorite dish to cook?</li>
                    <li>Do you prefer baking or frying?</li>
                    <li>Which cuisines do you want to explore?</li>
                    <li>What kitchen hacks have you discovered?</li>
                    <li>When do you think is the best time to try new recipes?</li>
                </ul>
            </section>
            <section className="section">
                <h2 className="subHeader">English Collocations About Cooking</h2>
                <p className="paragraph"><strong>Whip up a dish</strong> - быстро приготовить блюдо. It's always fun to whip something up for unexpected guests.</p>
                <p className="paragraph"><strong>Chop vegetables</strong> - нарезать овощи. Proper chopping skills make cooking easier and more enjoyable.</p>
                <p className="paragraph"><strong>Season to taste</strong> - приправить по вкусу. Adjusting spices is crucial for a perfect dish.</p>
                <p className="paragraph"><strong>Set the table</strong> - накрыть на стол. A well-set table enhances the dining experience.</p>
                <p className="paragraph"><strong>Simmer on low heat</strong> - тушить на медленном огне. This technique brings out the flavors in your dish.</p>
                <p className="paragraph"><strong>Preheat the oven</strong> - разогреть духовку. Preheating ensures even cooking of baked goods.</p>
                <p className="paragraph"><strong>Garnish with herbs</strong> - украсить зеленью. A garnish adds a touch of elegance to any meal.</p>
                <p className="paragraph"><strong>Cook from scratch</strong> - готовить с нуля. Cooking from scratch is rewarding and healthier.</p>
            </section>
            <section className="section">
                <h2 className="subHeader">Quick Cooking Poll</h2>
                <p className="paragraph">What's your favorite cooking method?</p>
                <div className="poll-options">
                    <button className="btn btn-primary m-2" onClick={() => handlePollClick('Baking')}>Baking</button>
                    <button className="btn btn-success m-2" onClick={() => handlePollClick('Grilling')}>Grilling</button>
                    <button className="btn btn-warning m-2" onClick={() => handlePollClick('Frying')}>Frying</button>
                    <button className="btn btn-info m-2" onClick={() => handlePollClick('Steaming')}>Steaming</button>
                </div>
                {response && <p className="response mt-4">{response}</p>}
            </section>
        </div>
    );
}

export default Cooking;
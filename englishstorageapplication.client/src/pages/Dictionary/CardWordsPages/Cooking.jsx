import React, { useState } from 'react';
import './Traveling.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <h1 className="header" style={headerStyle}>Cooking topic</h1>
            <section className="section">
                <h2 className="subHeader">Why Learn Cooking?</h2>
                <p className="paragraph">
                    Cooking is an essential skill that empowers you to create delicious meals at home. It allows you to explore different cuisines and experiment with flavors. Each recipe is an opportunity to learn new techniques and expand your culinary knowledge.
                </p>
                <p className="paragraph">
                    Imagine preparing a mouth-watering lasagna, baking a fluffy cake, or grilling the perfect steak. These experiences not only enhance your cooking skills but also bring joy and satisfaction to yourself and your loved ones. Cooking fosters creativity and appreciation for good food.
                </p>
                <p className="paragraph">
                    The excitement of trying a new recipe, the aroma of spices filling your kitchen, and the joy of sharing a meal with friends create lasting memories. Cooking teaches us patience and attention to detail, as we navigate through ingredients and methods. Each dish adds a new flavor to our life story.
                </p>
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
import React, { useState } from 'react';
import './CardWordsPages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToLinkButton from '../../../Components/Buttons/ToLinkButton/ToLinkButton';

function GrammarDictionary() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeCategory, setActiveCategory] = useState('particles');

    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const categories = {
        particles: {
            title: "Частицы и Служебные Слова",
            words: [
                { en: "The", ru: "определенный артикль", example: "The book is interesting." },
                { en: "A/An", ru: "неопределенный артикль", example: "A cat; an apple" },
                { en: "And", ru: "и", example: "Bread and butter" },
                { en: "But", ru: "но", example: "I'm tired but happy." },
                { en: "Or", ru: "или", example: "Tea or coffee?" },
                { en: "So", ru: "так, поэтому", example: "It was late, so I went home." },
                { en: "Yet", ru: "однако, еще", example: "She hasn't arrived yet." },
                { en: "For", ru: "для", example: "This is for you." },
                { en: "Nor", ru: "ни", example: "Neither John nor Mary came." },
                { en: "As", ru: "как, в качестве", example: "He works as a teacher." }
            ]
        },
        prepositions: {
            title: "Предлоги",
            words: [
                { en: "In", ru: "в, через (о времени)", example: "In the house; in 5 minutes" },
                { en: "On", ru: "на, в (о днях)", example: "On the table; on Monday" },
                { en: "At", ru: "в, на (о времени/месте)", example: "At 5 o'clock; at home" },
                { en: "By", ru: "к, у, к (время)", example: "By the window; by tomorrow" },
                { en: "With", ru: "с", example: "Coffee with sugar" },
                { en: "Without", ru: "без", example: "Tea without milk" },
                { en: "About", ru: "о, около", example: "Talk about life; about 5 km" },
                { en: "Between", ru: "между", example: "Between two buildings" },
                { en: "Among", ru: "среди", example: "Among friends" },
                { en: "Through", ru: "через, сквозь", example: "Walk through the park" }
            ]
        },
        conjunctions: {
            title: "Союзы",
            words: [
                { en: "Because", ru: "потому что", example: "I stayed because it was raining." },
                { en: "Although", ru: "хотя", example: "Although it was cold, we went out." },
                { en: "While", ru: "в то время как", example: "I read while waiting." },
                { en: "If", ru: "если", example: "If it rains, we'll stay home." },
                { en: "Unless", ru: "если не", example: "Unless you study, you won't pass." },
                { en: "Since", ru: "с тех пор как", example: "I've known her since childhood." },
                { en: "Until", ru: "до тех пор пока", example: "Wait until I return." },
                { en: "When", ru: "когда", example: "Call me when you arrive." },
                { en: "Where", ru: "где", example: "I know where he lives." },
                { en: "Whether", ru: "ли", example: "I don't know whether to go." }
            ]
        },
        adverbs: {
            title: "Наречия Частоты",
            words: [
                { en: "Always", ru: "всегда", example: "I always wake up early." },
                { en: "Usually", ru: "обычно", example: "I usually drink coffee." },
                { en: "Often", ru: "часто", example: "We often go to the cinema." },
                { en: "Sometimes", ru: "иногда", example: "Sometimes I cook dinner." },
                { en: "Rarely", ru: "редко", example: "I rarely eat fast food." },
                { en: "Seldom", ru: "изредка", example: "He seldom visits us." },
                { en: "Never", ru: "никогда", example: "I never smoke." },
                { en: "Hardly ever", ru: "почти никогда", example: "I hardly ever drink alcohol." },
                { en: "Daily", ru: "ежедневно", example: "I exercise daily." },
                { en: "Weekly", ru: "еженедельно", example: "We meet weekly." }
            ]
        },
        pronouns: {
            title: "Местоимения",
            words: [
                { en: "I, me, my, mine", ru: "я, мне, мой, мое", example: "My book is mine." },
                { en: "You, your, yours", ru: "ты/вы, твой/ваш", example: "Is this your bag? It's yours." },
                { en: "He, him, his", ru: "он, ему, его", example: "His car is fast." },
                { en: "She, her, hers", ru: "она, ей, ее", example: "Her house is big." },
                { en: "It, its", ru: "оно, его/ее", example: "The cat ate its food." },
                { en: "We, us, our, ours", ru: "мы, нам, наш", example: "Our home is ours." },
                { en: "They, them, their, theirs", ru: "они, им, их", example: "Their children are theirs." },
                { en: "This", ru: "этот (близко)", example: "This book here" },
                { en: "That", ru: "тот (далеко)", example: "That car over there" },
                { en: "These/Those", ru: "эти/те", example: "These apples; those oranges" }
            ]
        },
        questionWords: {
            title: "Вопросительные Слова",
            words: [
                { en: "What", ru: "что, какой", example: "What is your name?" },
                { en: "Where", ru: "где, куда", example: "Where do you live?" },
                { en: "When", ru: "когда", example: "When will you come?" },
                { en: "Why", ru: "почему", example: "Why are you crying?" },
                { en: "Who", ru: "кто", example: "Who is that man?" },
                { en: "Whom", ru: "кого, кому", example: "Whom did you see?" },
                { en: "Whose", ru: "чей", example: "Whose bag is this?" },
                { en: "Which", ru: "который", example: "Which color do you prefer?" },
                { en: "How", ru: "как", example: "How are you feeling?" },
                { en: "How much/many", ru: "сколько", example: "How much does it cost?" }
            ]
        },
        modalVerbs: {
            title: "Модальные Глаголы",
            words: [
                { en: "Can", ru: "мочь, уметь", example: "I can swim." },
                { en: "Could", ru: "мог бы", example: "Could you help me?" },
                { en: "May", ru: "можно, возможно", example: "May I come in?" },
                { en: "Might", ru: "может быть", example: "It might rain." },
                { en: "Must", ru: "должен", example: "You must finish this." },
                { en: "Should", ru: "следует", example: "You should see a doctor." },
                { en: "Would", ru: "бы (условное)", example: "I would go if I could." },
                { en: "Will", ru: "будет (будущее)", example: "I will call you." },
                { en: "Shall", ru: "будем (предложение)", example: "Shall we dance?" },
                { en: "Ought to", ru: "следует", example: "You ought to apologize." }
            ]
        },
        phrasalVerbs: {
            title: "Фразовые Глаголы",
            words: [
                { en: "Look up", ru: "искать (в словаре)", example: "Look up the word in a dictionary." },
                { en: "Turn on/off", ru: "включать/выключать", example: "Turn on the light." },
                { en: "Get up", ru: "вставать", example: "I get up at 7 am." },
                { en: "Go on", ru: "продолжать", example: "Go on with your story." },
                { en: "Put on", ru: "надевать", example: "Put on your coat." },
                { en: "Take off", ru: "снимать", example: "Take off your shoes." },
                { en: "Come back", ru: "возвращаться", example: "Come back soon." },
                { en: "Find out", ru: "узнавать", example: "Find out the truth." },
                { en: "Give up", ru: "сдаваться", example: "Don't give up." },
                { en: "Break down", ru: "ломаться", example: "The car broke down." }
            ]
        },
        commonAdjectives: {
            title: "Распространенные Прилагательные",
            words: [
                { en: "Good", ru: "хороший", example: "Good weather" },
                { en: "Bad", ru: "плохой", example: "Bad news" },
                { en: "Big", ru: "большой", example: "Big house" },
                { en: "Small", ru: "маленький", example: "Small room" },
                { en: "Happy", ru: "счастливый", example: "Happy child" },
                { en: "Sad", ru: "грустный", example: "Sad story" },
                { en: "Hot", ru: "горячий", example: "Hot tea" },
                { en: "Cold", ru: "холодный", example: "Cold water" },
                { en: "New", ru: "новый", example: "New car" },
                { en: "Old", ru: "старый", example: "Old friend" }
            ]
        },
        timeExpressions: {
            title: "Выражения Времени",
            words: [
                { en: "Now", ru: "сейчас", example: "Do it now." },
                { en: "Then", ru: "тогда, затем", example: "First this, then that." },
                { en: "Today", ru: "сегодня", example: "Today is Monday." },
                { en: "Tomorrow", ru: "завтра", example: "See you tomorrow." },
                { en: "Yesterday", ru: "вчера", example: "Yesterday was Sunday." },
                { en: "Soon", ru: "скоро", example: "I'll be back soon." },
                { en: "Later", ru: "позже", example: "Call me later." },
                { en: "Already", ru: "уже", example: "I've already eaten." },
                { en: "Yet", ru: "еще (не)", example: "I haven't finished yet." },
                { en: "Still", ru: "все еще", example: "He's still working." }
            ]
        }
    };

    return (
        <div className="container text-center" onMouseMove={handleMouseMove}>
            <ToLinkButton link={"/topics-page"} placeholder={"Topics"} />
            <section className="section">
                <h2 className="subHeader">Грамматический Словарь</h2>
                <p className="lead mb-4">Основные слова и части речи английского языка</p>
                <div className="mb-4">
                    <div className="btn-group flex-wrap" role="group">
                        {Object.keys(categories).map(category => (
                            <button
                                key={category}
                                type="button"
                                className={`btn ${activeCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {categories[category].title}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="section">
                    <h3 className="subHeader">{categories[activeCategory].title}</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>Английский</th>
                                    <th>Русский</th>
                                    <th>Пример</th>
                                </tr>
                                </thead>
                                <tbody>
                                {categories[activeCategory].words.slice(0, 5).map((word, index) => (
                                    <tr key={index}>
                                        <td><strong>{word.en}</strong></td>
                                        <td>{word.ru}</td>
                                        <td><em>{word.example}</em></td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-6">
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>Английский</th>
                                    <th>Русский</th>
                                    <th>Пример</th>
                                </tr>
                                </thead>
                                <tbody>
                                {categories[activeCategory].words.slice(5, 10).map((word, index) => (
                                    <tr key={index}>
                                        <td><strong>{word.en}</strong></td>
                                        <td>{word.ru}</td>
                                        <td><em>{word.example}</em></td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GrammarDictionary;
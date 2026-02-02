import React, { useState } from 'react';
import './CardWordsPages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToLinkButton from '../../../Components/Buttons/ToLinkButton/ToLinkButton';

function PopularWords() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    return (
        <div className="container text-center" onMouseMove={handleMouseMove}>
            <ToLinkButton link={"/topics-page"} placeholder={"Topics"} />
            <section className="section">
                <h2 className="subHeader">100 Most Popular English Words</h2>
                <p className="lead mb-4">Learn the most frequently used words in English</p>
                <div className="row">
                    <div className="col-md-3">
                        <ul className="list">
                            <li><strong>the</strong> - определенный артикль</li>
                            <li><strong>be</strong> - быть</li>
                            <li><strong>to</strong> - к, в, для</li>
                            <li><strong>of</strong> - из, от, о</li>
                            <li><strong>and</strong> - и</li>
                            <li><strong>a</strong> - неопределенный артикль</li>
                            <li><strong>in</strong> - в, на</li>
                            <li><strong>that</strong> - тот, что</li>
                            <li><strong>have</strong> - иметь</li>
                            <li><strong>I</strong> - я</li>
                            <li><strong>it</strong> - он, она, оно</li>
                            <li><strong>for</strong> - для</li>
                            <li><strong>not</strong> - не</li>
                            <li><strong>on</strong> - на</li>
                            <li><strong>with</strong> - с</li>
                            <li><strong>he</strong> - он</li>
                            <li><strong>as</strong> - как, в качестве</li>
                            <li><strong>you</strong> - ты, вы</li>
                            <li><strong>do</strong> - делать</li>
                            <li><strong>at</strong> - в, на (о месте)</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="list">
                            <li><strong>this</strong> - этот</li>
                            <li><strong>but</strong> - но</li>
                            <li><strong>his</strong> - его</li>
                            <li><strong>by</strong> - к, у, через</li>
                            <li><strong>from</strong> - из, от</li>
                            <li><strong>they</strong> - они</li>
                            <li><strong>we</strong> - мы</li>
                            <li><strong>say</strong> - говорить</li>
                            <li><strong>her</strong> - ее</li>
                            <li><strong>she</strong> - она</li>
                            <li><strong>or</strong> - или</li>
                            <li><strong>an</strong> - неопределенный артикль</li>
                            <li><strong>will</strong> - будет</li>
                            <li><strong>my</strong> - мой</li>
                            <li><strong>one</strong> - один</li>
                            <li><strong>all</strong> - все, весь</li>
                            <li><strong>would</strong> - бы (модальный глагол)</li>
                            <li><strong>there</strong> - там</li>
                            <li><strong>their</strong> - их</li>
                            <li><strong>what</strong> - что</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="list">
                            <li><strong>so</strong> - так, поэтому</li>
                            <li><strong>up</strong> - вверх</li>
                            <li><strong>out</strong> - из, вне</li>
                            <li><strong>if</strong> - если</li>
                            <li><strong>about</strong> - о, около</li>
                            <li><strong>who</strong> - кто</li>
                            <li><strong>get</strong> - получать</li>
                            <li><strong>which</strong> - который</li>
                            <li><strong>go</strong> - идти</li>
                            <li><strong>me</strong> - мне, меня</li>
                            <li><strong>when</strong> - когда</li>
                            <li><strong>make</strong> - делать, создавать</li>
                            <li><strong>can</strong> - мочь</li>
                            <li><strong>like</strong> - нравиться, как</li>
                            <li><strong>time</strong> - время</li>
                            <li><strong>no</strong> - нет</li>
                            <li><strong>just</strong> - просто, только что</li>
                            <li><strong>him</strong> - его, ему</li>
                            <li><strong>know</strong> - знать</li>
                            <li><strong>take</strong> - брать</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="list">
                            <li><strong>people</strong> - люди</li>
                            <li><strong>into</strong> - в, внутрь</li>
                            <li><strong>year</strong> - год</li>
                            <li><strong>your</strong> - твой, ваш</li>
                            <li><strong>good</strong> - хороший</li>
                            <li><strong>some</strong> - некоторый, немного</li>
                            <li><strong>could</strong> - мог бы</li>
                            <li><strong>them</strong> - их, им</li>
                            <li><strong>see</strong> - видеть</li>
                            <li><strong>other</strong> - другой</li>
                            <li><strong>than</strong> - чем</li>
                            <li><strong>then</strong> - затем, потом</li>
                            <li><strong>now</strong> - сейчас</li>
                            <li><strong>look</strong> - смотреть</li>
                            <li><strong>only</strong> - только</li>
                            <li><strong>come</strong> - приходить</li>
                            <li><strong>its</strong> - его, ее (неодуш.)</li>
                            <li><strong>over</strong> - над, через</li>
                            <li><strong>think</strong> - думать</li>
                            <li><strong>also</strong> - также</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="section">
                <h3 className="subHeader">Examples in Context</h3>
                <div className="sentences mt-4">
                    <p><strong>The</strong>: The sun is shining today. - Солнце светит сегодня.</p>
                    <p><strong>Be</strong>: I want to be happy. - Я хочу быть счастливым.</p>
                    <p><strong>And</strong>: Bread and butter. - Хлеб и масло.</p>
                    <p><strong>Have</strong>: I have a car. - У меня есть машина.</p>
                    <p><strong>That</strong>: That is my house. - Это мой дом.</p>
                    <p><strong>For</strong>: This gift is for you. - Этот подарок для тебя.</p>
                    <p><strong>With</strong>: Coffee with milk. - Кофе с молоком.</p>
                    <p><strong>This</strong>: This book is interesting. - Эта книга интересная.</p>
                    <p><strong>But</strong>: I like it, but it's expensive. - Мне это нравится, но это дорого.</p>
                    <p><strong>They</strong>: They are my friends. - Они мои друзья.</p>
                    <p><strong>Say</strong>: What did you say? - Что ты сказал?</p>
                    <p><strong>Will</strong>: I will help you. - Я помогу тебе.</p>
                    <p><strong>Time</strong>: Time is money. - Время - деньги.</p>
                    <p><strong>Like</strong>: I like chocolate. - Мне нравится шоколад.</p>
                    <p><strong>People</strong>: Many people were there. - Там было много людей.</p>
                </div>
            </section>
            <section className="section">
                <h3 className="subHeader">Word Categories</h3>
                <div className="row">
                    <div className="col-md-4">
                        <h4>Most Common Articles</h4>
                        <p><strong>the</strong> - используется перед существительными</p>
                        <p><strong>a/an</strong> - неопределенные артикли</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Essential Pronouns</h4>
                        <p><strong>I, you, he, she, it, we, they</strong> - личные местоимения</p>
                        <p><strong>my, your, his, her, our, their</strong> - притяжательные</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Key Verbs</h4>
                        <p><strong>be, have, do, say, get, make, go, know</strong></p>
                        <p>These verbs form the basis of English sentences</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PopularWords;
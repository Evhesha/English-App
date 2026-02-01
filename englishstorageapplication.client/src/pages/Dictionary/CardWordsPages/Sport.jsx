import React, { useState } from 'react';
import './CardWordsPages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToLinkButton from '../../../Components/Buttons/ToLinkButton/ToLinkButton';

function Sport() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    return (
        <div className="container text-center" onMouseMove={handleMouseMove}>
            <ToLinkButton link={"/topics-page"} placeholder={"Topics"} />
            <section className="section">
                <h2 className="subHeader">Words about Sport</h2>
                <div className="row">
                    <div className="col">
                        <ul className="list">
                            <li><strong>Football</strong> - футбол</li>
                            <li><strong>Basketball</strong> - баскетбол</li>
                            <li><strong>Tennis</strong> - теннис</li>
                            <li><strong>Swimming</strong> - плавание</li>
                            <li><strong>Running</strong> - бег</li>
                            <li><strong>Volleyball</strong> - волейбол</li>
                            <li><strong>Boxing</strong> - бокс</li>
                            <li><strong>Wrestling</strong> - борьба</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="list">
                            <li><strong>Athlete</strong> - спортсмен</li>
                            <li><strong>Competition</strong> - соревнование</li>
                            <li><strong>Training</strong> - тренировка</li>
                            <li><strong>Coach</strong> - тренер</li>
                            <li><strong>Team</strong> - команда</li>
                            <li><strong>Victory</strong> - победа</li>
                            <li><strong>Championship</strong> - чемпионат</li>
                            <li><strong>Medal</strong> - медаль</li>
                        </ul>
                    </div>
                </div>
                <div className="sentences mt-4">
                    <p><strong>Football</strong>: The team scored a goal in the last minute. - Команда забила гол на последней минуте.</p>
                    <p><strong>Basketball</strong>: He made a three-point shot from half court. - Он забросил трёхочковый с середины площадки.</p>
                    <p><strong>Tennis</strong>: She serves the ball with incredible speed. - Она подаёт мяч с невероятной скоростью.</p>
                    <p><strong>Swimming</strong>: He broke the world record in freestyle. - Он побил мировой рекорд в вольном стиле.</p>
                    <p><strong>Running</strong>: She trains every morning for the marathon. - Она тренируется каждое утро для марафона.</p>
                    <p><strong>Volleyball</strong>: The team won the championship match. - Команда выиграла чемпионский матч.</p>
                    <p><strong>Boxing</strong>: The boxer knocked out his opponent. - Боксер нокаутировал своего противника.</p>
                    <p><strong>Wrestling</strong>: The wrestler pinned his opponent to win. - Борец прижал противника, чтобы победить.</p>
                    <p><strong>Athlete</strong>: She is a professional athlete. - Она профессиональная спортсменка.</p>
                    <p><strong>Competition</strong>: The competition was very intense. - Соревнование было очень напряженным.</p>
                    <p><strong>Training</strong>: Daily training is essential for success. - Ежедневные тренировки необходимы для успеха.</p>
                    <p><strong>Coach</strong>: The coach developed a new strategy. - Тренер разработал новую стратегию.</p>
                    <p><strong>Team</strong>: Our team works well together. - Наша команда хорошо работает вместе.</p>
                    <p><strong>Victory</strong>: The victory was well-deserved. - Победа была заслуженной.</p>
                    <p><strong>Championship</strong>: They won the national championship. - Они выиграли национальный чемпионат.</p>
                    <p><strong>Medal</strong>: She won a gold medal at the Olympics. - Она выиграла золотую медаль на Олимпиаде.</p>
                </div>
            </section>
            <section className="section">
                <h2 className="subHeader">Common Sport Questions</h2>
                <ul className="list">
                    <li>What's your favorite sport?</li>
                    <li>Do you play any team sports?</li>
                    <li>How often do you exercise?</li>
                    <li>Which sports do you watch on TV?</li>
                    <li>Have you ever won a sports competition?</li>
                </ul>
            </section>
            <section className="section">
                <h2 className="subHeader">English Collocations About Sport</h2>
                <p className="paragraph"><strong>Play sports</strong> - заниматься спортом. Many people play sports to stay healthy.</p>
                <p className="paragraph"><strong>Win a match</strong> - выиграть матч. Our team worked hard to win the match.</p>
                <p className="paragraph"><strong>Break a record</strong> - побить рекорд. She broke the world record in high jump.</p>
                <p className="paragraph"><strong>Score a goal</strong> - забить гол. He scored a goal in extra time.</p>
                <p className="paragraph"><strong>Keep fit</strong> - поддерживать форму. Regular exercise helps keep fit.</p>
                <p className="paragraph"><strong>Train hard</strong> - усердно тренироваться. Athletes train hard for competitions.</p>
                <p className="paragraph"><strong>Set a personal best</strong> - установить личный рекорд. She set a personal best in the marathon.</p>
                <p className="paragraph"><strong>Make the team</strong> - попасть в команду. He finally made the national team.</p>
            </section>
        </div>
    );
}

export default Sport;
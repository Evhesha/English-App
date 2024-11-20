function ThousandPopular() {
    const wordColumns = [
        [
            {word: "as", transcription: "[æz]", translation: "как"},
            {word: "I", transcription: "[aɪ]", translation: "я"},
            {word: "his", transcription: "[hɪz]", translation: "его"},
            {word: "that", transcription: "[ðæt]", translation: "что / тот"},
            {word: "he", transcription: "[hiː]", translation: "он"},
            {word: "was", transcription: "[wɒz]", translation: "был"},
            {word: "for", transcription: "[fɔːr]", translation: "для"},
            {word: "on", transcription: "[ɒn]", translation: "на"},
            {word: "are", transcription: "[ɑːr]", translation: "являются"},
            {word: "with", transcription: "[wɪð]", translation: "с"},
            {word: "they", transcription: "[ðeɪ]", translation: "они"},
            {word: "be", transcription: "[biː]", translation: "быть"},
            {word: "at", transcription: "[ət]", translation: "на"},
            {word: "one", transcription: "[wʌn]", translation: "один"},
            {word: "have", transcription: "[hæv]", translation: "иметь"},
            {word: "this", transcription: "[ðɪs]", translation: "это"},
            {word: "from", transcription: "[frɒm]", translation: "из"},
            {word: "by", transcription: "[baɪ]", translation: "от"},
            {word: "hot", transcription: "[hɒt]", translation: "горячий"},
            {word: "word", transcription: "[wɜːd]", translation: "слово"},
            {word: "but", transcription: "[bʌt]", translation: "но"},
            {word: "what", transcription: "[wɒt]", translation: "что"},
            {word: "some", transcription: "[sʌm]", translation: "некоторый"},
            {word: "is", transcription: "[ɪz]", translation: "является"},
            {word: "it", transcription: "[ɪt]", translation: "это"},
            {word: "you", transcription: "[juː]", translation: "ты"},
            {word: "or", transcription: "[ɔːr]", translation: "или"},
            {word: "had", transcription: "[hæd]", translation: "имел"},
            {word: "the", transcription: "[ðiː]", translation: ""},
            {word: "of", transcription: "[əv]", translation: "из / о"},
            {word: "to", transcription: "[tuː]", translation: "в / к"},
            {word: "and", transcription: "[ænd]", translation: "и"},
            {word: "in", transcription: "[ɪn]", translation: "в"}
        ],
        [
            {word: "we", transcription: "[wiː]", translation: "мы"},
            {word: "can", transcription: "[kæn]", translation: "может"},
            {word: "out", transcription: "[aʊt]", translation: "из / вне"},
            {word: "other", transcription: "[ˈʌð.ər]", translation: "другой"},
            {word: "were", transcription: "[wɜːr]", translation: "были"},
            {word: "which", transcription: "[wɪtʃ]", translation: "который"},
            {word: "do", transcription: "[duː]", translation: "делать"},
            {word: "their", transcription: "[ðeər]", translation: "их"},
            {word: "time", transcription: "[taɪm]", translation: "время"},
            {word: "if", transcription: "[ɪf]", translation: "если"},
            {word: "will", transcription: "[wɪl]", translation: "будет"},
            {word: "how", transcription: "[haʊ]", translation: "как"},
            {word: "said", transcription: "[sed]", translation: "говорить"},
            {word: "an", transcription: "[æn]", translation: ""},
            {word: "each", transcription: "[iːtʃ]", translation: "каждый"},
            {word: "tell", transcription: "[tel]", translation: "говорить"},
            {word: "does", transcription: "[dʌz]", translation: "делает"},
            {word: "set", transcription: "[set]", translation: "задавать"},
            {word: "three", transcription: "[θriː]", translation: "три"},
            {word: "want", transcription: "[wɒnt]", translation: "хотеть"},
            {word: "air", transcription: "[eər]", translation: "воздух"},
            {word: "well", transcription: "[wel]", translation: "хорошо"},
            {word: "also", transcription: "[ˈɔːl.səʊ]", translation: "также"},
            {word: "play", transcription: "[pleɪ]", translation: "играть"},
            {word: "small", transcription: "[smɔːl]", translation: "маленький"},
            {word: "large", transcription: "[lɑːdʒ]", translation: "большой"},
            {word: "turn", transcription: "[tɜːn]", translation: "поворачивать"},
            {word: "here", transcription: "[hɪər]", translation: "здесь"},
            {word: "show", transcription: "[ʃəʊ]", translation: "показывать"},
            {word: "every", transcription: "[ˈev.ri]", translation: "каждый"},
            {word: "good", transcription: "[ɡʊd]", translation: "хороший"},
            {word: "me", transcription: "[miː]", translation: "мне"},
            {word: "give", transcription: "[ɡɪv]", translation: "давать"}
        ],
        [
            {word: "small", transcription: "[smɔːl]", translation: "маленький"},
            {word: "end", transcription: "[end]", translation: "конец"},
            {word: "put", transcription: "[pʊt]", translation: "ставить"},
            {word: "home", transcription: "[həʊm]", translation: "дом"},
            {word: "read", transcription: "[riːd]", translation: "читать"},
            {word: "hand", transcription: "[hænd]", translation: "рука"},
            {word: "port", transcription: "[pɔːt]", translation: "порт"},
            {word: "large", transcription: "[lɑːdʒ]", translation: "большой"},
            {word: "spell", transcription: "[spel]", translation: "читать по буквам"},
            {word: "add", transcription: "[æd]", translation: "добавлять"},
            {word: "even", transcription: "[ˈiː.vən]", translation: "даже"},
            {word: "land", transcription: "[lænd]", translation: "земля"},
            {word: "here", transcription: "[hɪər]", translation: "здесь"},
            {word: "must", transcription: "[mʌst]", translation: "должен"},
            {word: "big", transcription: "[bɪɡ]", translation: "большой"},
            {word: "high", transcription: "[haɪ]", translation: "высокий"},
            {word: "such", transcription: "[sʌtʃ]", translation: "такой"},
            {word: "follow", transcription: "[ˈfɒl.əʊ]", translation: "следовать"},
            {word: "act", transcription: "[ækt]", translation: "действовать"},
            {word: "why", transcription: "[waɪ]", translation: "почему"},
            {word: "ask", transcription: "[ɑːsk]", translation: "спрашивать"},
            {word: "men", transcription: "[men]", translation: "люди"},
            {word: "change", transcription: "[tʃeɪndʒ]", translation: "менять"},
            {word: "help", transcription: "[help]", translation: "помогать"},
            {word: "line", transcription: "[laɪn]", translation: "линия"},
            {word: "much", transcription: "[mʌtʃ]", translation: "много"},
            {word: "before", transcription: "[bɪˈfɔːr]", translation: "до"},
            {word: "move", transcription: "[muːv]", translation: "двигать"},
            {word: "right", transcription: "[raɪt]", translation: "правильно"},
            {word: "too", transcription: "[tuː]", translation: "тоже"},
            {word: "mean", transcription: "[miːn]", translation: "значить"},
            {word: "old", transcription: "[əʊld]", translation: "старый"},
            {word: "any", transcription: "[ˈen.i]", translation: "любой"}
        ]
    ];

    return (
        <div className="thousand-words-container">
            <style>{`
                .thousand-words-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                }

                .intro-text {
                    background: linear-gradient(135deg, #3498db, #2980b9);
                    color: white;
                    padding: 30px;
                    border-radius: 10px;
                    margin: 20px 0 40px;
                    box-shadow: 0 4px 15px rgba(52, 152, 219, 0.2);
                    opacity: 0;
                    animation: fadeIn 0.8s ease forwards;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .words-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 20px;
                    margin-top: 30px;
                }

                .word-column {
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
                    opacity: 0;
                    animation: slideIn 0.8s ease forwards;
                }

                .word-column:nth-child(1) { animation-delay: 0.2s; }
                .word-column:nth-child(2) { animation-delay: 0.4s; }
                .word-column:nth-child(3) { animation-delay: 0.6s; }

                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .word-item {
                    padding: 10px;
                    border-bottom: 1px solid #ecf0f1;
                    transition: all 0.3s ease;
                }

                .word-item:hover {
                    background: #f7f9fc;
                    transform: translateX(5px);
                }

                .transcription {
                    color: #3498db;
                    font-style: italic;
                }

                .translation {
                    color: #7f8c8d;
                }

                h1 {
                    color: #2c3e50;
                    text-align: center;
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                }

                @media (max-width: 768px) {
                    .words-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .intro-text {
                        padding: 20px;
                    }
                }
            `}</style>

            <h1>100 Popular English Words</h1>

            <div className="intro-text">
                <p>На этой странице вы найдете 100 самых популярных английских слов с транскрипцией и переводом.</p>
            </div>

            <div className="words-grid">
                {wordColumns.map((column, columnIndex) => (
                    <div key={columnIndex} className="word-column">
                        {column.map((item, index) => (
                            <div key={index} className="word-item">
                                <strong>{item.word}</strong> <span className="transcription">{item.transcription}</span> — <span className="translation">{item.translation}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ThousandPopular;
import React from 'react';

function WordsInParts() {
  const tables = [
    {
      title: "Личные местоимения (Personal Pronouns)",
      words: [
        { eng: "I", rus: "Я" },
        { eng: "He", rus: "Он" },
        { eng: "She", rus: "Она" },
        { eng: "You", rus: "Ты/Вы" },
        { eng: "We", rus: "Мы" },
        { eng: "They", rus: "Они" },
        { eng: "It", rus: "Оно" }
      ]
    },
    {
      title: "Объектные местоимения (Object Pronouns)",
      words: [
        { eng: "Me", rus: "Меня, мной, мне" },
        { eng: "Us", rus: "Нас, нами, о нас" },
        { eng: "Her", rus: "Ее, ей, о ней" },
        { eng: "Him", rus: "Его, ему, о нем" },
        { eng: "You", rus: "Тебя/Вас" },
        { eng: "Them", rus: "Их, ими, о них" },
        { eng: "It", rus: "Его/Ее (для предметов)" }
      ]
    },
    {
      title: "Притяжательные местоимения (Possessive Pronouns)",
      words: [
        { eng: "My/Mine", rus: "Мой/Моё" },
        { eng: "Your/Yours", rus: "Твой/Ваш" },
        { eng: "His", rus: "Его" },
        { eng: "Her/Hers", rus: "Её" },
        { eng: "Our/Ours", rus: "Наш" },
        { eng: "Their/Theirs", rus: "Их" },
        { eng: "Its", rus: "Его/Её (для предметов)" }
      ]
    },
    {
      title: "Основные предлоги (Basic Prepositions)",
      words: [
        { eng: "In", rus: "В" },
        { eng: "On", rus: "На" },
        { eng: "At", rus: "В/На/У" },
        { eng: "To", rus: "К/В" },
        { eng: "From", rus: "Из/От" },
        { eng: "With", rus: "С" },
        { eng: "Without", rus: "Без" },
        { eng: "For", rus: "Для/За" },
        { eng: "Of", rus: "Родительный падеж" },
        { eng: "By", rus: "К/Возле/От" }
      ]
    },
    {
      title: "Союзы (Conjunctions)",
      words: [
        { eng: "And", rus: "И" },
        { eng: "But", rus: "Но" },
        { eng: "Or", rus: "Или" },
        { eng: "Because", rus: "Потому что" },
        { eng: "So", rus: "Поэтому" },
        { eng: "If", rus: "Если" },
        { eng: "Unless", rus: "Если не" },
        { eng: "Although", rus: "Хотя" }
      ]
    },
    {
      title: "Базовые глаголы (Basic Verbs)",
      words: [
        { eng: "Be (am/is/are)", rus: "Быть" },
        { eng: "Have", rus: "Иметь" },
        { eng: "Do", rus: "Делать" },
        { eng: "Go", rus: "Идти" },
        { eng: "Come", rus: "Приходить" },
        { eng: "See", rus: "Видеть" },
        { eng: "Know", rus: "Знать" },
        { eng: "Think", rus: "Думать" },
        { eng: "Say", rus: "Говорить" },
        { eng: "Get", rus: "Получать" }
      ]
    },
    {
      title: "Прилагательные (Common Adjectives)",
      words: [
        { eng: "Good", rus: "Хороший" },
        { eng: "Bad", rus: "Плохой" },
        { eng: "Big", rus: "Большой" },
        { eng: "Small", rus: "Маленький" },
        { eng: "Hot", rus: "Горячий" },
        { eng: "Cold", rus: "Холодный" },
        { eng: "New", rus: "Новый" },
        { eng: "Old", rus: "Старый" },
        { eng: "Happy", rus: "Счастливый" },
        { eng: "Sad", rus: "Грустный" }
      ]
    },
    {
      title: "Наречия (Common Adverbs)",
      words: [
        { eng: "Very", rus: "Очень" },
        { eng: "Really", rus: "Действительно" },
        { eng: "Well", rus: "Хорошо" },
        { eng: "Fast", rus: "Быстро" },
        { eng: "Slowly", rus: "Медленно" },
        { eng: "Often", rus: "Часто" },
        { eng: "Sometimes", rus: "Иногда" },
        { eng: "Never", rus: "Никогда" },
        { eng: "Always", rus: "Всегда" },
        { eng: "Usually", rus: "Обычно" }
      ]
    },
    {
      title: "Вопросительные слова (Question Words)",
      words: [
        { eng: "What", rus: "Что" },
        { eng: "Where", rus: "Где" },
        { eng: "When", rus: "Когда" },
        { eng: "Why", rus: "Почему" },
        { eng: "How", rus: "Как" },
        { eng: "Who", rus: "Кто" },
        { eng: "Which", rus: "Который" },
        { eng: "Whose", rus: "Чей" }
      ]
    },
    {
      title: "Времена и даты (Time & Dates)",
      words: [
        { eng: "Today", rus: "Сегодня" },
        { eng: "Tomorrow", rus: "Завтра" },
        { eng: "Yesterday", rus: "Вчера" },
        { eng: "Now", rus: "Сейчас" },
        { eng: "Later", rus: "Позже" },
        { eng: "Soon", rus: "Скоро" },
        { eng: "Morning", rus: "Утро" },
        { eng: "Evening", rus: "Вечер" },
        { eng: "Night", rus: "Ночь" },
        { eng: "Week", rus: "Неделя" }
      ]
    }
  ];

  return (
    <div className="words-container">
      <style>{`
        .words-container {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .table-section {
          margin-bottom: 30px;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.5s ease forwards;
        }

        .table-section:nth-child(2) { animation-delay: 0.2s; }
        .table-section:nth-child(3) { animation-delay: 0.4s; }
        .table-section:nth-child(4) { animation-delay: 0.6s; }
        .table-section:nth-child(5) { animation-delay: 0.8s; }
        .table-section:nth-child(6) { animation-delay: 1.0s; }
        .table-section:nth-child(7) { animation-delay: 1.2s; }
        .table-section:nth-child(8) { animation-delay: 1.4s; }
        .table-section:nth-child(9) { animation-delay: 1.6s; }
        .table-section:nth-child(10) { animation-delay: 1.8s; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .table-title {
          color: #2c3e50;
          margin-bottom: 15px;
          font-size: 1.5rem;
          border-bottom: 2px solid #3498db;
          padding-bottom: 5px;
        }

        .words-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          overflow: hidden;
        }

        .words-table th {
          background: #3498db;
          color: white;
          padding: 12px;
          text-align: left;
        }

        .words-table td {
          padding: 12px;
          border-bottom: 1px solid #eee;
        }

        .words-table tr:hover {
          background: #f7f9fc;
          transition: background 0.3s ease;
        }

        @media (max-width: 600px) {
          .words-table {
            font-size: 14px;
          }
          
          .words-table td, .words-table th {
            padding: 8px;
          }
          
          .table-title {
            font-size: 1.2rem;
          }
        }
      `}</style>

      <h1 style={{ 
        textAlign: 'center', 
        color: '#2c3e50',
        marginBottom: '30px',
        fontSize: '2.5rem'
      }}>Words in Parts</h1>

      {tables.map((table, index) => (
        <div key={index} className="table-section">
          <h2 className="table-title">{table.title}</h2>
          <table className="words-table">
            <thead>
              <tr>
                <th>English</th>
                <th>Russian</th>
              </tr>
            </thead>
            <tbody>
              {table.words.map((word, wordIndex) => (
                <tr key={wordIndex}>
                  <td>{word.eng}</td>
                  <td>{word.rus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default WordsInParts;
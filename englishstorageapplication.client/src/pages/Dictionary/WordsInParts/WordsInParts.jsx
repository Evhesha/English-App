function WordsInParts() {
  const tables = [
    {
      title: "Местоимения (Subject Pronouns)",
      words: [
        { eng: "I", rus: "Я" },
        { eng: "He", rus: "Он" },
        { eng: "She", rus: "Она" },
        { eng: "You", rus: "Ты" },
        { eng: "We", rus: "Мы" },
        { eng: "They", rus: "Они" },
        { eng: "It", rus: "Оно" },
      ]
    },
    {
      title: "Объектные местоимения (Object Pronouns)",
      words: [
        { eng: "Me", rus: "Меня, мной, мне" },
        { eng: "Us", rus: "Нас, нами, о нас" },
        { eng: "Her", rus: "Ее, ей, о ней" },
        { eng: "His", rus: "Его, ему, о нем" },
        { eng: "You", rus: "Тобой, тебя, тебе" },
        { eng: "Them", rus: "Ими, их, о них" },
        { eng: "It", rus: "Его, ему, о нем, им" },
      ]
    },
    {
      title: "Предлоги и союзы",
      words: [
        { eng: "To", rus: "К" },
        { eng: "With", rus: "С" },
        { eng: "For", rus: "Для" },
        { eng: "From", rus: "От" },
        { eng: "Of", rus: "Родительный падеж" },
        { eng: "As", rus: "Как" },
        { eng: "And", rus: "И" },
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

        .table-section:nth-child(2) {
          animation-delay: 0.2s;
        }

        .table-section:nth-child(3) {
          animation-delay: 0.4s;
        }

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


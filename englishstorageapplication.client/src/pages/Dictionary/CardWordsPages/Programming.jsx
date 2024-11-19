import React, { useState } from 'react';
import './CardWordsPages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToLinkButton from '../../../Components/Buttons/ToLinkButton/ToLinkButton';

function Programming() {
  const [response, setResponse] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handlePollClick = (option) => {
    switch (option) {
      case 'Web Development':
        setResponse("Web Development is essential! Don't forget to learn about responsive design!");
        break;
      case 'Data Science':
        setResponse("Data Science is fascinating! Remember, data is the new oil!");
        break;
      case 'Machine Learning':
        setResponse("Machine Learning is the future! Keep experimenting with new algorithms!");
        break;
      case 'Cybersecurity':
        setResponse("Cybersecurity is crucial! Always stay ahead of potential threats!");
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

      <h1 className="header" style={headerStyle}>Programming Topic</h1>

      <section className="section">
        <h2 className="subHeader">Words about Programming</h2>
        <div className="row">
          <div className="col">
            <ul className="list">
              <li><strong>Algorithm</strong> - алгоритм</li>
              <li><strong>Function</strong> - функция</li>
              <li><strong>Variable</strong> - переменная</li>
              <li><strong>Loop</strong> - цикл</li>
              <li><strong>Condition</strong> - условие</li>
              <li><strong>Array</strong> - массив</li>
              <li><strong>Object</strong> - объект</li>
              <li><strong>Class</strong> - класс</li>
            </ul>
          </div>
          <div className="col">
            <ul className="list">
              <li><strong>Debugging</strong> - отладка</li>
              <li><strong>Compilation</strong> - компиляция</li>
              <li><strong>Execution</strong> - выполнение</li>
              <li><strong>Framework</strong> - фреймворк</li>
              <li><strong>Library</strong> - библиотека</li>
              <li><strong>Inheritance</strong> - наследование</li>
              <li><strong>Recursion</strong> - рекурсия</li>
              <li><strong>API</strong> - API</li>
            </ul>
          </div>
        </div>

        <div className="sentences mt-4">
          <p><strong>Algorithm</strong>: Learning algorithms is fundamental to programming. - Изучение алгоритмов является основой программирования.</p>
          <p><strong>Function</strong>: Functions allow us to reuse code efficiently. - Функции позволяют нам эффективно переиспользовать код.</p>
          <p><strong>Variable</strong>: Variables store data for use in programs. - Переменные хранят данные для использования в программах.</p>
          <p><strong>Loop</strong>: Loops help in executing code repeatedly. - Циклы помогают многократно выполнять код.</p>
          <p><strong>Condition</strong>: Conditions control the flow of programs. - Условия управляют потоком выполнения программ.</p>
          <p><strong>Array</strong>: Arrays store multiple values in a single variable. - Массивы хранят множество значений в одной переменной.</p>
          <p><strong>Object</strong>: Objects encapsulate data and functions. - Объекты инкапсулируют данные и функции.</p>
          <p><strong>Class</strong>: Classes define the structure of objects. - Классы определяют структуру объектов.</p>
          <p><strong>Debugging</strong>: Debugging helps in finding and fixing errors. - Отладка помогает находить и исправлять ошибки.</p>
          <p><strong>Compilation</strong>: Compilation converts code into executable files. - Компиляция преобразует код в исполняемые файлы.</p>
          <p><strong>Execution</strong>: Execution runs the compiled code. - Выполнение запускает скомпилированный код.</p>
          <p><strong>Framework</strong>: Frameworks provide a foundation for developing software. - Фреймворки предоставляют основу для разработки ПО.</p>
          <p><strong>Library</strong>: Libraries offer reusable code for common tasks. - Библиотеки предлагают переиспользуемый код для общих задач.</p>
          <p><strong>Inheritance</strong>: Inheritance allows new classes to inherit properties from existing ones. - Наследование позволяет новым классам наследовать свойства от существующих.</p>
          <p><strong>Recursion</strong>: Recursion is a method where the solution to a problem depends on smaller instances of the same problem. - Рекурсия - это метод, при котором решение проблемы зависит от меньших экземпляров той же самой проблемы.</p>
          <p><strong>API</strong>: APIs enable interaction between different software systems. - API позволяют взаимодействовать между различными программными системами.</p>
        </div>
      </section>

      <section className="section">
        <h2 className="subHeader">Common Programming Questions</h2>
        <ul className="list">
          <li>What programming language do you prefer?</li>
          <li>How do you approach debugging?</li>
          <li>Which framework do you find most useful?</li>
          <li>What are your favorite libraries?</li>
          <li>When do you use recursion in your code?</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="subHeader">English Collocations About Programming</h2>
        <p className="paragraph"><strong>Write code</strong> - писать код. Writing clean code is essential for maintainability.</p>
        <p className="paragraph"><strong>Run a program</strong> - запускать программу. Running the program helps to test its functionality.</p>
        <p className="paragraph"><strong>Fix a bug</strong> - исправить ошибку. Fixing bugs is a crucial part of software development.</p>
        <p className="paragraph"><strong>Compile the code</strong> - компилировать код. Compiling the code transforms it into an executable form.</p>
        <p className="paragraph"><strong>Test a feature</strong> - тестировать функцию. Testing ensures that features work as expected.</p>
        <p className="paragraph"><strong>Deploy an application</strong> - развернуть приложение. Deploying an application makes it available to users.</p>
        <p className="paragraph"><strong>Update software</strong> - обновлять ПО. Updating software keeps it secure and adds new features.</p>
        <p className="paragraph"><strong>Develop an algorithm</strong> - разрабатывать алгоритм. Developing efficient algorithms is key to solving complex problems.</p>
      </section>

      <section className="section">
        <h2 className="subHeader">Quick Programming Poll</h2>
        <p className="paragraph">What's your favorite programming domain?</p>
        <div className="poll-options">
          <button className="btn btn-primary m-2" onClick={() => handlePollClick('Web Development')}>Web Development</button>
          <button className="btn btn-success m-2" onClick={() => handlePollClick('Data Science')}>Data Science</button>
          <button className="btn btn-warning m-2" onClick={() => handlePollClick('Machine Learning')}>Machine Learning</button>
          <button className="btn btn-info m-2" onClick={() => handlePollClick('Cybersecurity')}>Cybersecurity</button>
        </div>
        {response && <p className="response mt-4">{response}</p>}
      </section>
    </div>
  );
}

export default Programming;

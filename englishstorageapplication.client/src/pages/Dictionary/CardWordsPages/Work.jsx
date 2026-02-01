import React, { useState } from 'react';
import './CardWordsPages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToLinkButton from '../../../Components/Buttons/ToLinkButton/ToLinkButton';

function Work() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="container text-center" onMouseMove={handleMouseMove}>
      <ToLinkButton link={"/topics-page"} placeholder={"Topics"} />
      <section className="section">
        <h2 className="subHeader">Words about Work</h2>
        <div className="row">
          <div className="col">
            <ul className="list">
              <li><strong>Employee</strong> - сотрудник</li>
              <li><strong>Salary</strong> - зарплата</li>
              <li><strong>Office</strong> - офис</li>
              <li><strong>Meeting</strong> - встреча</li>
              <li><strong>Deadline</strong> - срок сдачи</li>
              <li><strong>Project</strong> - проект</li>
              <li><strong>Manager</strong> - менеджер</li>
              <li><strong>Schedule</strong> - расписание</li>
            </ul>
          </div>
          <div className="col">
            <ul className="list">
              <li><strong>Resume</strong> - резюме</li>
              <li><strong>Interview</strong> - собеседование</li>
              <li><strong>Workload</strong> - рабочая нагрузка</li>
              <li><strong>Promotion</strong> - повышение</li>
              <li><strong>Overtime</strong> - сверхурочная работа</li>
              <li><strong>Benefits</strong> - льготы</li>
              <li><strong>Colleague</strong> - коллега</li>
              <li><strong>Department</strong> - отдел</li>
            </ul>
          </div>
        </div>
        <div className="sentences mt-4">
          <p><strong>Employee</strong>: Our company has over 500 employees. - В нашей компании более 500 сотрудников.</p>
          <p><strong>Salary</strong>: They offer a competitive salary package. - Они предлагают конкурентоспособный зарплатный пакет.</p>
          <p><strong>Office</strong>: The new office has modern facilities. - В новом офисе современное оборудование.</p>
          <p><strong>Meeting</strong>: We have a team meeting every Monday. - У нас командная встреча каждый понедельник.</p>
          <p><strong>Deadline</strong>: The project deadline is next Friday. - Срок сдачи проекта в следующую пятницу.</p>
          <p><strong>Project</strong>: This project requires careful planning. - Этот проект требует тщательного планирования.</p>
          <p><strong>Manager</strong>: The manager oversees daily operations. - Менеджер контролирует ежедневные операции.</p>
          <p><strong>Schedule</strong>: I prefer a flexible work schedule. - Я предпочитаю гибкий рабочий график.</p>
          <p><strong>Resume</strong>: Update your resume regularly. - Регулярно обновляйте своё резюме.</p>
          <p><strong>Interview</strong>: The interview went really well. - Собеседование прошло очень хорошо.</p>
          <p><strong>Workload</strong>: Managing workload is important. - Управление рабочей нагрузкой важно.</p>
          <p><strong>Promotion</strong>: She got a promotion last month. - Она получила повышение в прошлом месяце.</p>
          <p><strong>Overtime</strong>: Sometimes we need to work overtime. - Иногда нам нужно работать сверхурочно.</p>
          <p><strong>Benefits</strong>: The job comes with good benefits. - Работа идёт с хорошими льготами.</p>
          <p><strong>Colleague</strong>: My colleagues are very supportive. - Мои коллеги очень поддерживают.</p>
          <p><strong>Department</strong>: I work in the IT department. - Я работаю в IT-отделе.</p>
        </div>
      </section>
      <section className="section">
        <h2 className="subHeader">Common Work Questions</h2>
        <ul className="list">
          <li>What is your dream job?</li>
          <li>Do you prefer remote or office work?</li>
          <li>How do you maintain work-life balance?</li>
          <li>What skills are important in your field?</li>
          <li>How do you handle workplace stress?</li>
        </ul>
      </section>
      <section className="section">
        <h2 className="subHeader">English Collocations About Work</h2>
        <p className="paragraph"><strong>Meet deadlines</strong> - успевать к сроку. It's crucial to meet all project deadlines.</p>
        <p className="paragraph"><strong>Submit reports</strong> - подавать отчёты. We submit weekly reports to management.</p>
        <p className="paragraph"><strong>Attend meetings</strong> - посещать встречи. Regular meetings help team coordination.</p>
        <p className="paragraph"><strong>Work overtime</strong> - работать сверхурочно. Sometimes we need to work overtime to finish projects.</p>
        <p className="paragraph"><strong>Handle responsibilities</strong> - справляться с обязанностями. Good employees handle their responsibilities well.</p>
        <p className="paragraph"><strong>Gain experience</strong> - получать опыт. Each project helps you gain valuable experience.</p>
        <p className="paragraph"><strong>Clock in/out</strong> - отмечать начало/конец рабочего дня. Don't forget to clock in when you arrive.</p>
        <p className="paragraph"><strong>Take breaks</strong> - делать перерывы. Regular breaks improve productivity.</p>
      </section>
    </div>
  );
}

export default Work;
import TestCardLink from "../TestCardLink";
import "../styles.css"; // Убедитесь, что стили импортированы

function MixedTestsPage() {
  const tests = [
    {
      link: "/mixed-test-1",
      title: "Mixed test №1",
      icon: "📝",
    },
    {
      link: "/mixed-test-2)", //добавить линк
      title: "Mixed test №2",
      icon: "📊",
    },
    {
        link: "/mixed-test-3", //добавить линк
        title: "Mixed test №3",
        icon: "📑",
      },
    
  ];

  return (
    <div className="lessons-container">
      <h1 className="text-center main-title mb-5">Mixed Tests Page</h1>
      <div className="lessons-grid">
        {tests.map((test, index) => (
          <TestCardLink
            key={index}
            link={test.link}
            text={test.title}
            title={test.title}
            icon={test.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default MixedTestsPage;

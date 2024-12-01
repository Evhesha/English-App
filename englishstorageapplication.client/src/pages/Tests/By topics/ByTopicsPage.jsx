import TestCardLink from "../TestCardLink";

function ByTopicsPage() {
  return (
    <>
      <h1>By topics tests page</h1>
      <div className="card-container">
        <TestCardLink
          link={"/present-simple-test"}
          text={"Present simple"}
          title={"Present simple(1)"}
        ></TestCardLink>
        <TestCardLink
          link={"/past-simple-test"}
          text={"Past simple"}
          title={"Past simple(1)"}
        ></TestCardLink>
        <TestCardLink
          link={"/future-simple-test"}
          text={"Furute simple"}
          title={"Future simple(1)"}
        ></TestCardLink>
        <TestCardLink
          link={"/present-continuous-test"}
          text={"Present continuous"}
          title={"Present continuous(1)"}
        ></TestCardLink>
      </div>
    </>
  );
}

export default ByTopicsPage;

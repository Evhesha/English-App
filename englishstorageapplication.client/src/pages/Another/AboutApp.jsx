import Authors from "../../assets/Authors.jpg"

function AboutApp() {
  return (
    <>
      <h1>About Program</h1>
      <h4>This project was created by Medvedskii Evgenii & Zuhta Kirill from FITR BNTU, 10701222 group</h4>
      <img src={Authors} className="card-img-top" alt="..."></img>
    </>
  );
}

export default AboutApp;

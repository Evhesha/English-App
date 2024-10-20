import ListGroupElement from "../../Components/ListGroupElement/ListGroupElement";
import ToLinkButton from "../../Components/Buttons/ToLinkButton/ToLinkButton";

function AdminPanel() {

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ToLinkButton link="/home" placeholder={"Home"} />
        <h1 style={{ marginLeft: '20px' }}>Admin Panel</h1>
      </div>
      <button className="btn btn-primary">Add user <i class="bi bi-plus-circle"></i></button>
      <p></p>
      <div className="list-group">
        <ListGroupElement name={"Name"} email={"evgenii.medvedskii@yandex.by"} password={"genius228"}/>
        <ListGroupElement name={"Name"} email={"evgenii.medvedskii@yandex.by"} password={"genius228"}/>
        <ListGroupElement name={"Name"} email={"evgenii.medvedskii@yandex.by"} password={"genius228"}/>
      </div>
    </>
  );
}

export default AdminPanel;

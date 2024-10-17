import ListGroupElement from "../../Components/ListGroupElement/ListGroupElement";

function AdminPanel() {

  return (
    <>
      <i className="bi bi-box-arrow-up-left"></i>
      <h1>Admin Panel</h1>
      <button className="btn btn-primary">Add user <i class="bi bi-plus-circle"></i></button>
      <div className="list-group">
        <ListGroupElement name={"Name"} email={"evgenii.medvedskii@yandex.by"} password={"genius228"}/>
        <ListGroupElement name={"Name"} email={"evgenii.medvedskii@yandex.by"} password={"genius228"}/>
        <ListGroupElement name={"Name"} email={"evgenii.medvedskii@yandex.by"} password={"genius228"}/>
      </div>
    </>
  );
}

export default AdminPanel;

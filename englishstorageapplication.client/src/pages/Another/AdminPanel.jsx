import ListGroupElement from "../../Components/ListGroupElement/ListGroupElement";

function AdminPanel() {

  return (
    <>
      <h1>Admin Panel</h1>
      <div className="list-group">
        <ListGroupElement name={"Name"}/>
        <ListGroupElement name={"Name"}/>
        <ListGroupElement name={"Name"}/>

      </div>
    </>
  );
}

export default AdminPanel;

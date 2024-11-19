import "../PopUps/CreateUserPopUp.css";

function ExeptionPopUp({ message, onClose }) {
  return (
    <>
      <div className="popup">
        <div className="popup-content">
          <h3>{message}</h3>
          <button onClick={onClose} type="button" className="btn btn-primary">
            Ok
          </button>
        </div>
      </div>
    </>
  );
}

export default ExeptionPopUp;

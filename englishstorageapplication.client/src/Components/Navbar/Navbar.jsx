import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link className="nav-link px-2" to={"/home"}>Home</Link>
            </li>
            <li>
              <Link className="nav-link px-2" to={"/about-app"}>About</Link>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <Link type="button" className="btn btn-outline-primary me-2" to={"/login"}>Login</Link>
            <Link type="button" className="btn btn-primary" to={"/signUp"}>Sign-Up</Link>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
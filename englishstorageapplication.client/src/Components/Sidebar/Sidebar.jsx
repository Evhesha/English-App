import { Link } from "react-router-dom";
import "../Sidebar/Sidebar.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Sidebar() {
  return (
    <>
      <div className="flex-shrink-0 p-3" style={{ width: "280px" }}>
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="true"
            >
              Lessons
            </button>
            <div className="collapse show" id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <Link to="/present-simple" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Present Simple
                  </Link>
                </li>
                <li>
                  <Link to="/future-simple" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Future Simple
                  </Link>
                </li>
                <li>
                  <Link to="/past-simple" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Past Simple
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              Dictionary
            </button>
            <div className="collapse" id="dashboard-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <Link to="/overview" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    My dictionary
                  </Link>
                </li>
                <li>
                  <Link to="/topics-page" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Themes
                  </Link>
                </li>
                <li>
                  <Link to="/monthly" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                   1000 popular
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              Tests
            </button>
            <div className="collapse" id="orders-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <Link to="/orders/new" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    New
                  </Link>
                </li>
                <li>
                  <Link to="/orders/processed" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Processed
                  </Link>
                </li>
                <li>
                  <Link to="/orders/shipped" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Shipped
                  </Link>
                </li>
                <li>
                  <Link to="/orders/returned" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Returned
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="border-top my-3"></li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#account-collapse"
              aria-expanded="false"
            >
              Account
            </button>
            <div className="collapse" id="account-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <Link to="/account/new" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    New...
                  </Link>
                </li>
                <li>
                  <Link to="/account/profile" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/account/settings" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link to="/account/sign-out" className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;

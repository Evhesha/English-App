import { Link } from "react-router-dom";
import "../Sidebar/Sidebar.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Cookies from "js-cookie";

function Sidebar() {
  const handleLogout = () => { 
    Cookies.remove("token"); // Удаляем токен из куки 
    setAuthorized(false); // Обновляем состояние авторизации
    };

  return (
    <>
      <div className="flex-shrink-0 p-3" style={{ width: "280px" }}>
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <Link
              to="/list-lessons-page"
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0"
            >
              <strong className="large-text">Lessons</strong>
            </Link>
          </li>

          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              <strong className="large-text">Dictionary</strong>
            </button>
            <div className="collapse" id="dashboard-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <Link
                    to="/my-dict-page"
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    My dictionary
                  </Link>
                </li>
                <li>
                  <Link
                    to="/topics-page"
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Topics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/thousamd-popular"
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    100 popular
                  </Link>
                </li>
                <li>
                  <Link
                    to="/words-in-parts"
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Words in parts
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
              <strong className="large-text">Tests</strong>
            </button>
            <div className="collapse" id="orders-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <Link
                    to="/topics-tests"
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    By topics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mixed-tests"
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Mixed
                  </Link>
                </li>
                <li>
                  <Link
                    to="/level-tests"
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    By level
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
              <strong className="large-text">Account</strong>
            </button>
            <div className="collapse" id="account-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <Link
                    to="/profile-page"
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    <i class="bi bi-person-fill"></i>Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account/settings"
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    <i class="bi bi-gear-wide-connected"></i> Settings
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={handleLogout}
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    <i class="bi bi-door-closed"></i> Sign out
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

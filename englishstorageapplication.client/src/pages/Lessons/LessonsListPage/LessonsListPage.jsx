import { Link } from "react-router-dom";

function LessonsListPage() {
  return (
    <>
      <div className="collapse show" id="home-collapse">
        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          <li>
            <Link
              to="/present-simple"
              className="link-body-emphasis d-inline-flex text-decoration-none rounded"
            >
              Present Simple
            </Link>
          </li>
          <li>
            <Link
              to="/future-simple"
              className="link-body-emphasis d-inline-flex text-decoration-none rounded"
            >
              Future Simple
            </Link>
          </li>
          <li>
            <Link
              to="/past-simple"
              className="link-body-emphasis d-inline-flex text-decoration-none rounded"
            >
              Past Simple
            </Link>
          </li>
          <li>
            <Link
              to="/present-continuous"
              className="link-body-emphasis d-inline-flex text-decoration-none rounded"
            >
              Present Continuous
            </Link>
          </li>
          <li>
            <Link
              to="/past-continuous"
              className="link-body-emphasis d-inline-flex text-decoration-none rounded"
            >
              Past Continuous
            </Link>
          </li>
          <li>
            <Link
              to="/present-perfect"
              className="link-body-emphasis d-inline-flex text-decoration-none rounded"
            >
              Present Perfect
            </Link>
          </li>
          <li>
            <Link
              to="/present-perfect-continuous"
              className="link-body-emphasis d-inline-flex text-decoration-none rounded"
            >
              Present Perfect Continuos
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LessonsListPage;

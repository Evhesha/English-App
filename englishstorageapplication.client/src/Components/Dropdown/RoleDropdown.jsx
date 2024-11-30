import { useState } from "react";

function RoleDropdown() {
  const [selectedRole, setSelectedRole] = useState("Dropdown");

  const handleSelectRole = (role) => {
    const confirmChangeRole = window.confirm("Are you sure that you want to chenge role?");
    if (!confirmChangeRole) return;
    setSelectedRole(role);
  };

  return (
    <>
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {selectedRole}
        </button>
        <ul className="dropdown-menu">
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleSelectRole("User")}
            >
              User
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleSelectRole("Teacher")}
            >
              Teacher
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleSelectRole("Admin")}
            >
              Admin
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default RoleDropdown;

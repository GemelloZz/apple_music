import React from "react";
import "./Css/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="mb-5">
          <h2 className="me-2">
            <i class="bi bi-apple"></i> Music
          </h2>
        </li>
        <li className="mb-4">
          <input type="text" placeholder="Cerca" className="form-control bg-dark text-bg-light" />
        </li>
        <li>
          <h2 className="me-2">
            <i class=" text-danger bi bi-house-door"></i> Home
          </h2>
        </li>
        <li>
          <h2>
            <i class=" text-danger bi bi-plus-square"></i> Novità
          </h2>
        </li>
        <li>
          <h2>
            <i class=" text-danger bi bi-broadcast"></i> Radio
          </h2>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

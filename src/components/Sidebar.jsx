import React from "react";
import { BsFillHSquareFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
const Sidebar = ({ setSelectedTab, selectedTab }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 bg-dark"
      style={{ width: "4.5rem" }}
    >
      <a
        href="/"
        className="d-block p-3 link-body-emphasis "
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-original-title="Icon-only"
      >
        <img
          id="plp-asset-card-7721774"
          src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20enable-background%3D%22new%200%200%20512%20512%22%20viewBox%3D%220%200%20512%20512%22%3E%3Cpath%20fill%3D%22%23e0e6e9%22%20d%3D%22M365.055%2C214.561l-67.618-67.618c-6.832-1.647-13.972-2.507-21.314-2.507H92.439%0D%0A%09%09%09%09C41.938%2C144.436%2C1%2C185.374%2C1%2C235.875V419.56c0%2C50.501%2C40.938%2C91.439%2C91.439%2C91.439h183.685c50.501%2C0%2C91.439-40.938%2C91.439-91.439%0D%0A%09%09%09%09V235.875C367.563%2C228.533%2C366.702%2C221.393%2C365.055%2C214.561z%22%2F%3E%3Cpolygon%20fill%3D%22%236e7889%22%20points%3D%22463.188%20116.429%20418.106%20161.511%20367.563%20137.636%20350.488%2093.893%20395.57%2048.811%20439.6%2068.503%22%2F%3E%3Cpath%20fill%3D%22%23fd3f2e%22%20d%3D%22M496.996%2C15.002c18.648%2C18.648%2C18.695%2C48.922%2C0%2C67.617l-33.809%2C33.809L395.57%2C48.811%0D%0A%09%09%09%09l33.809-33.809C448.047-3.666%2C478.328-3.666%2C496.996%2C15.002z%22%2F%3E%3Cpath%20fill%3D%22%2368aef9%22%20d%3D%22M418.106%2C161.511c-7.054%2C7.054-130.393%2C130.393-135.235%2C135.235l-78.88%2C11.263l11.262-78.88%0D%0A%09%09%09%09c4.601-4.601%2C128.264-128.264%2C135.235-135.235L418.106%2C161.511z%22%2F%3E%3Cpath%20fill%3D%22%23c2ced4%22%20d%3D%22M261.578%2C463.186H106.984c-32.076%2C0-58.172-26.096-58.172-58.172V250.421%0D%0A%09%09%09%09c0-32.076%2C26.096-58.172%2C58.172-58.172h37.453c8.802%2C0%2C15.938%2C7.136%2C15.938%2C15.938s-7.136%2C15.938-15.938%2C15.938h-37.453%0D%0A%09%09%09%09c-14.5%2C0-26.297%2C11.796-26.297%2C26.297v154.594c0%2C14.5%2C11.796%2C26.297%2C26.297%2C26.297h154.594c14.5%2C0%2C26.297-11.796%2C26.297-26.297%0D%0A%09%09%09%09v-37.453c0-8.802%2C7.136-15.938%2C15.938-15.938s15.938%2C7.136%2C15.938%2C15.938v37.453C319.75%2C437.091%2C293.654%2C463.186%2C261.578%2C463.186%0D%0A%09%09%09%09z%22%2F%3E%3C%2Fsvg%3E"
          alt="Free Post Writing Edit Tools Icon"
          loading="lazy"
          className="icon_BjQb2"
        />
        <span className="visually-hidden">Icon-only</span>
      </a>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <a
            onClick={() => setSelectedTab("Home")}
            href="#"
            className={`nav-link py-3 border-bottom rounded-0 ${
              selectedTab === "Home" && "active"
            }`}
            aria-current="page"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Home"
            data-bs-original-title="Home"
          >
            <FaHome />
          </a>
        </li>
        <li>
          <a
            onClick={() => setSelectedTab("CreatePost")}
            href="#"
            className={`nav-link py-3 border-bottom rounded-0 ${
              selectedTab === "CreatePost" && "active"
            }`}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Dashboard"
            data-bs-original-title="Dashboard"
          >
            <FiSend />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

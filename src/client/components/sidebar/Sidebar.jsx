import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidenav">
      <div className="sidenav__close-icon">
        <i className="fas fa-times sidenav__brand-close" />
      </div>
      <ul className="sidenav__list">
        <li className="sidenav__list-item">Dashboard</li>
        <li className="sidenav__list-item">Sacco</li>
        <li className="sidenav__list-item">Riders</li>
        <li className="sidenav__list-item">Analytic</li>
        <li className="sidenav__list-item">Settings</li>
      </ul>
    </aside>
  );
};
export default Sidebar;

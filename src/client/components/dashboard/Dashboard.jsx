import React from "react";
import "../../ css/dashboard.css";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

function Dashboard() {
  return (
    <div className="grid-container">
      <div className="menu-icon">
        <i className="fas fa-bars header__menu" />
      </div>
      <Header />
      <Sidebar />
      <main className="main">
        <div className="main-header">
          <div className="main-header__heading">Hello User</div>
          <div className="main-header__updates">Recent Items</div>
        </div>
        <div className="main-overview">
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
        </div>
        <div className="main-cards">
          <div className="card">Card</div>
          <div className="card">Card</div>
          <div className="card">Card</div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__copyright">© 2018 MTH</div>
        <div className="footer__signature">Made with love by pure genius</div>
      </footer>
    </div>
  );
}

export default Dashboard;

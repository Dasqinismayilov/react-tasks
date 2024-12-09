import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./styles.css";
import AboutPage from "./components/AboutPage";
import ContactsPage from "./components/ContactsPage";
import Team from "./components/Team";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Пингвины
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    О нас
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Контакты
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Наша команда
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contacts">
            <ContactsPage />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

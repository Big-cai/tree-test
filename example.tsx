import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Icons from "./lib/Icon/icon-exampe";
import Button from "./lib/Button/button-exampe";
import Dialog from "./lib/Dialog/dialog-example";
import Icon from "./lib/Icon/Icon";
import "./example.scss";
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);


function getHashSearchParam() {
  const url = location.href
  // 获取 hash 值，不包含 '#' 号
  const hash = url.substring(url.indexOf("#/") + 2)
  return hash
}



root.render(
  <Router>
    <div className="contanier">
      <aside className="aside">
        <div className="horizonta">
          <img src="./image/artwork.png" alt="" />
          <span>artwork-elements</span>
        </div>
        <ul id="uls">
          <li>
            <Link to="/icon">artwork-icon</Link>
          </li>
          <li>
            <Link to="/button">artwork-button</Link>
          </li>
          <li>
            <Link to="/dialog">artwork-dialog</Link>
          </li>
          <li>
            <Link to="/dialog">artwork-card</Link>
          </li>
          <li>
            <Link to="/dialog">artwork-checkbox</Link>
          </li>
          <li>
            <Link to="/dialog">artwork-divider</Link>
          </li>
          <li>
            <Link to="/dialog">artwork-icon-button</Link>
          </li>
          <li>
            <Link to="/dialog">artwork-image</Link>
          </li>
          <li>
            <Link to="/dialog">artwork-input</Link>
          </li>
          <li>
            <Link to="/dialog">artwork-link</Link>
          </li>
          <li>
            <Link to="/dialog">artwork-radio</Link>
          </li>
          <li>
            <Link to="/dialog">artwork-textarea</Link>
          </li>
        </ul>
      </aside>

      <main className="main">
        <header className="header">
          <div className="content">artwork-elements</div>
          <Icon name="artwork" className="icon" />
        </header>

        <div id="main">
          <Route path="/icon" component={Icons} />
          <Route path="/button" component={Button} />
          <Route path="/dialog" component={Dialog} />
        </div>
      </main>
    </div>
  </Router>
);

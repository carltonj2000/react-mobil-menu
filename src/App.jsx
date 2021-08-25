import React, { useState } from "react";
import { MenuIcon, XIcon, BeakerIcon } from "@heroicons/react/solid";

import "./App.css";

import rr from "./MVIMG_20190414_072924.jpg";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Leaders", href: "#" },
  { name: "Hikes", href: "#" },
  { name: "Contact", href: "#" },
];

const MenuItems = ({ currentMenu, currentMenuSet }) => (
  <>
    {navigation.map(({ name, href }, i) => (
      <a
        {...{ href, key: i }}
        className={
          "menu-item" + (currentMenu === i ? " menu-item-selected" : "")
        }
        onClick={() => currentMenuSet(i)}
      >
        {name}
      </a>
    ))}
    <button className="take-action">Take Action</button>
  </>
);

function App() {
  const [mobileOpen, mobileOpenSet] = useState(false);
  const [currentMenu, currentMenuSet] = useState(0);
  const toggleMobileOpen = () => mobileOpenSet(!mobileOpen);
  console.log(mobileOpen);
  return (
    <header>
      {/* <img src={rr} className="App-logo" alt="logo" /> */}
      <div className="nav">
        <div className="text">
          <BeakerIcon className="logo" />
          <div className="title">
            <h1 className="title-main">Hike And Scramble Las Vegas</h1>
            <p className="title-sub">for fun, fitness and friendship</p>
          </div>
        </div>
        <div className="menu-full">
          <MenuItems {...{ currentMenu, currentMenuSet }} />
        </div>
        {mobileOpen ? (
          <XIcon className="icon close" onClick={toggleMobileOpen} />
        ) : (
          <MenuIcon className="icon" onClick={toggleMobileOpen} />
        )}
        {mobileOpen && (
          <div className="mobile">
            <MenuItems {...{ currentMenu, currentMenuSet }} />
          </div>
        )}
      </div>
    </header>
  );
}

export default App;

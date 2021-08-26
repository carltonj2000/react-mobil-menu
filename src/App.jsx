import React, { useState } from "react";
import { MenuIcon, XIcon, BeakerIcon } from "@heroicons/react/solid";

import "./App.css";

import rr from "./img/MVIMG_20190414_072924-150x150.jpg";
//import rr from "./img/MVIMG_20190414_072924.jpg";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Leaders", href: "#" },
  { name: "Hikes", href: "#" },
  { name: "Contact", href: "#" },
];

const MenuItems = ({ currentMenu, changeMenu }) => (
  <>
    {navigation.map(({ name, href }, i) => (
      <a
        {...{ href, key: i }}
        className={
          "menu-item" + (currentMenu === i ? " menu-item-selected" : "")
        }
        onClick={() => changeMenu(i)}
      >
        {name}
      </a>
    ))}
    <button className="take-action">Take Action</button>
  </>
);

function App() {
  const [currentMenu, currentMenuSet] = useState(0);
  const [mobileOpen, mobileOpenSet] = useState(false);
  const toggleMobileOpen = () => mobileOpenSet(!mobileOpen);
  const changeMenu = (i) => {
    currentMenuSet(i);
    toggleMobileOpen();
  };

  return (
    <header>
      <div className="nav">
        <div className="text">
          <BeakerIcon className="logo" />
          <div className="title">
            <h1 className="title-main">Hike And Scramble Las Vegas</h1>
            <p className="title-sub">for fun, fitness and friendship</p>
          </div>
        </div>
        <div className="menu-full">
          <MenuItems {...{ currentMenu, changeMenu }} />
        </div>
        {mobileOpen ? (
          <XIcon className="icon close" onClick={toggleMobileOpen} />
        ) : (
          <MenuIcon className="icon" onClick={toggleMobileOpen} />
        )}
        {mobileOpen && (
          <div className="mobile">
            <MenuItems {...{ currentMenu, changeMenu }} />
          </div>
        )}
      </div>
      <div className="img-overlay">
        <img src={rr} className="img" alt="Red Rock" />
      </div>
    </header>
  );
}

export default App;

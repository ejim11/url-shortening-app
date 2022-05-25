import classes from "./Header.module.scss";

import Button from "../UI/Button";

import logo from "../../assets/logo.svg";

import icons from "../../assets/sprite.svg";

import { useState } from "react";

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenuHandler = () => {
    setDisplayMenu((prevState) => !prevState);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <img src={logo} alt="logo" />
      </div>
      <div
        className={`${classes.header__navBox} ${
          displayMenu ? classes.display : classes.hide
        }`}
      >
        <nav className={classes.header__nav}>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </nav>
        <div className={classes.header__logBtn}>
          <Button className={classes["header__logBtn-login"]}>Login</Button>
          <Button className={classes["header__logBtn-signup"]}>Sign up</Button>
        </div>
      </div>
      <svg className={classes.toggler} onClick={toggleMenuHandler}>
        <use
          xlinkHref={`${icons}#icon-${displayMenu ? "cross" : "menu"}`}
        ></use>
      </svg>
    </header>
  );
};

export default Header;

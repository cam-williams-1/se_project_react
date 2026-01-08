import { NavLink } from "react-router-dom";
import { useContext } from "react";
import "./Header.css";
import headerLogo from "../../assets/wtwr.svg";
import userIcon from "../../assets/user.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";

import CurrentUserContext from "../../contexts/CurrentUser.jsx";

function Header({ handleAddClick, weatherData, registerClick, loginClick }) {
  const currentUser = useContext(CurrentUserContext);

  const firstLetter = currentUser?.name?.charAt(0).toUpperCase() || "?";

  const avatarSet = !!currentUser.avatar;

  // checks is user is logged in
  const isLoggedIn = !!currentUser;

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <NavLink to="/">
        <img src={headerLogo} alt="App Logo" className="header__logo" />
      </NavLink>
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      {isLoggedIn ? (
        <>
          <button
            type="button"
            onClick={handleAddClick}
            className="header__add-btn"
          >
            + Add clothes
          </button>
          <NavLink className="header__nav-link" to="/profile">
            <div className="header__user">
              <p className="header__user_name">Hello, {currentUser.name}!</p>
              <img
                src={avatarSet ? userIcon : firstLetter}
                alt="User Icon"
                className="header__user_icon"
              />
            </div>
          </NavLink>
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={registerClick}
            className="header__signup"
          >
            Sign Up
          </button>
          <button type="button" onClick={loginClick} className="header__login">
            Log In
          </button>
        </>
      )}
    </header>
  );
}

export default Header;

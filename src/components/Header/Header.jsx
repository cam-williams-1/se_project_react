import { NavLink } from "react-router-dom";
import { useContext } from "react";
import "./Header.css";
import headerLogo from "../../assets/wtwr.svg";
import userIcon from "../../assets/user.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

import CurrentUserContext from "../../contexts/CurrentUser.jsx";

function Header({
  handleAddClick,
  weatherData,
  handleRegisterClick,
  loginClick,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  const userName = currentUser?.name;

  const firstLetter = currentUser?.name?.charAt(0).toUpperCase() || "";

  const avatarSet = !!currentUser?.avatar;

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__left">
        <NavLink to="/">
          <img src={headerLogo} alt="App Logo" className="header__logo" />
        </NavLink>
        <p className="header__date-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__right">
        <ToggleSwitch isLoggedIn={isLoggedIn} />
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
                <p className="header__user_name">Hello, {userName}!</p>
                <img
                  src={avatarSet ? currentUser.avatar : firstLetter}
                  alt="User Icon"
                  className="header__user_icon"
                />
              </div>
            </NavLink>
          </>
        ) : (
          <div className="header__not-signed-in">
            <button
              type="button"
              onClick={handleRegisterClick}
              className="header__signup"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={loginClick}
              className="header__login"
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

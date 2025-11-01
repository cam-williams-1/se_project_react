import { NavLink } from "react-router-dom";
import "./Header.css";
import headerLogo from "../../assets/wtwr.svg";
import userIcon from "../../assets/user.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
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
      <button
        type="button"
        onClick={handleAddClick}
        className="header__add-btn"
      >
        + Add clothes
      </button>
      <NavLink className="header__nav-link" to="/profile">
        <div className="header__user">
          <p className="header__user_name">user name</p>
          <img src={userIcon} alt="User Icon" className="header__user_icon" />
        </div>
      </NavLink>
    </header>
  );
}

export default Header;

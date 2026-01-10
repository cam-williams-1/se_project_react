import { useContext } from "react";
import "./SideBar.css";
import userIcon from "../../assets/user.svg";

import CurrentUserContext from "../../contexts/CurrentUser";

// TODO - set up variable user names with API

export default function SideBar({ onEditProfile, handleLogout }) {
  const currentUser = useContext(CurrentUserContext);
  const userName = currentUser?.name;

  return (
    <aside className="sidebar">
      <div className="sidebar__user">
        <img src={userIcon} alt="User Icon" className="sidebar__user_icon" />
        <p className="sidebar__user_name">{userName}</p>
      </div>
      <div className="siderbar__btns">
        <button className="sidebar__profile_btn" onClick={onEditProfile}>
          Change Profile Data
        </button>
        <button
          type="button"
          onClick={handleLogout}
          className="sidebar__logout_btn"
        >
          Log Out
        </button>
      </div>
    </aside>
  );
}

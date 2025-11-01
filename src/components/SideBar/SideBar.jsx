import "./SideBar.css";
import userIcon from "../../assets/user.svg";

// TODO - set up variable user names with API

export default function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__user">
        <img src={userIcon} alt="User Icon" className="sidebar__user_icon" />
        <p className="sidebar__user_name">user name</p>
      </div>
    </aside>
  );
}

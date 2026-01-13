import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";
import "./ToggleSwitch.css";

function ToggleSwitch({ isLoggedIn }) {
  const { handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className={isLoggedIn ? "toggle-switch" : "toggle-switch-right"}>
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle-switch__checkbox"
      />
      <span className="toggle-switch__circle"></span>
      <span className="toggle-switch__txt toggle-switch__txt_F">F</span>
      <span className="toggle-switch__txt toggle-switch__txt_C">C</span>
    </label>
  );
}

export default ToggleSwitch;

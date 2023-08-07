import { themes } from "../data";
import { FaCog } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";
import "./themes.css";
import ThemeItem from "./ThemeItem";

function Themes() {
  return (
    <div>
      <div className="style__switcher">
        <div className="style__switcher-toggler">
          <FaCog />
        </div>

        <div className="theme__toggler">
          <BsMoon />
        </div>

        <h3 className="style__switcher-title">Style Switcher</h3>
        <div className="style__switcher-items">
          {themes.map((theme, index) => {
            return <ThemeItem key={index} {...theme} />;
          })}
        </div>

        <div className="style__switcher-close">&times;</div>
      </div>
    </div>
  );
}

export default Themes;

// import { NavLink } from "react-router-dom";
import style from "./Heder.module.css";
import clsx from "clsx";

const Heder = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(style.navLink, isActive && style.navLinkActive);
  };
  return (
    <div className={style.container}>
      <h2>Events</h2>
      {/* <NavLink className={buildLinkClass} to="/events">
        Events
      </NavLink> */}
    </div>
  );
};

export default Heder;

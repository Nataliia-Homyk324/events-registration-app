import { NavLink } from "react-router-dom";
import style from "./Heder.module.css";
import clsx from "clsx";

const Heder = () => {
  return (
    <div className={style.container}>
      <NavLink className={style.NavLink} to="/">
        Events
      </NavLink>
    </div>
  );
};

export default Heder;

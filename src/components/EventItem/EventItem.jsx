import style from "./EventItem.module.css";
import { Link } from "react-router-dom";

export default function EventItem({ title, description }) {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h4 className={style.title}>{title}</h4>
        <p className={style.text}>{description}</p>
      </div>
      <div className={style.nav}>
        <Link to={`/register`} className={style.link}>
          Register
        </Link>
        <Link to={`/users`} className={style.link}>
          View
        </Link>
      </div>
    </div>
  );
}

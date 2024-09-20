import style from "./UserItem.module.css";

export default function UserItem({ fullName, email }) {
  return (
    <div className={style.container}>
      <h5 className={style.title}>{fullName}</h5>
      <p className={style.text}>{email}</p>
    </div>
  );
}

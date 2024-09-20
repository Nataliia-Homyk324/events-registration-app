import UserItem from "../UserItem/UserItem.jsx";
import style from "./UsersList.module.css";

const UsersList = ({ users }) => {
  return (
    <div className={style.usersList}>
      {users.map((user) => (
        <UserItem key={user._id} fullName={user.fullName} email={user.email} />
      ))}
    </div>
  );
};

export default UsersList;

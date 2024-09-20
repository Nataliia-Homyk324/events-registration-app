import style from "./UsersPage.module.css";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader.jsx";
import axios from "axios";
import UsersList from "../../components/UsersList/UsersList.jsx";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Функція для отримання подій
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://eventsapi-knwi.onrender.com/users"
        );
        setUsers(response.data.data.data);
      } catch (error) {
        console.log(error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className={style.container}>
      <h2 className={style.title}> ``Awesome Event`` participans</h2>
      {loading && <Loader />}
      {error && <p>Sorry, we have not found the events for your request</p>}
      <UsersList users={users} />
    </div>
  );
};
export default UsersPage;

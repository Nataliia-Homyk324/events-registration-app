import style from "./UsersPage.module.css";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader.jsx";
import axios from "axios";
import UsersList from "../../components/UsersList/UsersList.jsx";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={style.UsersPage}>
      <div className={style.search}>
        <h2 className={style.title}>Users</h2>

        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchChange}
          className={style.searchInput}
        />
      </div>

      {loading && <Loader />}
      {error && <p>Error loading users</p>}
      {!loading && !error && <UsersList users={filteredUsers} />}
    </div>
  );
};

export default UsersPage;

import style from "./EventsPage.module.css";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader.jsx";
import axios from "axios";
import EventsList from "../../components/EventsList/EventsList.jsx";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchEvents = async (currentPage) => {
      try {
        const response = await axios.get(
          `https://eventsapi-knwi.onrender.com/events?page=${currentPage}&perPage=5`
        );
        const { data, totalPages, hasNextPage } = response.data.data;

        setEvents(data);
        setHasNextPage(hasNextPage);
        setTotalPages(totalPages);
      } catch (error) {
        console.log(error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents(page);
  }, [page]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (hasNextPage && page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className={style.container}>
      {loading && <Loader />}
      {error && <p>Sorry, we have not found the events for your request</p>}

      <EventsList events={events} />

      <div className={style.pagination}>
        <button
          className={style.prevButton}
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          Prev
        </button>

        <button
          className={style.nextButton}
          onClick={handleNextPage}
          disabled={!hasNextPage || page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EventsPage;

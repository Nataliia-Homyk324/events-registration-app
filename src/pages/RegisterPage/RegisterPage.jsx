import style from "./RegisterPage.module.css";
import { useRef } from "react";
import axios from "axios";

const RegisterPage = () => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const dateOfBirthRef = useRef(null);
  const heardAboutEventRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    //  дані з полів форми
    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const dateOfBirth = dateOfBirthRef.current.value;
    const heardAboutEvent = heardAboutEventRef.current.value;

    if (!fullName || !email || !dateOfBirth || !heardAboutEvent) {
      alert("Please fill in all the fields");
      return;
    }

    //  об'єкт з даними для відправки
    const userData = {
      fullName,
      email,
      dateOfBirth,
      heardAboutEvent,
    };

    try {
      const response = await axios.post(
        "https://eventsapi-knwi.onrender.com/users",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Success:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting the form.");
    }
  };
  return (
    <div className={style.container}>
      <h1>Event Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.group}>
          <label className={style.label} htmlFor="fullName">
            Full name:
          </label>
          <input
            className={style.input}
            type="text"
            id="fullName"
            ref={fullNameRef}
          />
        </div>

        <div className={style.group}>
          <label className={style.label} htmlFor="email">
            Email:
          </label>
          <input
            className={style.input}
            type="email"
            id="email"
            ref={emailRef}
          />
        </div>

        <div className={style.group}>
          <label className={style.label} htmlFor="dateOfBirth">
            Date of birth:
          </label>
          <input
            className={style.input}
            type="date"
            id="dateOfBirth"
            ref={dateOfBirthRef}
          />
        </div>

        <div className={style.group}>
          <label className={style.label}>
            Where did you hear about this event?
          </label>
          <div className={style.radio}>
            <div>
              <input
                type="radio"
                id="socialMedia"
                name="heardAboutEvent"
                value="Social Media"
                ref={heardAboutEventRef}
              />
              <label htmlFor="socialMedia">Social Media</label>
            </div>
            <div>
              <input
                type="radio"
                id="friend"
                name="heardAboutEvent"
                value="Friend"
                ref={heardAboutEventRef}
              />
              <label htmlFor="friend">Friend</label>
            </div>
            <div>
              <input
                type="radio"
                id="foundMyself"
                name="heardAboutEvent"
                value="Found myself"
                ref={heardAboutEventRef}
              />
              <label htmlFor="foundMyself">Found myself</label>
            </div>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;

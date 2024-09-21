import style from "./RegisterPage.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      dateOfBirth: "",
      heardAboutEvent: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      dateOfBirth: Yup.date().required("Date of birth is required"),
      heardAboutEvent: Yup.string().required("Please select an option"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://eventsapi-knwi.onrender.com/users",
          values,
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
    },
  });

  return (
    <div className={style.container}>
      <h1>Event Registration</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className={style.group}>
          <label className={style.label} htmlFor="fullName">
            Full name:
          </label>
          <input
            className={style.input}
            type="text"
            id="fullName"
            name="fullName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className={style.error}>{formik.errors.fullName}</div>
          ) : null}
        </div>

        <div className={style.group}>
          <label className={style.label} htmlFor="email">
            Email:
          </label>
          <input
            className={style.input}
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={style.error}>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className={style.group}>
          <label className={style.label} htmlFor="dateOfBirth">
            Date of birth:
          </label>
          <input
            className={style.input}
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfBirth}
          />
          {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
            <div className={style.error}>{formik.errors.dateOfBirth}</div>
          ) : null}
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="socialMedia">Social Media</label>
            </div>
            <div>
              <input
                type="radio"
                id="friend"
                name="heardAboutEvent"
                value="Friend"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="friend">Friend</label>
            </div>
            <div>
              <input
                type="radio"
                id="foundMyself"
                name="heardAboutEvent"
                value="Found myself"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="foundMyself">Found myself</label>
            </div>
          </div>
          {formik.touched.heardAboutEvent && formik.errors.heardAboutEvent ? (
            <div className={style.error}>{formik.errors.heardAboutEvent}</div>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;

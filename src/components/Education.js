import React from "react";
import education from "../styles/education.css";

export default function Education(props) {
  function handleEducationSubmit(e) {
    e.preventDefault();
    setShow((oldShow) => {
      return { elements: !oldShow.elements, form: !oldShow.form };
    });
  }

  // Setting state to have control over showing either the form, or the
  // HTML elements with the info from the form on them.
  const [show, setShow] = React.useState({ elements: false, form: true });

  return (
    <section>
      <div
        className="educationElements"
        style={show.elements ? { display: "" } : { display: "none" }}
      >
        <h3 className="schoolText">School: {props.school}</h3>
        <h3 className="educationTitleText">Title: {props.title}</h3>
        <h4 className="educationDateFrom">From: {props.dateFrom}</h4>
        <h4 className="educationDateTo">To: {props.dateTo}</h4>
        <button className="editEducation" onClick={handleEducationSubmit}>
          Edit education
        </button>
      </div>

      {/*FORM BEGINS */}

      <form
        onSubmit={handleEducationSubmit}
        className="education-container"
        style={show.form ? { display: "" } : { display: "none" }}
      >
        <h2 className="title"> Education </h2>
        <label htmlFor="school">
          <input
            className="school"
            onChange={props.handleChange}
            placeholder="School name"
          ></input>
        </label>
        <label htmlFor="title">
          <input
            className="educationTitle"
            onChange={props.handleChange}
            placeholder="Title"
          ></input>
        </label>
        <label className="date" htmlFor="education-date">
          From
          <input
            className="dateFrom"
            onChange={props.handleChange}
            type="date"
          ></input>
          To
          <input
            className="dateTo"
            onChange={props.handleChange}
            type="date"
          ></input>
        </label>
        <button className="education-submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

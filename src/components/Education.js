import React from "react";
import education from "../styles/education.css";

export default function Education(props) {
  function handleEducationSubmit(e) {
    e.preventDefault();
    console.log("edu lol");
  }

  return (
    <section>
      <form onSubmit={handleEducationSubmit} className="education-container">
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

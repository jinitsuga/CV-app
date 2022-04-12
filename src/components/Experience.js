import React from "react";
import experience from "../styles/experience.css";

export default function Experience(props) {
  function handleExperienceSubmit(e) {
    e.preventDefault();
    console.log("xp lol");
  }
  return (
    <section>
      <form onSubmit={handleExperienceSubmit} className="education-container">
        <h2 className="title"> Experience </h2>
        <label htmlFor="company">
          <input
            className="company"
            onChange={props.handleChange}
            placeholder="Company name"
          ></input>
        </label>
        <label htmlFor="position">
          <input
            className="position"
            onChange={props.handleChange}
            placeholder="Position"
          ></input>
        </label>
        <label htmlFor="tasks">
          <input
            className="tasks"
            onChange={props.handleChange}
            placeholder="Job tasks"
          ></input>
        </label>
        <label className="date" htmlFor="job-date">
          From
          <input
            className="fromDate"
            onChange={props.handleChange}
            type="date"
          ></input>
          To
          <input
            className="toDate"
            onChange={props.handleChange}
            type="date"
          ></input>
        </label>
        <button className="experience-submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

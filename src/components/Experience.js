import React from "react";
import experience from "../styles/experience.css";

export default function Experience(props) {
  function handleExperienceSubmit(e) {
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
        className="expElements"
        style={show.elements ? { display: "" } : { display: "none" }}
      >
        <h3 className="companyTitle">Company: {props.company}</h3>
        <h3 className="expPosition">Position: {props.position}</h3>
        <h3 className="expTasks">Job tasks: {props.tasks}</h3>
        <h4 className="expDateFrom">From: {props.fromDate}</h4>
        <h4 className="expDateTo">To: {props.toDate}</h4>
        <button className="editExperience" onClick={handleExperienceSubmit}>
          Edit experience
        </button>
      </div>

      {/*FORM BEGINS */}
      <form
        onSubmit={handleExperienceSubmit}
        className="education-container"
        style={show.form ? { display: "" } : { display: "none" }}
      >
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

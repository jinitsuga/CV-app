import React from "react";
import education from "../styles/education.css";

export default function Education() {
  function handleEducationSubmit(e) {
    e.preventDefault();
    console.log("edu lol");
  }

  return (
    <section>
      <form onSubmit={handleEducationSubmit} className="education-container">
        <h2 className="title"> Education </h2>
        <label htmlFor="school">
          <input className="school" placeholder="School name"></input>
        </label>
        <label htmlFor="title">
          <input className="education-title" placeholder="Title"></input>
        </label>
        <label className="date" htmlFor="education-date">
          From
          <input className="from-date" type="date"></input>
          To
          <input className="to-date" type="date"></input>
        </label>
        <button className="education-submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

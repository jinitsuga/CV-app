import React from "react";
import general from "../styles/general.css";

export default function General() {
  function handleGeneralSubmit(e) {
    e.preventDefault();
    console.log("haha lmao");
  }

  return (
    <section>
      <form onSubmit={handleGeneralSubmit} className="general-container">
        <h2 className="title">General information</h2>
        <label htmlFor="name">
          <input className="name" placeholder="Name"></input>
        </label>
        <label htmlFor="email">
          <input className="email" placeholder="Email"></input>
        </label>
        <label htmlFor="phone">
          <input className="phone" placeholder="Phone number"></input>
        </label>
        <button className="general-submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

import React from "react";
import general from "../styles/general.css";

export default function General(props) {
  function handleGeneralSubmit(e) {
    e.preventDefault();
    setShow((oldShow) => {
      return { elements: !oldShow.elements, form: !oldShow.form };
    });
    console.log("haha lmao");
  }

  // Setting state to have control over showing either the form, or the
  // HTML elements with the info from the form on them.

  const [show, setShow] = React.useState({ elements: false, form: true });

  return (
    <section>
      <div
        className="generalElements"
        style={show.elements ? { display: "" } : { display: "none" }}
      >
        <h3 className="infoName">Name: {props.name}</h3>
        <h3 className="infoEmail">Email: {props.email}</h3>
        <h3 className="infoPhone">Phone number: {props.phone}</h3>
        <button className="editInfo" onClick={handleGeneralSubmit}>
          Edit info
        </button>
      </div>

      {/*FORM BEGINS */}

      <form
        onSubmit={handleGeneralSubmit}
        className="general-container"
        style={show.form ? { display: "" } : { display: "none" }}
      >
        <h2 className="title">General information</h2>
        <label htmlFor="name">
          <input
            onChange={props.handleChange}
            className="name"
            placeholder="Name"
          ></input>
        </label>
        <label htmlFor="email">
          <input
            className="email"
            onChange={props.handleChange}
            placeholder="Email"
          ></input>
        </label>
        <label htmlFor="phone">
          <input
            className="phone"
            onChange={props.handleChange}
            placeholder="Phone number"
          ></input>
        </label>
        <button className="general-submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

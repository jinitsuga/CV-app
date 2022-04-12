import React from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import app from "./styles/app.css";

function App() {
  return (
    <div className="App">
      <General />
      <Education />
      <Experience />
    </div>
  );
}

export default App;

import React from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import app from "./styles/app.css";

function App() {
  // State for the 3 different components

  const [generalInfo, setGeneralInfo] = React.useState({
    name: "",
    email: "",
    phone: "",
  });
  const [education, setEducation] = React.useState({
    school: "",
    educationTitle: "",
    dateFrom: "",
    dateTo: "",
  });
  const [experience, setExperience] = React.useState({
    company: "",
    position: "",
    tasks: "",
    fromDate: "",
    toDate: "",
  });

  // State handler functions for each section of the form

  function handleGeneralInfo(e) {
    setGeneralInfo((oldInfo) => {
      const field = e.target.className;
      return { ...oldInfo, [field]: e.target.value };
    });
  }

  function handleEducation(e) {
    setEducation((oldEducation) => {
      const field = e.target.className;
      return { ...oldEducation, [field]: e.target.value };
    });
  }
  function handleExperience(e) {
    setExperience((oldExp) => {
      const field = e.target.className;
      return { ...oldExp, [field]: e.target.value };
    });
  }

  return (
    <div className="App">
      <General
        handleChange={handleGeneralInfo}
        name={generalInfo.name}
        email={generalInfo.email}
        phone={generalInfo.phone}
      />
      <Education
        handleChange={handleEducation}
        school={education.school}
        title={education.educationTitle}
        dateFrom={education.dateFrom}
        dateTo={education.dateTo}
      />
      <Experience
        handleChange={handleExperience}
        company={experience.company}
        position={experience.position}
        tasks={experience.tasks}
        fromDate={experience.fromDate}
        toDate={experience.toDate}
      />
    </div>
  );
}

export default App;

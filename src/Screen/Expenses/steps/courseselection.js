import React, { useState } from "react";

const CourseSelection = ({ onExpenseChange }) => {
  const [mycourse, setmycourse] = useState("");

  const handleCourseChange = (selectedCourse) => {
    setmycourse(selectedCourse);

    let expense = 0;
    if (selectedCourse === "management") {
      expense = 750;
    } else if (selectedCourse === "computerScience") {
      expense = 1000;
    } else if (selectedCourse === "appliedScience") {
      expense = 850;
    } else if (selectedCourse === "engineeringTech") {
      expense = 1200;
    } else if (selectedCourse === "communicationJournalism") {
      expense = 700;
    } else if (selectedCourse === "artsHumanity") {
      expense = 750;
    } else if (selectedCourse === "law") {
      expense = 850;
    }

    onExpenseChange(expense);
  };

  return (
    <div className=" p-1">
      <p className="fw-bold">Which course you want to pursue abroad?</p>

      <div
        onClick={() => handleCourseChange("management")}
        className={
          mycourse === "management" ? "selected" : "  border rounded p-3 mb-4 "
        }
        style={{ cursor: "pointer" }}
      >
        Management
      </div>
      <div
        onClick={() => handleCourseChange("computerScience")}
        className={
          mycourse === "computerScience" ? "selected" : "  border rounded p-3 mb-4 "
        }
        style={{ cursor: "pointer" }}
      >
        Computer Science
      </div>
      <div
        onClick={() => handleCourseChange("appliedScience")}
        className={
          mycourse === "appliedScience" ? "selected" : "  border rounded p-3 mb-4 "
        }
        style={{ cursor: "pointer" }}
      >
        Applied Science
      </div>
      <div
        onClick={() => handleCourseChange("engineeringTech")}
        className={
          mycourse === "engineeringTech" ? "selected" : "  border rounded p-3 mb-4 "
        }
        style={{ cursor: "pointer" }}
      >
        Engineering & Technology
      </div>
      <div
        onClick={() => handleCourseChange("communicationJournalism")}
        className={
          mycourse === "communicationJournalism" ? "selected" : "  border rounded p-3 mb-4 "
        }
        style={{ cursor: "pointer" }}
      >
        Communication & Journalism
      </div>
      <div
        onClick={() => handleCourseChange("artsHumanity")}
        className={
          mycourse === "artsHumanity" ? "selected" : "  border rounded p-3 mb-4 "
        }
        style={{ cursor: "pointer" }}
      >
        Arts and Humanities
      </div>
      <div
        onClick={() => handleCourseChange("law")}
        className={
          mycourse === "law" ? "selected" : "  border rounded p-3 "
        }
        style={{ cursor: "pointer" }}
      >
        Law
      </div>
    </div>
  );
};

export default CourseSelection;

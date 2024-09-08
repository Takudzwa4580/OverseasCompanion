import React, { useState } from "react";

const EducationLevel = ({ onExpenseChange }) => {
  const [educationLevel, setEducationLevel] = useState("");

  const handleEducationLevelChange = (level) => {
    setEducationLevel(level);

    let expense = 0;
    if (level === "undergraduate") {
      expense = 0;
    } else if (level === "postgraduate") {
      expense = 200;
    }

    onExpenseChange(expense);
  };

  return (
    <div className="p-1">
      <p className="fw-bold">What level of education you wish to pursue?</p>

      <div
        className={educationLevel === "undergraduate" ? "selected" : "border rounded  p-3 mb-4"}
        style={{cursor: 'pointer',}}
        onClick={() => handleEducationLevelChange("undergraduate")}
      >
        Undergraduate
      </div>

      <div
        className={educationLevel === "postgraduate" ? "selected" : "  border rounded p-3 "}
        style={{cursor: 'pointer',}}
        onClick={() => handleEducationLevelChange("postgraduate")}
      >
        Postgraduate
      </div>
    </div>
  );
};

export default EducationLevel;

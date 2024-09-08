import React, { useState } from "react";

const Accommodation = ({ onExpenseChange }) => {
  const [rental, setrental] = useState("");

  const handleAccomodationChange = (accomo) => {
    setrental(accomo);

    let expense = 0;
    if (accomo === "oncampus") {
      expense = 1100;
    } else if (accomo === "offcampus") {
      expense = 850;
    }

    onExpenseChange(expense);
  };

  return (
    <div className="p-1">
      <p className="fw-bold">Select your preferred Accommodation type</p>

      <div
        className={rental === "oncampus" ? "selected" : "border rounded  p-3 mb-4"}
        style={{cursor: 'pointer',}}
        onClick={() => handleAccomodationChange("oncampus")}
      >
        On Campus
      </div>

      <div
        className={rental === "offcampus" ? "selected" : "  border rounded p-3 "}
        style={{cursor: 'pointer',}}
        onClick={() => handleAccomodationChange("offcampus")}
      >
       Off Campus
      </div>
    </div>
  );
};

export default Accommodation;

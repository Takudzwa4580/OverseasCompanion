import React, { useState } from "react";

const FunActivities = ({ onExpenseChange }) => {
  const [activity, setactivity] = useState("");

  const handleAccomodationChange = (fun) => {
    setactivity(fun);

    let expense = 0;
    if (fun === "movies") {
        expense = 40;
    } else if (fun === "wifi") {
        expense = 20;
    } else {
        expense = 50;
    }

    onExpenseChange(expense);
  };

  return (
    <div className="p-1">
      <p className="fw-bold">Select the activities you wish to follow.</p>

      <div
        className={activity === "movies" ? "selected" : "border rounded  p-3 mb-4"}
        style={{cursor: 'pointer',}}
        onClick={() => handleAccomodationChange("movies")}
      >
        Movies
      </div>

      <div
        className={activity === "wifi" ? "selected" : "  border rounded p-3  mb-4"}
        style={{cursor: 'pointer',}}
        onClick={() => handleAccomodationChange("wifi")}
      >
        Wifi
      </div>
      <div
        className={activity === "gym" ? "selected" : "  border rounded p-3 "}
        style={{cursor: 'pointer',}}
        onClick={() => handleAccomodationChange("gym")}
      >
       Gym
      </div>
    </div>
  );
};

export default FunActivities;

import React, { useState } from "react";

const Food = ({ onExpenseChange }) => {
  const [meal, setmeal] = useState("");

  const handleAccomodationChange = (foody) => {
    setmeal(foody);

    let expense = 0;
    if (foody === "mealplan") {
        expense = 300;
    } else if (foody === "eatoutside") {
        expense = 400;
    } else {
        expense = 150;
    }

    onExpenseChange(expense);
  };

  return (
    <div className="p-1">
      <p className="fw-bold">How will you manage your food?</p>

      <div
        className={meal === "mealplan" ? "selected" : "border rounded  p-3 mb-4"}
        style={{cursor: 'pointer',}}
        onClick={() => handleAccomodationChange("mealplan")}
      >
        Meal Plan
      </div>

      <div
        className={meal === "eatoutside" ? "selected" : "  border rounded p-3  mb-4"}
        style={{cursor: 'pointer',}}
        onClick={() => handleAccomodationChange("eatoutside")}
      >
     Eat Outside
      </div>
      <div
        className={meal === "cook" ? "selected" : "  border rounded p-3 "}
        style={{cursor: 'pointer',}}
        onClick={() => handleAccomodationChange("cook")}
      >
       Cook on your own
      </div>
    </div>
  );
};

export default Food;

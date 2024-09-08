import React, { useState } from "react";

const Transport = ({ onExpenseChange }) => {
  const [trans, settrans] = useState("");

  const handleAccomodationChange = (move) => {
    settrans(move);

    let expense = 0;
    if (move === "publictransport") {
        expense = 80;
    } else if (move === "taxi") {
        expense = 100;
    } else {
        expense = 30;
    }

    onExpenseChange(expense);
  };

  return (
    <div className="p-1">
      <p className="fw-bold">Select your preferred mode of transport?</p>

      <div
        className={trans === "publictransport" ? "selected" : "border rounded  p-3 mb-4"}
        style={{cursor: 'pointer',}}
        onClick={() => handleAccomodationChange("publictransport")}
      >
        Public Transport
      </div>

      <div
        className={trans === "taxi" ? "selected" : "  border rounded p-3  mb-4"}
        style={{cursor: 'pointer',}}
        onClick={() => handleAccomodationChange("taxi")}
      >
        Taxi(Uber/Ola)
      </div>
      <div
        className={trans === "walking" ? "selected" : "  border rounded p-3 "}
        style={{cursor: 'pointer',}}
        onClick={() => handleAccomodationChange("walking")}
      >
       Walking/ Cycling(Bikes)
      </div>
    </div>
  );
};

export default Transport;

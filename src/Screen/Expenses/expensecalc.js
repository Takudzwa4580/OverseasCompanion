import React from "react";
import Navbar from "../Navbar";
import Expenseanime from "../images/Expenseanime.png";
import OptionMainScreen from "./steps/optionsmainscreen";

function ExpenseCalc({ Toggle }) {
  return (
    <div>
      <Navbar Toggle={Toggle} />
      <div className="rounded  p-4 d-flex flex-column align-items-center">
        <div className="col-10 bg-primary bg-gradient rounded p-3 mb-4 d-flex justify-content-between">
          <h2 className="text-white m-4">Expense Calculator</h2>

          <div className="bg-white rounded p-2 d-flex  align-items-center">
            <p className="fw-light">
              When choosing to study abroad , you may struggle with estimating
              the total cost . Now, say goodbye to the hassle of manually
              calculating expenses and explore effortless budgeting with
              Overseas Companion`s expense calculator.
            </p>
            <img src={Expenseanime} style={{ maxWidth: "200px" }} alt="view of exp"/>
          </div>
        </div>

        <div className=" col-lg-6 rounded bg-white shadow">
          <OptionMainScreen/>
        </div>
      </div>
    </div>
  );
}

export default ExpenseCalc;

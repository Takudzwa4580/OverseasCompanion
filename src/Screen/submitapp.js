import React from "react";
import Navbar from "./Navbar";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

function SubmitApp({ Toggle }) {
  return (
    <div>
      <Navbar Toggle={Toggle} />
      <div className="d-flex flex-column">
        <div className="bg-success text-center text-white py-5 ">
          <IoIosCheckmarkCircleOutline
            className="my-3"
            style={{ fontSize: "150px" }}
          />
          <h2>Submitted!</h2>
        </div>
        <div className="bg-white p-4 d-flex flex-column justify-content-between">
          <h1 className="text-primary">Congratulations!</h1>
          <br />
          <h6>Your application for has been successfully submitted.</h6>
          <br />
          <h6>
            Thank you for taking this important step towards your academic
            journey. Our admissions team will now carefully review your
            application.
            <br /> Best of luck, and we will be in touch soon with further
            updates!"
          </h6>
          <br />

          <h6>
            You can review the status of your Applications in the
            <Link>Myapplications</Link>.
          </h6>
          <br />
          <div className="d-flex justify-content-end py-4">
            <button className="btn btn-lg btn-white border-dark mx-3">
              🎉 Celebrate
            </button>
            <Link to="/myapplications">
              <button className="btn btn-lg btn-success">
                Proceed to Myapplications
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitApp;

import React from "react";
import { Link } from "react-router-dom";
import brand from "./images/brand.png";
import {
  BsFillClipboardMinusFill,
  BsFillHouseDashFill,
  BsFillFileEarmarkMedicalFill,
  BsFillPatchQuestionFill,
} from "react-icons/bs";

function Sidebar() {
  return (
    <div className=" d-flex justify-content-between flex-column bg-white text-dark py-1 ps-1 pe-1 vh-100 ">
      <div>
        <div>
          <div className="nav-item py-4  ">
            <Link  to="/" className="nav-link">
              <img
                className="img-fluid "
                alt=""
                src={brand}
                style={{
                  width: "50px",
                  height: "38px",
                }}
              />
              <span className="fw-bold text-dark fs-5 ">
                Overseas Companion.
              </span>
            </Link>
          </div>
        </div>
        <ul className="navbar-nav  flex-column text-dark">
        <li className="nav-item px-3">
            <Link to="/Newapplication" className="nav-link ">
              <button className="btn btn-primary">+ New Application</button>
            </Link>
          </li>
          <li className="nav-item px-3 ">
            <Link to="/" className="nav-link ">
              <BsFillHouseDashFill className="me-2 text-dark" />
              <span>Dashboard</span>
            </Link>
          </li>
         
          <li className="nav-item px-3 ">
            <Link to="/Myapplications" className="nav-link ">
              <BsFillFileEarmarkMedicalFill className="me-2 text-dark" />
              <span>My Applications</span>
            </Link>
          </li>
          <hr />
          
          <li className="nav-item px-3">
            <Link to="/ExpenseCalc" className="nav-link ">
              <BsFillPatchQuestionFill className="me-2 text-dark" />
              <span className="">Expense Calculator</span>
            </Link>
          </li>
          <li className="nav-item px-3">
            <Link  className="nav-link ">
              <BsFillClipboardMinusFill className="me-2  text-dark" />
              <span>Overseas Gallery</span>
            </Link>
          </li>
         
          <li className="nav-item px-3">
            <Link to="/Faqs" className="nav-link ">
              <BsFillPatchQuestionFill className="me-2 text-dark" />
              <span className="">Faqs</span>
            </Link>
          </li>
          <hr />
        </ul>
      </div>
      <div className="nav-item text-white rounded mx-3 my-3 py-3 bg-dark  bg-gradient text-center">
        <span className=" text-white fw-bold "> Help Center</span>
        <p className="">
          {" "}
          Having any trouble ?<br /> please contact 
          us for<br /> more questions
        </p>
        <button className="btn btn-light"> Go to help center</button>
      </div>
    </div>
  );
}
export default Sidebar;

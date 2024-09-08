import React from "react";
import Navbar from "./Navbar";
import { BsPersonCircle } from "react-icons/bs";

function ProfileSettings({ Toggle }) {
  return (
    <div className="">
      <Navbar Toggle={Toggle} />
      <div className="rounded bg-white m-5 p-3">
        <div className="d-flex">
          <BsPersonCircle  className="m-2 fs-1 text-primary" />
          <div className="">
            <h3 className="fw-bold"> Takudzwa Mumvanga</h3>
            <p>takudzwa4580@gmail.com</p>
            <button className="btn btn-outline-primary" disabled>
              Active
            </button>
          </div>
        </div>
          <div className=" m-4">
            <div className=" d-flex flex-column justify-content-evenly">
              <h3>Personal Information</h3>

              <div className=" mb-3 row">
                <div className="col text-start">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Firstname"
                  />
                </div>

                <div className="col text-start">
                  <label>Last Name</label>
                  <input type="text" className="form-control" name="Lastname" />
                </div>
              </div>
              <h3>Residential Information</h3>

              <div className="mb-3 row">
                <div className=" col text-start">
                  <label>Country</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Country</option>
                    <option value="1">Zimbabwe</option>
                    <option value="2">Zambia</option>
                    <option value="2">South Africa</option>
                    <option value="2">Namibia</option>
                    <option value="2">Malawi</option>
                    <option value="2">Botswana</option>
                    <option value="2">Lesotho</option>
                    <option value="2">Tanzania</option>
                  </select>
                </div>
                <div className="col text-start">
                  <label>City</label>
                  <input type="text" className="form-control" name="city" />
                </div>
              </div>
              <div className="mt-3 row">
                <div className="col text-start">
                  <label>Street and  Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="street number"
                  />
                </div>

                <div className="col text-start">
                  <label>Postal Code</label>
                  <input type="text" className="form-control" name="postalcode" />
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ProfileSettings;

import React from "react";
function Step1Component() {
  return (
    <div className="pt-3  d-flex flex-column justify-content-center align-items-center">
      <div className=" col-8 card shadow my-3 p-2">
        <div className="card-body d-flex flex-column justify-content-evenly">
          <h3>Personal Details</h3>
          <p>
            Please provide the following personal details accurately to
            facilitate the admission process.
          </p>

          <div className=" mb-3 row">
            <div className="col text-start">
              <label>First name</label>
              <input type="text" className="form-control" name="Firstname" />
            </div>

            <div className="col text-start">
              <label>Last name</label>
              <input type="text" className="form-control" name="Lastname" />
            </div>
          </div>

          <div className=" mb-3 text-start">
            <label> Email</label>
            <input type="email" className="form-control" name="email" />
          </div>

          <div className="mb-3 row">
            <div className=" col text-start">
              <label>Gender</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Select Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
            </div>
            <div className="col text-start">
              <label>Date Of Birth</label>
              <input type="date" className="form-control" name="Lastname" />
            </div>
          </div>
          <div className="mt-3 row">
            <div className="col text-start">
              <label>Father's Name</label>
              <input type="text" className="form-control" name="Firstname" />
            </div>

            <div className="col text-start">
              <label>Mother's Name</label>
              <input type="text" className="form-control" name="Lastname" />
            </div>
          </div>
          <p className="">
            <span className="text-danger"> Disclaimer:</span> All information
            provided will be kept confidential and used solely for admission
            purposes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Step1Component;

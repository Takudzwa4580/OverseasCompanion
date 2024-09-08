import React from "react";
import Navbar from "./Navbar";


function AddCourse({ Toggle }) {


  return (
    <div>
      <Navbar Toggle={Toggle} />
      <div className="d-flex justify-content-center align-items-center my-4">
        <form >
          <div className="card p-3">
            <div className="card-body">
              <h1 className="text-center"> Add programs</h1>
              <div className="mb-3">
                <label className="form-label"> id</label>
                <input className="form-control" type="text" name="id" />
              </div>

              <div className="mb-3">
                <label className="form-label"> degree type</label>
                <input className="form-control" type="text" name="degreetype" />
              </div>

              <div className="mb-3">
                <label className="form-label"> duration</label>
                <input className="form-control" type="text" name="duration" />
              </div>

              <div className="mb-3">
                <label className="form-label">img url</label>
                <input className="form-control" type="text" name="imgurl" />
              </div>
              <div className="mb-3">
                <label className="form-label">department</label>
                <input
                  className="form-control"
                  type="text"
                  name="department"
                />
              </div>
              <button className="btn btn-success">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;

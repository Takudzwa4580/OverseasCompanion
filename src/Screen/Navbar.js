import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineUser, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
function Navbar({ Toggle }) {
  return (
    <div>
      <div className="row p-0 m-0 ps-0 ms-0">
        <nav className="navbar navbar-expand-lg bg-white sticky-top">
          <div className="container-fluid m-2">
            <button className="btn btn-light" onClick={Toggle}>
              <AiOutlineMenu className="text-dark" />
            </button>
            <div className="container-fluid col-3">
              <form className="" role="search">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search Dashboard"
                  aria-label="Search"
                />
              </form>
            </div>

            <div className=" btn-group ">
              <button
                type="button "
                className="btn btn-light position-relative mx-2"
              >
                <IoMdNotificationsOutline className="fs-3" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  2+
                </span>
              </button>

              <button
                type="button"
                className="btn btn-light mx-2"
                data-bs-toggle="dropdown"
              >
                <AiOutlineUser className="fs-3" />
              </button>

              <div className="dropdown-menu dropdown-menu-end card-body">
                <div
                  className="card-body m-2 "
                  style={{
                    width: "19rem",
                    height: "14rem",
                  }}
                >
                  <div className="card-title d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                      <BsPersonCircle className="m-2 fs-1 text-primary" />
                      <div className="">
                        <h5 className=""> Takudzwa Mumvanga</h5>
                        <p>takudzwa4580@gmail.com</p>
                        <p className="text-success fw-bold">
                          Verified
                        </p>
                      </div>
                    </div>
                  </div>
                  <ul className="list-group   mt-2 ">
                    <Link to="/ProfileSettings">
                      <li className="list-group-item list-group-action">
                        <AiOutlineUser className="me-2 fs-4" />
                        Profile settings
                      </li>
                    </Link>
                    <Link to="/Login">
                      <li className="list-group-item list-group-action">
                        <AiOutlineLogout className="me-2 fs-4" />
                        Logout
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;

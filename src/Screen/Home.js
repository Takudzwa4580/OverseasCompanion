import React from "react";
import {BsArrowRight,} from "react-icons/bs";
import dashpic1 from './images/question-mark-magnifying-glass.png'
import Navbar from "./Navbar";
import Lottie from 'lottie-react';
import { Link } from "react-router-dom";
import Homeanime from "./images/homepic.json"
import { FaFacebook,FaSquareInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

function Home({ Toggle }) {
  return (
    <div className="">
      <Navbar Toggle={Toggle} />
      <div className="rounded p-4">
      
        <div className="row d-flex justify-content-around ">

          <div className="bg-dark shadow col-lg-7 bg-gradient rounded py-3 px-4 d-flex align-items-center justify-content-between">
            <div className=" col-7  text-white d-flex flex-column  ">
              <h1 className="mb-4 ">
                Welcome Takudzwa Mumvanga 🚀
              </h1>
              <h4  >Are You Ready to Start Your Application Process?</h4>
              <p>
                Prior To Starting, We Recommend Reviewing Our FAQ Section For
                Essential Information.
              </p>
              <div className="">
                <Link to="/Newapplication">
                <button className="btn btn-primary ">Apply Now <BsArrowRight/></button>
                </Link>
              </div>
            </div>

            <div className="col-5 ">
                <Lottie  
                   className="float-end"
                    animationData={Homeanime}  
                    options={{ 
                             loop:true, 
                             autoplay: true,}}
                    style={{maxWidth:'300px'}}         
                             /> 
               </div>
          </div>

          <div className="col-lg-4 shadow bg-white rounded d-flex flex-column justify-content-around">

            <h2 className="fw-bold">
              <span className="text-primary"> F</span>requently <br/>
              <span className="text-primary"> A</span>sked <br/>
              <span className="text-primary"> Q</span>uestions
            </h2>
            <div className="d-flex flex-column justify-content-between ">
                <h6> <Link to="/faqs" className="text-dark">General</Link> </h6>
                <h6> <Link to="/faqs" className="text-dark">Application Process</Link> </h6>
                <h6> <Link to="/faqs" className="text-dark"> Visa Process</Link></h6>
                <h6> <Link to="/faqs" className="text-dark">Accomodation</Link> </h6>
                <h6> <Link to="/faqs" className="text-dark">Scholarship And Financial Aid</Link> </h6>
              </div>
          </div>

        </div>

        <div className=" bg-white  shadow col-lg-5 rounded  mt-4  mx-3 py-3 px-4 d-flex align-items-center justify-content-between">
            <div className=" col-9  d-flex flex-column ">
              <h1 className="mb-4">
                Still In Doubt?
              </h1>
              <p>
              Get In Touch With Us Either Through Our Socials Or Visit The Help Center On Our Website.
              </p>
              <p className="d-flex flex-row"><FaSquareInstagram className="fs-2 m-1"/> <FaFacebook className="fs-2 m-1"/><FaTwitter className="fs-2 m-1"/><FaYoutube className="fs-2 m-1"/></p>
              <div className="d-flex justify-content-between  mt-3">
                <button className="btn btn-primary">Whatsapp Group <BsArrowRight/></button>
                <button className="btn btn-primary">Help Center</button>
              </div>
            </div>

            <div className="col-3 ">
              <img src={dashpic1} className="img-fluid float-end" alt="" style={{maxWidth:'100px'}}/>
            </div>
          </div>
      </div>
      
    
    </div>
  );
}
export default Home;




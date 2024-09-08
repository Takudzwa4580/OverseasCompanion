import Navbar from "./Navbar";
import { useState } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GiBookshelf } from "react-icons/gi";
import Lottie from 'lottie-react';
import lottie1 from "./images/formpic.json"
import { FaUniversity} from "react-icons/fa";
import { IoBookmark, IoBookmarksOutline } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import Chip from '@mui/material-next/Chip';
import { Link } from "react-router-dom";
import courses from "./Applicationforms/courses";
import {CardMedia } from "@mui/material";

export default function Newapplication({Toggle}) {

    const[likedButtons,setLikedButtons]=useState(courses.map(()=>false));

    const handleClick = (index) => {
        setLikedButtons((prevLikedButtons) => {
          const newLikedButtons = [...prevLikedButtons];
          newLikedButtons[index] = !newLikedButtons[index];
          return newLikedButtons;
        });
      };
     

  return (
    <div className="vh-100">
            <Navbar Toggle={Toggle} />
         <div className="p-3 ">
            <p className="fw-bold text-secondary"><SlEnvolopeLetter className="fs-4 mx-1"/>New Application</p>
                    <div className="rounded bg-primary bg-gradient row col-11 p-3 d-flex mx-5 mb-5 ">
                        <div className="col-4 d-flex flex-column justify-content-around">
                            <h2 className="text-white fw-bold">Current Intake </h2>
                            
                            <h4 className="text-white fw-bold">Ends In:</h4>
                            <div className="" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-light  " disabled>04<br/>Mon</button>
                            <button type="button" className="btn btn-outline-light mx-2" disabled>10<br/>Day</button>
                            <button type="button" className="btn btn-outline-light " disabled>15<br/>Hrs</button>
                            </div>

                        </div>
                        <div className=" bg-white rounded col-8">
                            <div className="d-flex align-items-center">
                                <Lottie className="float-end" animationData={lottie1}  style={{maxWidth:'150px'}} options={{ loop:true, autoplay: true,}}/> 
                            <div>
                                <h3 className="fw-bold">Winter Intake</h3>
                                <Chip label="Ongoing" color="info" variant="filled" />
                            </div>
                            </div>
                            <p className="fw-light">
                            Search our database for Masters degree programmes, including part-time,MA, MSc, MBA, MRes and MPhil programmes as well as other Undergraduate study opportunities.
                            </p>
                            <div className=" d-flex flex-row">
                                <div className=" mx-2">
                                    <button className="btn  btn-lg btn-dark mx-2" disabled> <FaUniversity/> </button>
                                    <p className="float-end text-dark fw-light">Universities<br/><span className="fw-bold">150+</span></p>
                                </div>
                                <div className="">
                                    <button className="btn btn-lg btn-dark mx-2" disabled> <GiBookshelf/> </button>
                                    <p className="float-end text-dark fw-light">Courses<br/><span className="fw-bold">500+</span></p>
                                </div>
                            </div>

                        </div>

                    </div>
                    
                    <div className=" mb-4 p-2 d-flex flex-row justify-content-around align-items-center">


                             <div className="">
                              <h2 className="fw-bold"> All Courses</h2>                              
                             </div>
                                        
                                <div className="col-3">
                                    <select className="form-select border" aria-label="Default select example">
                                            <option selected>Browse by Level of Study</option>
                                            <option value="1">Degree</option>
                                            <option value="2">Masters</option>
                                            <option value="3">Phd</option>
                                    </select>
                                </div>

                                <div className="col-3">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Browse by Country</option>
                                        <option value="1">India</option>
                                        <option value="2">China</option>
                                        <option value="3">Germany</option>
                                    </select>
                                </div>


                                <div className="col-3">
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Browse by Domain</option>
                                        <option value="1">MBA</option>
                                        <option value="2">Management</option>
                                        <option value="3">Data Science</option>
                                        <option value="3">Business Analytics</option>
                                        <option value="3">AI & ML</option>
                                        <option value="3">Computer Science</option>
                                        <option value="3">Information and Technology</option>
                                        <option value="3">Cybersecurity</option>
                                        <option value="3">Healthcare</option>
                                        <option value="3">Finance & Accounting</option>
                                        <option value="3">Bachelors Management</option>
                                        <option value="3">Supply Chain</option>
                                        <option value="3">Engineering</option>
                                        <option value="3">Hospitality</option>
                                        <option value="3">Marketing</option>
                                        <option value="3">Financial Management</option>
                                    </select>
                                </div>
            
                    </div>


                    <div className="d-flex justify-content-between flex-wrap">
                           {courses.map((course,index )=> (
                            <Card key={course.id} sx={{ width: 305 }} className="shadow m-3 p-2">
                           
                            <CardMedia
                                component="img"
                                className="rounded "
                                height="140"
                                image={course.imageUrl}
                                alt=""
                                />

                            <CardContent className=" p-0 ">
                                <div className="d-flex align-items-center justify-content-between">
                                    <Typography className="text-primary" gutterBottom variant="h6" component="div">
                                    {course.degree}
                                    </Typography>
                                    <button className="btn btn-lg float-end" onClick={() => handleClick(index)}>
                                        {likedButtons[index] ?  <IoBookmark  className="fs-3 "/>:<IoBookmarksOutline className="fs-3 " /> }
                                    </button>
                                </div>

                                <Typography className="fw-bold"  gutterBottom variant="p" component="div">
                                {course.department}
                                </Typography>
                            </CardContent>
                            <hr/>
                            <div className="d-flex justify-content-between">
                            <p className="fw-lighter">4 years</p>
                            <p className="fw-lighter">On Campus</p>
                            <p className="fw-lighter"> Full Time</p>
                            </div>
                            <CardActions className="float-end">
                                <Link to="/Appform">
                                <Button size="small" variant="contained" color="primary">
                                Apply Now
                                </Button>
                                </Link>
                            </CardActions>
                            </Card>
                             ))}
                                        
                  </div>
        </div>
  </div>
  );}
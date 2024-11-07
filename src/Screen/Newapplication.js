import React, { useState } from "react";
import Navbar from "./Navbar";
import { Card, Button, Typography, Select, Avatar } from "antd";
import { FaUniversity } from "react-icons/fa";
import { IoBookmark, IoBookmarksOutline } from "react-icons/io5";
import { GiBookshelf } from "react-icons/gi";
import Lottie from "lottie-react";
import lottie1 from "./images/formpic.json";
import courses from "./Applicationforms/courses";
import { Link } from "react-router-dom";
import { Chip, Stack } from "@mui/material";

const { Meta } = Card;
const { Option } = Select;

export default function Newapplication({ Toggle }) {
  const [likedButtons, setLikedButtons] = useState(courses.map(() => false));

  const handleClick = (index) => {
    setLikedButtons((prev) => {
      const newLiked = [...prev];
      newLiked[index] = !newLiked[index];
      return newLiked;
    });
  };

  return (
    <div className="vh-100">
      <Navbar Toggle={Toggle} />
      <div className="p-3">
        <Typography.Title level={3} className="fw-bold text-secondary">
          <IoBookmark className="fs-4 mx-1" /> New Application
        </Typography.Title>

        <div className="rounded bg-primary bg-gradient row col-11 p-3 d-flex mx-5 mb-5">
          <div className="col-4 d-flex flex-column justify-content-around">
            <Typography.Title level={2} className="text-white fw-bold">
              Current Intake
            </Typography.Title>
            <Typography.Title level={4} className="text-white fw-bold">
              Ends In:
            </Typography.Title>
            <div
              role="group"
              aria-label="Intake Deadline"
              className="d-flex gap-2"
            >
              <Button className="btn btn-outline-light" disabled>
                04
                <br />
                Mon
              </Button>
              <Button className="btn btn-outline-light" disabled>
                10
                <br />
                Day
              </Button>
              <Button className="btn btn-outline-light" disabled>
                15
                <br />
                Hrs
              </Button>
            </div>
          </div>

          <div className="bg-white rounded col-8">
            <div className="d-flex align-items-center">
              <Lottie animationData={lottie1} style={{ maxWidth: "150px" }} />
              <div>
                <Typography.Title level={3} className="fw-bold">
                  Winter Intake
                </Typography.Title>
                <Button type="primary" shape="round" size="small">
                  Ongoing
                </Button>
              </div>
            </div>
            <Typography.Paragraph className="fw-light">
              Search our database for Masters degree programmes, including
              part-time, MA, MSc, MBA, MRes, and MPhil programmes, as well as
              other undergraduate study opportunities.
            </Typography.Paragraph>
            <div className="d-flex gap-3">
              <div>
                <Button className="btn btn-dark " disabled>
                  <FaUniversity />
                </Button>
                <Typography.Text>
                  Universities
                  <br />
                  <strong>150+</strong>
                </Typography.Text>
              </div>
              <div>
                <Button className="btn btn-dark" disabled>
                  <GiBookshelf />
                </Button>
                <Typography.Text>
                  Courses
                  <br />
                  <strong>500+</strong>
                </Typography.Text>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 p-2 d-flex justify-content-around align-items-center">
          <Typography.Title level={2}>All Courses</Typography.Title>
          <Select className="col-3" defaultValue="Browse by Level of Study">
            <Option value="degree">Degree</Option>
            <Option value="masters">Masters</Option>
            <Option value="phd">PhD</Option>
          </Select>
          <Select className="col-3" defaultValue="Browse by Country">
            <Option value="india">India</Option>
            <Option value="china">China</Option>
            <Option value="germany">Germany</Option>
          </Select>
          <Select className="col-3" defaultValue="Browse by Domain">
            <Option value="mba">MBA</Option>
            <Option value="management">Management</Option>
            <Option value="data-science">Data Science</Option>
            <Option value="business-analytics">Business Analytics</Option>
            {/* Add other options here */}
          </Select>
        </div>

        <div className="row">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4"
            >
              <Card
                hoverable
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  margin: "0 auto",
                  position: "relative", 
                }}
                className="col-sm-12 col-md-6 col-lg-4"
                actions={[
                  <Link to="/details" key="details">
                    <Button type="default"> View Details</Button>
                  </Link>,
                  <Link to="/Appform" key="apply">
                    <Button type="primary">Apply Now</Button>
                  </Link>,
                ]}
              >
                
                <Button
                  key="bookmark"
                  icon={
                    likedButtons[index] ? (
                      <IoBookmark />
                    ) : (
                      <IoBookmarksOutline />
                    )
                  }
                  onClick={() => handleClick(index)}
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    zIndex: 1, 
                  }}
                />

                <Meta
                  className="pt-1 pb-3"
                  avatar={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        src={course.imageUrl}
                        alt={course.school}
                        size={54}
                        className="rounded-circle"
                      />
                      <Typography.Text style={{ marginLeft: "8px" }}>
                        {course.school}
                      </Typography.Text>
                    </div>
                  }
                />

                <div className="d-flex flex-column">
                  <h5 className="fw-bold">{course.department}</h5>
                  <Typography.Text className="text-secondary fw-light">
                    {course.degree}
                  </Typography.Text>
                </div>

                <hr />

                <div className="d-flex flex-column mt-2">
                  <div className="d-flex justify-content-between">
                    <h6>Location</h6>
                    <span className="text-secondary">{course.location}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>Duration</h6>
                    <span className="text-secondary">{course.duration}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>Tuition</h6>
                    <span className="text-secondary">{course.tuition}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>Registration Fee</h6>
                    <span className="text-secondary">{course.depositfee}</span>
                  </div>
                </div>

                <div className="d-flex justify-content-between mt-2">
                  <Chip
                    label="Scholarship"
                    color="primary"
                    variant="outlined"
                  />
                  <Chip label="Offline" color="primary" variant="outlined" />
                  <Chip label="Fulltime" color="primary" variant="outlined" />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

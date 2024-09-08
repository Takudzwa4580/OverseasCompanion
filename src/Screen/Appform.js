import React, { useState } from "react";
import Navbar from "./Navbar";
import { Form } from "antd";
import { Button, CardActions} from "@mui/material";
import Step1component from "./Applicationforms/step1component";
import Step2component from "./Applicationforms/step2component";
import Step3component from "./Applicationforms/step3component";
import { Link} from "react-router-dom";


function Appform({ Toggle }) {
  const [currentStep, setCurrentStep] = useState(1);
  const TotalSteps = 3;
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  
 

  return (
    <div>
      <Navbar Toggle={Toggle} />

      <div className=" rounded">
        <div className="">
          <Form layout="vertical">
            {currentStep === 1 && (
              <div>
                <Step1component />
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <Step2component />
              </div>
            )}
            {currentStep === 3 && (
              <div>
                <Step3component />
              </div>
            )}
            <CardActions className="d-flex justify-content-between px-5">
              {currentStep > 1 && (
                <Button
                  onClick={prevStep}
                  size="small"
                  variant="contained"
                  color="primary"
                >
                  Prev
                </Button>
              )}
              {currentStep < TotalSteps && (
                <Button
                  onClick={nextStep}
                  size="small"
                  variant="contained"
                  color="primary"
                >
                  Next
                </Button>
              )}
              {currentStep === TotalSteps && (
                <Link to="/submitapp">
                <Button  size="small" variant="contained" color="primary">
                  Submit
                </Button>
                </Link>
              )}
            </CardActions>
          </Form>

        </div>
      </div>
    </div>
  );
}

export default Appform;

import React, { useState } from 'react';
import EducationLevel from './educationlevel';
import CourseSelection from './courseselection';
import Accommodation from './accomodation';
import Food from './food';
import Transport from './transport';
import FunActivities from './funactivities';

const OptionsMainScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [totalExpense, setTotalExpense] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleExpenseChange = (amount) => {
    setTotalExpense((prevExpense) => prevExpense + amount);
    handleNextStep();
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <EducationLevel onExpenseChange={handleExpenseChange} />;
      case 2:
        return <CourseSelection onExpenseChange={handleExpenseChange} />;
      case 3:
        return <Accommodation onExpenseChange={handleExpenseChange} />;
      case 4:
        return <Food onExpenseChange={handleExpenseChange} />;
      case 5:
        return <Transport onExpenseChange={handleExpenseChange} />;
      case 6:
        return <FunActivities onExpenseChange={handleExpenseChange} />;
      default:
        return null;
    }
  };

  return (
    <div className='p-3'>
      {renderCurrentStep()}
      {currentStep === 7 && (
        <div>

          <h4>Total Expense: ${totalExpense} (usd)</h4>
        </div>
      )}
    </div>
  );
};

export default OptionsMainScreen;

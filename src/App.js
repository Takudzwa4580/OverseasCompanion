import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Screen/Home";
import Login from "./Screen/Login";
import Sidebar from "./Screen/Sidebar";
import Explore from "./Screen/Explore";
import Programs from "./Screen/Programs";
import Myapplications from "./Screen/Myapplications/Myapplications";
import Appform from "./Screen/Appform";
import Faqs from "./Screen/Faqs";
import Newapplication from "./Screen/Newapplication";
import { useState } from "react";
import SubmitApp from "./Screen/submitapp";
import ExpenseCalc from "./Screen/Expenses/expensecalc";
import AddCourse from "./Screen/addcourse";
import ProfileSettings from "./Screen/Profilesettings";


function App() {
  const [toggle,setToggle]=useState(false)
  const Toggle=()=>{
    setToggle(!toggle)
  }
 
  return (
    <Router>
      <div className="d-flex ">
       {toggle && <div className="w-auto">
          <Sidebar />
        </div>}
        <div className="col overflow-auto ">
          <Routes>
            <Route path="/" element={<Home Toggle={Toggle}/>} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Myapplications" element={<Myapplications Toggle={Toggle}/>} />
            <Route path="/Explore" element={<Explore Toggle={Toggle}/>} />
            <Route path="/Programs" element={<Programs Toggle={Toggle} />} />
            <Route path="/Appform" element={<Appform Toggle={Toggle}/>}/>
            <Route path="/ExpenseCalc" element={<ExpenseCalc Toggle={Toggle}/>}/>
            <Route path="/SubmitApp" element={<SubmitApp Toggle={Toggle}/>}/>
            <Route path="/Faqs" element={<Faqs Toggle={Toggle} />}/>
            <Route path="/Newapplication" element={<Newapplication  Toggle={Toggle}/>}/>
            <Route path="/addcourse" element={<AddCourse  Toggle={Toggle}/>}/>
            <Route path="/profilesettings" element={<ProfileSettings  Toggle={Toggle}/>}/>
 
           </Routes>
        </div>
      </div>
    </Router>
  );  
}

export default App;

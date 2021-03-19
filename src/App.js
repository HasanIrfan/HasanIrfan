import React from "react";
import logo from "./logo.svg";
import './App.css';
import { Button } from "reactstrap"; 
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Toast, toast } from "react-toastify";
import Home from "./Component/Home";
import Course from "./Component/Course";
import Allcourses from "./Component/Allcourses";
import Addcourses from "./Component/Addcourses";



function App() {

  const btnhandle=()=>{
    toast.success("Done");
  }
  return (
  <div>
  <ToastContainer/>
    <Home/>
    <Allcourses/>
    <Addcourses/>
       </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

import Navbar from "./component/Navbar";
import Textcontainer from "./component/Textcontainer";


function App() {
  const [mode,setmode]=useState("light");
 


  const togglemode= ()=>{
    mode === "light"?setmode("dark"):setmode("light");
  }
  return (
   
      <div className={`main_box ${mode==="light"?"white":"black"}`}>
      <Navbar mode={mode} togglemode={togglemode}/>

      <div className={`container my-3 p-2 custom-container ${mode==="light"?"white":"black"}`}>
        <Textcontainer heading="Enter the text to analyze" mode={mode} togglemode={togglemode}/>
      </div>
      </div>


  
  );
}

export default App;

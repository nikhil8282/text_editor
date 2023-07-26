import React, { useState } from "react";

export default function Textcontainer(props) {


  const [text, setText] = useState("");

const countWord =()=>{
  let a="";
  text.split(" ").forEach(e=>{
    if(a==="")a+=e;
    if(e!=="")a+=" "+e;

  })
  // setCount
  return  a.split(" ").length-1;
  // return count;
}
// to remove extra space
const removeSpace =()=>{
  let a="";
  text.split(" ").forEach(e=>{
    if(a==="")a+=e;
    else if(e!=="")a+=" "+e;

  })
  setText(a);
}


// function  to Uppercase
  const tochangeuppercase = () => {
    let temp = text.toUpperCase();
    setText(temp);
  };
 // function  to lowercase 
  const tochangelowercase = () => {
    let temp = text.toLowerCase();
    setText(temp);
  };
  
 // function  to Clear text 
  const toclear = () => {
    setText("");
  };
 // function  to copy text 
  const tocopy = () => {
    navigator.clipboard.writeText(text);

  };

  const textchange = (e) => {
    setText(e.target.value);
    // countWord();
  };

  return (
    <>
      <h1>{props.heading}</h1>
      <div className={`mb-3`} >
        <textarea
          className={`form-control my-3 text-area ${props.mode==='light'?'white':'black'}`}
          value={text}
          onChange={textchange}
          id="floatingTextarea"
          rows="8"
          style={{resize:'none'}}
          
        ></textarea>
        <button
          type="button"
          onClick={tochangeuppercase}
          className="btn btn-info mx-2"
        >
          To Uppercase
        </button>
        <button
          type="button"
          onClick={tochangelowercase}
          className="btn btn-info mx-2"
        >
          To Lowercase
        </button>
        <button
          type="button"
          onClick={toclear}
          className="btn btn-info mx-2"
        >
           Clear
        </button>
        <button
          type="button"
          onClick={tocopy}
          className="btn btn-info mx-2"
        >
           Copy
        </button>
        <button
          type="button"
          // title="remove extra spaces"
          onClick={removeSpace}
          className="btn btn-info mx-2"
        >
        Remove Spaces
        </button>
      </div>
      
      <p>Total Words = {
// count
        text===""?
        text.length:countWord()   
      }</p>
    </>
  );
}

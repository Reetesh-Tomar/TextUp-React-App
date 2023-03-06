import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick=()=>{
    //console.log("Uppercase button was clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLowClick=()=>{
    //console.log("Uppercase button was clicked");
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    //console.log("On change");
    setText(event.target.value);
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);  //REGEX expression
    setText(newText.join(" "));
  }
  
  function getCount(str) {
    return str.split(/\s+/).filter(function(num) {
     return num !== ''
    }).length;
  }

  function copyFunction() {
    // Get the text field
    var text=document.getElementById("myBox");
    text.select();
     // Copy the text inside the text field
    navigator.clipboard.writeText(text.value);
  
    // Alert the copied text
    alert("Copied the text: " + text.value);
  }
  
  function clearFunction() {
    setText('');
  }

  const [text, setText] = useState('');
  return (
    <>
    {
    /* In below statement and also in many lines we are using style={{}} type syntax, this is because {} are used to write JavaScript inside tags, and double curly braces {{}} are used because inside {} we are passing one object */}
      <div style={{color: props.mode==='light'?'black':'white'}}>    
        <h2>{props.heading}</h2>
        <div className="form-group">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='light'?'white':'#13466e', color: props.mode==='light'?'black':'white'}}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2 my-1" onClick={copyFunction}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={clearFunction}>Clear Text</button>
        
      </div >
      <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{getCount(text)} words</p>
        <p>{text.length} characters</p>
        <p>{0.008*getCount(text)} Minutes required to read this</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Write text in textarea to view it here."}</p>
      </div>
    </>
  );
}



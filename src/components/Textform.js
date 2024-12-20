import React, { useState } from 'react';


export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to uppercase", "success");

  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to lowercase", "success");

  };

  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/).join(" ");
    setText(newText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("Text copied to clipboard");
    });
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  

  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-secondary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-success mx-1 my1' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-secondary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((word) => word !== "").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((word) => word !== "").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

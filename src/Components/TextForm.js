import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState('enter text here');

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopyText = () => {
    const textToCopy = document.getElementById("myBox");
    textToCopy.select();
    navigator.clipboard.writeText(textToCopy.value);
    props.showAlert("Text Copied", "success");
  };

  const handleExtraSpace = () => {
    const newText = text.split(/\s+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
  };

  return (
    <>
      <div>
        <div className="container mb-3 my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <button className="btn btn-secondary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-secondary my-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-secondary my-3 mx-2" onClick={handleCopyText}>Copy Text</button>
          <button className="btn btn-secondary my-3 mx-2" onClick={handleExtraSpace}>Remove extra spaces</button>
        </div>
      </div>

      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Text Summary</h2>
        <p>Your text contains <b>{text.trim().split(/\s+/).filter(Boolean).length}</b> words and <b>{text.length}</b> characters</p>
        <p>Read minutes <b>{0.008 * text.trim().split(/\s+/).filter(Boolean).length}</b></p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter your text to preview"}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
  showAlert: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

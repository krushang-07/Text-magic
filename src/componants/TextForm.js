import React, { useState } from "react";
import copy from "copy-to-clipboard";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    settext(newtext);
  };

  const handleLoClick = () => {
    console.log("lowercase was clicked" + text);
    let newtext = text.toLowerCase();
    settext(newtext);
  };

  const handleClClick = () => {
    console.log("clear text");
    let newtext = "";
    settext(newtext);
  };

  const handleOnChange = (event) => {
    //console.log("on change");
    settext(event.target.value); //same line of all time to changing the value in the state
  };

  const copyToClipboard = () => {
    copy(text);
    alert(`You have copied "${text}"`);
  };
  const [text, settext] = useState("");

  //text = "new text" //wrong way to changw state
  //settext("new text") //correct way to changw state
  return (
    <>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
      </div>
      <div>
        <div claesName="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "white",
              color: props.mode === "dark" ? "black" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
          <button
            className="btn btn-primary mx-1 my-3 bg-black "
            onClick={handleUpClick}
          >
            convert to upper case
          </button>
          <button
            className="btn btn-primary mx-1 bg-black"
            onClick={handleLoClick}
          >
            convert to lower case
          </button>
          <button
            className="btn btn-primary mx-1 bg-black"
            id="hyy"
            value={text}
            onClick={copyToClipboard}
          >
            copytext
          </button>
          <button
            className="btn btn-primary mx-1 bg-black"
            value={text}
            onClick={handleClClick}
          >
            clear text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Text Summary</h1>
        <ul>
          <li>
            <p>
              {
                text.split(" ").filter((e) => {
                  return e.length !== 0;
                }).length
              }
               words and {text.length} characters
            </p>
          </li>
          <li>
            <p>
              {0.008 *
                text.split(" ").filter((e) => {
                  return e.length !== 0;
                }).length}
               Minute read
            </p>
          </li>
        </ul>
        <h2>Text Preview</h2>
        <ul>
          <li>
            <p>
              {text.length > 0
                ? text
                : "Enter something in the textbox above to preview it here"}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

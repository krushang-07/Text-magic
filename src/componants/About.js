import React from "react";

export default function About(props) {
  //   const [myStyle, setMyStyle] = useState({
  //     color: "black",
  //     backgroundColor: "white",
  //   });
  //   const [btntext, setBtnText] = useState("Enable Dark Mode");

  //   const toggleStyle = () => {
  //     if (myStyle.color === "black") {
  //       setMyStyle({
  //         color: "white",
  //         backgroundColor: "black",
  //         border: "1px solid white",
  //       });
  //       setBtnText("Enable Light Mode");
  //     } else {
  //       setMyStyle({
  //         color: "black",
  //         backgroundColor: "white",
  //       });
  //       setBtnText("Enable Dark Mode");
  //     }
  //   };

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      {/* style = {mystyle} */}
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={{ color: props.mode === "dark" ? "black" : "#042743" }}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Features/01
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#042743" : "white",
              }}
            >
              Efficient Text Utility Tool for{" "}
              <strong>
                converting text to upper case, lower case, copying text, and
                clearing text.
              </strong>{" "}
              Streamlines text manipulation tasks with easy-to-use functions,
              enhancing productivity and ensuring consistent text formatting.
              Ideal for users seeking quick and reliable text transformations.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={{ color: props.mode === "dark" ? "black" : "#042743" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Features/02
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#042743" : "white",
              }}
            >
              Efficient{" "}
              <strong>
                {" "}
                Text Utility Tool for counting words, letters, and estimating
                reading time. Additionally, it offers features to copy and clear
                text.{" "}
              </strong>{" "}
              Streamlines text manipulation and analysis, enhancing productivity
              and ensuring consistent text formatting. Ideal for users seeking
              quick and reliable text insights and transformations.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={{ color: props.mode === "dark" ? "black" : "#042743" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Features/03
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#042743" : "white",
              }}
            >
              Effieciently{" "}
              <strong>Enable dark to light and light to dark mode</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        {/* <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btntext}
        </button> */}
      </div>
    </div>
  );
}

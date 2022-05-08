import React from "react";

export default function About(props) {
  let mystyle = {
    color: props.mode === "light" ? "black" : "white",
    backgroundColor: props.mode === "light" ? "white" : "#6c757d",
  };
  return (
    <>
      <div
        className="container my-5"
        id="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>About us</h1>
        <div className="accordion my-3" id="accordionExample" style={mystyle}>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={mystyle}
              >
                <strong>Analyze Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Textutils gives a way to analyze your text effective and
                correctly. Beit count the words, character count and sentences
                count
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={mystyle}
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Textutils is a free character counter tool that provides instant
                character count,word and sentence count for a given text.
                Textutils reports the number of the words and characters. Thus
                it is suitable for writing text with word/character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={mystyle}
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                This word counter software works in any web browser such as
                Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
                count characters in Facebook, Blog, Books, Excel Document, Pdf
                Document, Essays Etc
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

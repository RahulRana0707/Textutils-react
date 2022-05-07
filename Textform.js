import { useState } from "react";
function Textform(props) {
    const [text, setText] = useState("");
    const handlecopytext =()=>{
        var text = document.getElementById("mybox");
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showalert("Text copied","success")
    }
  const correct=()=>{
    let number = text.split(" ").length
    if (text === "") {
      number = 0
    }
    return number
  }
  const capatilize =()=>{
    const arr = text.split(" ")
    let newarr = []
    arr.forEach(element => {
      newarr.push((element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()))    
    });
    setText(newarr.join(" "))
    props.showalert("Text is now capatilized","success")
  }
  const handlebtnclick = () => {
    // console.log("clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handlelowerclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Text converted to lower","success")
    
  };

  const onchangehandler = (event) => {
    // console.log("onchange");
    setText(event.target.value);
  };
  const cleartext = () => {
    setText("");
  };



  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="mybox"
          rows="8"
          value={text}
          onChange={onchangehandler}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handlebtnclick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handlelowerclick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={cleartext}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handlecopytext}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-1" onClick={capatilize}>
        Capatalize First Letter
      </button>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          No of words are {correct()} and no of characters are{" "}
          {text.length}
        </p>
        <p>
          Minutes to read {correct()} is{" "}
          {correct() * 0.008 + " minutes"}
        </p>
        <p>Number of sentences are {correct()}</p>
      </div>
    </>
  );
}
export default Textform;

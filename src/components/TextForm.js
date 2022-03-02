import React,{useState} from 'react';

export default function TextForm(props) {
  const [text, setText]=useState("");
  const handleUpClick = () => {
    console.log("uppercase was clicked for: ",text);
    // text="i don't want to be contacted, please dont email me";
    setText(text.toUpperCase());
    // setText("you have clicked on button");
  }
  const handleOnChange = (event)=>{
    console.log("on change");
    setText( event.target.value );
  }
  const handleCopy = ()=>{
    var text=document.getElementById("txtbox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleClear = ()=>{
    setText("");
  }
  return <div className="container my-2">
    <hr/>
      <div >
        <h1>{props.heading}</h1>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">text area</label>
          <textarea className="form-control" id="txtbox" rows="3" value={text} onChange={handleOnChange} ></textarea>
        </div><br/>
        {/* <button className="btn btn-primary">Convert to uppercase</button> */}
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2"  >Send email to me</button>
        <button className="btn btn-primary mx-2" onClick={handleClear} >Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
      </div>

      <div className="container2 my-3">
        <h6>Your text summary</h6>
        <p>{text.split(" ").length} words and {text.length} characters. Time to read for me: {text.split(" ").length*0.008} minutes</p>
      </div>

  </div>;
}

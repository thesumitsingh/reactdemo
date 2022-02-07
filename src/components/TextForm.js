import React,{useState} from 'react';

export default function TextForm(props) {
  const [text, setText]=useState("Enter text here");
  const handleUpClick = () => {
    console.log("uppercase converted");
    setText("you have clicked on button");
  }
  const handleOnChange = (event)=>{
    console.log("on change");
    setText( event.target.value );
  }
  return <div>
    <hr/>
      
        <h1>{props.heading}</h1>
        <div className="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">text area</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleOnChange} ></textarea>
        </div><br/>
        {/* <button className="btn btn-primary">Convert to uppercase</button> */}
        <button className="btn btn-primary" onClick={handleUpClick} >Send email to me</button>
      

  </div>;
}

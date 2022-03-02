import React,{useState} from 'react';

export default function About() {
    const [myStyle,setmyStyle]=useState({
        color:"black",
        backgroundColor:"white"
    })
    const [BtnText,setBtnText]=useState("Enable Dark Mode")
    let toggleStyle=()=>{
        if(myStyle.color=="black"){
            setmyStyle({
                color:"white",
            backgroundColor:"black",
            border:"2px solid white"
            });
            setBtnText("Enable Light Mode");


        }
        else {
            setmyStyle({
                color:"black",
                backgroundColor:"white",
                // border:"1px solid black"
            });
            setBtnText("Enable Dark Mode");
        }
    }

  return <div className='container' style={myStyle}>
      <h1>About me</h1>
      <div id="accordion">
        <div className="card">
            <div className="card-header" id="headingOne"  style={myStyle}>
            <h5 className="mb-0">
                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                Work
                </button>
            </h5>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body"  style={myStyle}>
                I work at HSBC in the Rapid Proposals pod, as a Full Stack Developer.
            </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header" id="headingTwo"  style={myStyle}>
            <h5 className="mb-0">
                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                Education
                </button>
            </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div className="card-body" style={myStyle}>
                I graduated from IIT Bombay in 2021, in Metallurgical Engineering and Materials Science.
            </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header" id="headingThree"  style={myStyle}>
            <h5 className="mb-0">
                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                Living
                </button>
            </h5>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div className="card-body" style={myStyle}>
                I belong to Lucknow. I'm currently working form home due to covid.
            </div>
            </div>
        </div>
        </div><br/>
        <button type="button" onClick={toggleStyle} className="btn btn-primary">{BtnText}</button>

  </div>;
}

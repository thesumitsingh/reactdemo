import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React,{useState} from 'react';

function App() {
  const [alert,setAlert]=useState("Please talk to Sumit");
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type,
    })
  }
  return (
    <Router>
    <div className="sumitApp">
      <Navbar title="Navigator" aboutText="About us"/>
      <Alert alert="Contact Sumit if you are facing any errors." />
      <Routes>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/contact" element={<TextForm heading="Write to me"/>}></Route>
        </Routes>
      {/* <pre><br/><h1>SumitDemoApp</h1><br/><br/></pre> */}
      {/* <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav><br/> */}
      
      {/* <About/> */}

    </div>
    </Router>
  );
}

export default App;

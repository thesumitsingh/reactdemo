import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <div className="App">
      <Navbar title="Navigator" aboutText="About us"/>

      <pre><br/><h1>SumitDemoApp</h1><br/><br/>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav><br/>
      </pre>
      <div className="container"><TextForm heading="Write to me" /></div>

    </div>
  );
}

export default App;

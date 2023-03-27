import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About  from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
// import Routes from "react-router";
let name="harry";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='black';
        showAlert("dark mode is enabled","success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("light mode is enabled","success");
    }
  }
  return (
   <>
   <Router>

    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
        <Routes>
          <Route path="/about" element={<About />}>
            {/* <About/> */}
          </Route>
          <Route path="/" element={<TextForm mode={mode} alertOf={{showAlert,alert}} heading="Enter the text to analyse"/>}>
          </Route>
        </Routes>
    </div>
   </Router>

   </>
  );
}

export default App;

import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode enabled', 'success');
      document.title = 'TextUtiles - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
      document.title = 'TextUtiles - Light Mode';
    }
  };

  return (
    // <Router>
      <div>
        {/* The Navbar component is outside the Switch, so it will be displayed on all pages */}
        <Navbar title="Text" aboutText="About US" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container">
          {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
             <TextForm heading="Enter your text" showAlert={showAlert} mode={mode} />
          </Route>
        </Switch> */}
          <TextForm heading="Enter your text" showAlert={showAlert} mode={mode} />
           <About />
        </div>
      </div>
    // </Router>
  );
}

export default App;

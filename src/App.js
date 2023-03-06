import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


import {
  BrowserRouter as Router,
  // Switch,    //It was used in previous versions of react-route-dom such as version 5.0, but in latest version 6.8.2, we use routes
  Routes,
  Route,
   Link
} from "react-router-dom";



function App() {
  
  const [mode,setMode]=useState('light');  //Setting dark/loght mode

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <>
      <Router>
          <Navbar   mode={mode} title="TextUp" about="About TextUp" toggleMode={toggleMode}/>
          <div className="container my-3" >
            <Routes>
              {/* We are using "exact" keyword before path because, if we don't put it than also our app will run but in big apps where we have lot of routers/pages of similar names, React uses partial matching, and because of it rendering pages with similar name will be confusing */}
              {/* for example: route1/Component1 =    /users */}
              {/* route2/Component2 =    /users/home */}
              {/* If we don't use exact keyword, than while calling component2, React will do partial matching and call just /users i.e component 1 */}
              <Route exact path="/about" element={<About mode={mode} />}/>
              <Route exact path="/" element={<TextForm  mode={mode} heading="Enter the text to analyze below"/>}/>
            </Routes>
          </div>
      </Router>  

    {/* The below code was working code for react-router-DOM version 5 */}
      {/* <Router>
        <Navbar title="TextUp" about="About TextUp" mode={mode} toggleMode={toggleMode}/>
        <div className='container my-3'>
        
        <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/">
              <TextForm heading="Enter the text to analyze" mode={mode}/> 
            </Route>
        </Switch>

        </div>
      </Router> */}
      
    </>
    
  );
}

export default App;

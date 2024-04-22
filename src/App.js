import logo from './logo.svg';
import './App.css';
import Lab4 from './Component/lab4.js';
import Lab5 from './Component/lab5.js';
import AboutMe from './Component/aboutMe.js';
import React, { useState, useEffect } from 'react';

//let youTube = "https://www.youtube.com/watch?v=Co5fxheeFkw&list=PLDyJYA6aTY1lpbNh66kFpF62QpJyzliT2&index=5";


function App() {
  const [change, setChange] = useState("Home");
  console.log(change);
  function content(){
    if (change === "Home"){
      return (
        <div className='content'>
          <h1>Projects</h1>
            <Lab5/>
            <Lab4/>
            <h1>About Me</h1>
            <AboutMe/>
          </div>
      )
    }
    else if(change === "About Me"){
      return (
        <div className='content'>
            <AboutMe/>
          </div>
      )
    }
    else if(change === "Projects"){
      return (
        <div className='content'>
            <Lab5/>
            <Lab4/>
          </div>
      )
    }
    else if(change === "Contact"){
      return (
        <div className='content'>
            <h1>Zokirjonov Xondamir</h1>
            <h1>Contact: <a href='x.zokirjonov@newuu.uz'>x.zokirjonov@newuu.uz</a></h1>
          </div>
      )
    }
    
  }

  return (
    <div className="App">
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        <h3>My homework</h3>
        <ul className='menu'>
            <li><button onClick={()=> setChange("Home")}>Home</button></li>
            <li><button onClick={()=> setChange("About Me")}>About Me</button></li>
            <li><button onClick={()=> setChange("Projects")}>Projects</button></li>
            <li><button onClick={()=> setChange("Contact")}>Contact</button></li>
        </ul>
      </header>
      
      {content()}
      
      
    </div>
  );
}

export default App;

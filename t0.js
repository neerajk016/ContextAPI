#index.js


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);











#newContext.js

import { createContext } from "react";

const newContext=createContext();

export default newContext;







#NewState.js

import newContext from "./newContext";
import { useState } from "react";

const NewState=(props)=>{
    const s1={
        "name":"neeraj",
        "class":"15"
    }

    const [state,setState]=useState(s1)


    const update=()=>{
        setTimeout(() => {
            setState({
                "name":"neeraj stark",
                "class":"16"
            })
            
        }, 1000); 

    };

    return (<newContext.Provider value={{state,update}}>
    
        {props.children}

    </newContext.Provider>)

}

export default NewState;







#App.js

import React from 'react'

import About from './components/About'
import NoteState from './context/notes/NoteState';


const App = () => {
  return (<>
    <NoteState>

    <About />

    
        
            
            
            
    </NoteState>
    </>
  )
}

export default App














#About.js

import React, { useEffect } from 'react'
import { useContext } from 'react'
import newContext from '../context/notes/newContext'



const About = () => {
  const a=useContext(newContext);


  useEffect(()=>{
    a.update();
  })

  
  return (
    <div>
      <h1>this is about={a.state.name} and you are in class{a.state.class}</h1>
    </div>
  )
}

export default About;
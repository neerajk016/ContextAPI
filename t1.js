#1


import React, { Component, createContext } from 'react'
import ReactDOM from "react-dom/client";



const newcontext=createContext()

export class App extends Component {
  render() {
    return (
      <div>
        <newcontext.Provider value={'NEERAJ',"STARK"}>
        <App1/>

        </newcontext.Provider>

        
        
        
      </div>
    )
  }
}



class App1 extends Component {
    static contextType=newcontext;
  render() {
    return (
      <div>
        <h1>Hello{this.context}</h1>
        
      </div>
    )
  }
}


export default App



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


#2



import React, { Component, createContext,useState } from 'react'
import ReactDOM from "react-dom/client";


const newcontext=createContext()

export class App extends Component {


    

  render() {
    return (
      <div>
        <newcontext.Provider value={['NEERAJ',"STARK"]}>
        <App1/>

        </newcontext.Provider>

        
        
        
      </div>
    )
  }
}





class App1 extends Component {
    static contextType=newcontext;
  render() {
    return (
      <div>
        <h1>Hello{this.context}</h1>
        
      </div>
    )
  }
}










export default App








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);





#3


import React, { Component, createContext,useState } from 'react'
import ReactDOM from "react-dom/client";


const newcontext=createContext()

export class App extends Component {


    

  render() {
    return (
      <div>
        <newcontext.Provider value={['NEERAJ',"STARK"]}>
        <App1/>

        </newcontext.Provider>

        
        
        
      </div>
    )
  }
}





class App1 extends Component {
    static contextType=newcontext;
  render() {
    return (
      <div>
        <h1>Hello{this.context}</h1>
        
      </div>
    )
  }
}










export default App














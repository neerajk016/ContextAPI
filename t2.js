


import React, { Component } from 'react'

//#without using contextapi

//source
class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}



//mediater
function Toolbar(props) {
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}


//destination
class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}



//#with using contextapi


//source
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}



//no mediater
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}


//destination
class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}


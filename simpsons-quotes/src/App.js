import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./Quotes";
import Lamp from "./Lamp"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: false
    };
  }
  changeSetState = () => {
    this.setState({ working: !this.state.working });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.working ? (
            <img src= {logo} className="App-logo" alt="logo" />
          ) : (
            <img src= "https://i.pinimg.com/originals/77/76/a3/7776a3b7369485fd528ddbc0f788a1d8.jpg" className="App-logo-state  " alt="logo" />
          )}
          <h1 className="App-title">Simpsons Quotes</h1>
          {this.state.working ? <p>He's working, alleluia!</p> : <p>Homer takes a nap..Lazy bastard!</p>}
          <button onClick={this.changeSetState} className='Button'> Is Homer working?</button>
        <Lamp />
        </header>
        <Quotes />
      </div>
    );
  }
}
export default App;
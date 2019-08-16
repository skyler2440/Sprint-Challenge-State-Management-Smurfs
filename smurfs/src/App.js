import React, { Component } from "react";
import "./App.css";
import SmurfList from "./components/SmurfList";
import SmurfForm from "./forms/SmurfForm";
class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <SmurfList />
      </div>
    );
  }
}

export default App;

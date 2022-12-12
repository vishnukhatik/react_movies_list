import React, { Component } from "react";
import Movies from "./components/movies";
import NavBar  from "./components/NavBar";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
         <Movies />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

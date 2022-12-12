import React, { Component } from "react";
// import Movies from "./components/movies";
import NavBar  from "./components/NavBar";
import Counters from "./components/counters";

import "./App.css";

class App extends Component {
  state = {
    counters: [
        {id:1, value:5 },
        {id:2, value:0 },
        {id:3, value:0 },
        {id:4, value:0 },
        {id:5, value:0 }
    ]
 }

 constructor() {
  super();
  console.log('app - constructer');
 }

 componentDidMount() {
  console.log('App - mounted');
 }

 handleDelete = (counterId) => {
    console.log('dleeteee', counterId);
    const counters = this.state.counters.filter((item)=> item.id !== counterId)
    this.setState({ counters })
 }

 handleReset = () => {
    const counters = this.state.counters.map((c)=> {
        c.value = 0
        return c
    })
    this.setState({counters})
 }

 
handleIncrement = (counter) => {
const counters = [...this.state.counters]
const index = counters.indexOf(counter)
counters[index] = {...counter}
counters[index].value++
this.setState({ counters });
};

handleDecrement = (counter) => {
  const counters = [...this.state.counters]
  const index = counters.indexOf(counter)
  counters[index] = {...counter}
  counters[index].value--
  this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters counters={this.state.counters} onReset={this.handleReset} onDelete={this.handleDelete} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}  />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
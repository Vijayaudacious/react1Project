// class base component
import React, { Component } from 'react'
// import Counter from './CounterDidUpdate';
import { Counter1 } from './Counter1';

class DidMount extends Component {

  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log("componentDidMount : when component rendr first time");
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  componentWillUnmount(){
    console.log("componentWillUnmount : Component Removed"); // counter1 ko hatne par run hoga componentWillUnmount
  }  

  render() {
    return (
      <div>
        <Counter1 number={this.state.count}></Counter1>
        <button onClick={() => { this.increment() }}> Click me </button>   
        
      {/* onClick use second trik class base :- onClick={this.increment.bind(this)} */}

      </div>
    )
  }
}

export default DidMount;
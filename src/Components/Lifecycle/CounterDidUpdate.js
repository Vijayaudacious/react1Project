import React, { Component } from 'react'

class Counter extends Component {

  componentDidUpdate(prevprops,prevState){
    if (prevprops.number !== this.props.number) {
      console.log("Component Updated");      
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>

      </div>
    )
  }
}
export default Counter;
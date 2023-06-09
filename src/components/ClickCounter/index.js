/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(previousState => ({count: previousState.count + 1}))
    console.log('Clicked')
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            The Button has been clicked <span className="span">{count}</span>
            times
          </h1>
          <p>Click the button to increase the count!</p>
          <button className="button" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter

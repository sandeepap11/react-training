import React, { Component } from 'react'
import './App.css'

class App extends Component {
  messenger = (firstName, lastName) => {
    return `Hello, ${firstName} ${lastName}`
  }

  render() {
    const firstName = 'Uncle'
    const lastName = 'Scrooge'
    return (
      <div className="App">
        Showing message using the function:
        <div> {this.messenger(firstName, lastName)}</div>
      </div>
    )
  }
}

export default App

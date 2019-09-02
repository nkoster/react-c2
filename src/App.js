import React, {Component} from 'react'
import './App.css'
import Validate from './Validate/Validate'
import Char from './Char/Char'

class App extends Component {

  state = {
    userInput: ''
  }

  update = event => {
    this.setState({
      userInput: event.target.value
    })
  }

  delete = index => {
    const chars = this.state.userInput.split('')
    chars.splice(index, 1)
    this.setState({
      userInput: chars.join('')
    })
  }

  render() {
    const chars = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} key={index} clicked={() => this.delete(index)} />
    })

    return (
      <div className="App">
        <input type="text" onChange={this.update} value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validate inputLength={this.state.userInput.length} />
        {chars}
      </div>
    )
  }
}

export default App

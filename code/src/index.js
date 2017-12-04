import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  pauseClick = () => { clearInterval(this.timerID) }

  startClick = () => {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.pauseClick}>
        Pause
        </button>
        <button onClick={this.startClick}>
        Start
        </button>
      </div>
    )
  }

}

ReactDOM.render(<Clock />, document.getElementById("root"))

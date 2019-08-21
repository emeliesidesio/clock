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
      <div className="clock">
        <h2>The time is</h2>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
        <div className="buttons">
          <button onClick={this.pauseClick}>
          Pause
          </button>
          <button onClick={this.startClick}>
          Start
          </button>
        </div>
      </div>
    )
  }

}

ReactDOM.render(<Clock />, document.getElementById("root"))

import React from "react"
import { Animated } from "react-animated-css"

export default class TimesWeek extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      times: ""
    }
  }

  number = event => {
    this.setState({
      times: event.target.value
    }, () => {
      this.props.setTime(this.state.times)
    })
  }

  render() {
    return (
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        <label className="checklabel">
          <input className="checkinput" type="radio" name="amount" onChange={this.number} value={this.props.day} />
          <h6 className="day">{this.props.day}</h6>
        </label>
      </Animated>
    )
  }
}

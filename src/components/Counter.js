const { Component } = require("ink");

class Counter extends Component {
  render(props) {
    return `Counter: ${props.counter}`;
  }

  componentDidMount() {
    this.timer = setInterval(this.props.increment, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

module.exports = Counter;

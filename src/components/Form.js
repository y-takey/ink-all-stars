const { Component } = require("ink");

class Form extends Component {
  render(props) {
    return `Counter: ${props.step}`;
  }

  componentDidMount() {
    this.timer = setInterval(this.props.increment, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

module.exports = Form;

const { h, Component } = require("ink");
const Spinner = require("ink-spinner");
const Flower = require("ink-flower");
const Marquee = require("ink-marquee");

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { processing: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ processing: false });
    }, 3000);
  }

  spinner() {
    return (
      <div>
        <Spinner cyan /> processing...
      </div>
    );
  }

  render() {
    if (this.state.processing) return this.spinner();

    const { name, fruits } = this.props;
    const msg = `${name} likes ${fruits.join(", ")}`;

    return (
      <div>
        <Flower text="COMPLETED!" color="yellow" inverse />
        <br />
        <Marquee color="red" text={msg} speed={100} />
      </div>
    );
  }
}

module.exports = Message;

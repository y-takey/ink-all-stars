const { h, Component, Text } = require("ink");
const Marquee = require("ink-marquee");

class Message extends Component {
  render() {
    const { name, fruits } = this.props;
    const msg = `${name} likes ${fruits.join(", ")}`;

    return (
      <div>
        <Text yellow children={"COMPLETED!"} />
        <br />
        <Marquee color="red" text={msg} speed={100} />
      </div>
    );
  }
}

module.exports = Message;

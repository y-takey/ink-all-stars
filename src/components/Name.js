const { h, Component } = require("ink");
const TextInput = require("ink-text-input");
const Flower = require("ink-flower");

class Name extends Component {
  flower(name) {
    if (!name.length > 0) return;

    return (
      <div>
        <Flower text={name} />
      </div>
    );
  }

  render() {
    const { name, inputName, submitName } = this.props;

    return (
      <div>
        Enter your name:
        <TextInput value={name} onChange={inputName} onSubmit={submitName} />
        {this.flower(name)}
      </div>
    );
  }
}

module.exports = Name;

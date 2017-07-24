const { h, Component } = require("ink");
const ProgressBar = require("ink-progress-bar");
const Name = require("./Name");
const Password = require("./Password");
const Fruits = require("./Fruits");
const Message = require("./Message");

const STEPS = 3;

class Form extends Component {
  inputComponent() {
    switch (this.props.step) {
      case 0:
        return <Name {...this.props} />;
      case 1:
        return <Password {...this.props} />;
      case 2:
        return <Fruits {...this.props} />;
      default:
        return <Message {...this.props} />;
    }
  }

  render() {
    const { step } = this.props;
    const stepMsg = `completed step ${step}/${STEPS} `;

    return (
      <div>
        {stepMsg}
        <ProgressBar percent={step / STEPS} left={stepMsg.length} green />
        <br />
        <br />
        {this.inputComponent()}
      </div>
    );
  }
}

module.exports = Form;

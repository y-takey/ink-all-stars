const { h, Component } = require("ink");
const PasswordInput = require("ink-password-input");

class Password extends Component {
  render() {
    const { password, inputPassword, submitPassword } = this.props;

    return (
      <PasswordInput
        value={password}
        placeholder="Enter any character"
        onChange={inputPassword}
        onSubmit={submitPassword}
      />
    );
  }
}

module.exports = Password;

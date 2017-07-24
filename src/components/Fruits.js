const { h, Component } = require("ink");
const { List, ListItem } = require("ink-checkbox-list");

class Fruits extends Component {
  render() {
    const { submitFruits } = this.props;

    return (
      <div>
        Select your favorite fruits ( space: toggle check / enter: subimt / ↑: move to up / ↓: move to down)
        <br />
        <List onSubmit={submitFruits}>
          <ListItem value="apple">Apple</ListItem>
          <ListItem value="banana">Banana</ListItem>
          <ListItem value="cherry">Cherry</ListItem>
          <ListItem value="durian">Durian</ListItem>
        </List>
      </div>
    );
  }
}

module.exports = Fruits;

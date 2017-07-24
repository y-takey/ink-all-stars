const { h, Component } = require("ink");
const { List, ListItem } = require("ink-checkbox-list");

class Fruits extends Component {
  render() {
    const { submitFruits } = this.props;

    return (
      <List onSubmit={submitFruits}>
        <ListItem value="apple">Apple</ListItem>
        <ListItem value="banana">Banana</ListItem>
        <ListItem value="cherry">Cherry</ListItem>
        <ListItem value="durian">Durian</ListItem>
      </List>
    );
  }
}

module.exports = Fruits;

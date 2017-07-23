const { h, render, Component } = require("ink");
const { Provider, connect } = require("ink-redux");
const { createStore } = require("redux");

const store = createStore((state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
});

class Counter extends Component {
  render(props) {
    return `Counter: ${props.counter}`;
  }

  componentDidMount() {
    this.timer = setInterval(this.props.onIncrement, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = {
  onIncrement: () => ({ type: "INCREMENT" })
};

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>
);

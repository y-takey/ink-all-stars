const { h, render } = require("ink");
const { Provider } = require("ink-redux");

const configureStore = require("./store/configureStore");
const CounterContainer = require("./containers/CounterContainer");
const store = configureStore({ counter: 0 });

render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>
);

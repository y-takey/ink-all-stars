const { h, render } = require("ink");
const { Provider } = require("ink-redux");

const configureStore = require("./store/configureStore");
const FormContainer = require("./containers/FormContainer");
const initialState = { step: 0 };
const store = configureStore(initialState);

render(
  <Provider store={store}>
    <FormContainer />
  </Provider>
);

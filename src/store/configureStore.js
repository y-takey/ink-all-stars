const { createStore } = require("redux");
const counterReducer = require("../reducers/counter");

const configureStore = initialState => {
  return createStore(counterReducer, initialState);
};

module.exports = configureStore;

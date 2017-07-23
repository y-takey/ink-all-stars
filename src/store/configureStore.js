const { createStore } = require("redux");
const formReducer = require("../reducers/form");

const configureStore = initialState => {
  return createStore(formReducer, initialState);
};

module.exports = configureStore;

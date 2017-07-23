const { INCREMENT } = require("../actions/counter");

module.exports = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    default:
      return state;
  }
};

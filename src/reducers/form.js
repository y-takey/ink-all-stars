const { INCREMENT } = require("../actions/form");

module.exports = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { step: state.step + 1 };
    default:
      return state;
  }
};

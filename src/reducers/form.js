const { INPUT_NAME, SUBMIT_NAME, INPUT_PASSWORD, SUBMIT_PASSWORD, SUBMIT_FRUITS } = require("../actions/form");

const update = (state, properties) => {
  return Object.assign({}, state, properties);
};

module.exports = (state, action) => {
  switch (action.type) {
    case INPUT_NAME:
      return update(state, { name: action.name });
    case SUBMIT_NAME:
      return update(state, { step: state.step + 1 });
    case INPUT_PASSWORD:
      return update(state, { password: action.password });
    case SUBMIT_PASSWORD:
      return update(state, { step: state.step + 1 });
    case SUBMIT_FRUITS:
      return update(state, { step: state.step + 1, fruits: action.fruits });
    default:
      return state;
  }
};

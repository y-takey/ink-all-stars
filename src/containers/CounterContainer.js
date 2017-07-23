const { bindActionCreators } = require("redux");
const { connect } = require("ink-redux");
const Counter = require("../components/Counter");
const CounterActions = require("../actions/counter");

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(CounterActions, dispatch);
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Counter);

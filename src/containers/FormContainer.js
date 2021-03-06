const { bindActionCreators } = require("redux");
const { connect } = require("ink-redux");
const Form = require("../components/Form");
const FormActions = require("../actions/form");

const mapStateToProps = state => {
  return {
    step: state.step,
    name: state.name,
    password: state.password,
    fruits: state.fruits
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(FormActions, dispatch);
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Form);

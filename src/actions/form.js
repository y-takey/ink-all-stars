const INPUT_NAME = "INPUT_NAME";
const SUBMIT_NAME = "SUBMIT_NAME";
const INPUT_PASSWORD = "INPUT_PASSWORD";
const SUBMIT_PASSWORD = "SUBMIT_PASSWORD";
const SUBMIT_FRUITS = "SUBMIT_FRUITS";

const inputName = val => {
  return { type: INPUT_NAME, name: val };
};

const submitName = val => {
  return { type: SUBMIT_NAME };
};

const inputPassword = val => {
  return { type: INPUT_PASSWORD, password: val };
};

const submitPassword = val => {
  return { type: SUBMIT_PASSWORD };
};

const submitFruits = val => {
  return { type: SUBMIT_FRUITS, fruits: val };
};

module.exports = {
  INPUT_NAME,
  SUBMIT_NAME,
  INPUT_PASSWORD,
  SUBMIT_PASSWORD,
  SUBMIT_FRUITS,
  inputName,
  submitName,
  inputPassword,
  submitPassword,
  submitFruits
};

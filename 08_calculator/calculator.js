const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((acc, next) => {
    return acc + next;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, next) => {
    return acc * next;
  }, 1);
};

const power = function(base, exp) {
	return base ** exp;
};

const createArray = function(num) {
  ret = [];

  for (let i = 1; i <= num; i++) {
    ret.push(i);
  }

  return ret;
}
const factorial = function(num) {
  return multiply(createArray(num));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const convertToCelsius = function(fahrenheit) {
  return Math.round((5 * (fahrenheit - 32) / 9) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {

  return Math.round((9 * (celsius) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

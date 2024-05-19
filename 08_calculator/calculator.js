const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  var sum = 0;
	for(var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const multiply = function(numbers) {
  var result = 1;
  for(var i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
  return result;
};

const power = function(b, p) {
  return Math.pow(b, p);
};

const factorial = function(num) {
	if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
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

const sumAll = function(num1, num2) {
    const greater = Math.max(num1, num2);
    const lesser = Math.min(num1, num2);
    var sum = 0;
    if(Number.isInteger(num1 && num2) && Math.sign(num1) == 1) {
    for(var i = lesser; i <= greater; i++) {
        sum += i;
    }
    return sum;
    } else return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;

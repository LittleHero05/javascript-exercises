const palindromes = function (input) {
    const newInput = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    return newInput.split("").reverse().join("") == newInput;
};

// Do not edit below this line
module.exports = palindromes;

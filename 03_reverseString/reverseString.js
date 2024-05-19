const reverseString = function(word) {
    const reverse = [];
    for (let i = word.length; i >= 0; i--) {
        reverse[i] = word[word.length - 1 - i];
    }
    return reverse.join('');
};

// Do not edit below this line
module.exports = reverseString;

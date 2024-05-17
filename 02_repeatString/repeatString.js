const repeatString = function(str, factor) {
    if (factor < 0) {
        return "ERROR"
    }
    return str.repeat(factor)
};

// Do not edit below this line
module.exports = repeatString;

const palindromes = function (word) {
    word = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = word.length - 1
    while (left < right) {
        if (word[left] !== word[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

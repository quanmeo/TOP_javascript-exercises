const palindromes = function (str) {
    const reg = /[a-zA-Z]/

    const arrTemp =  str.split('');

    const arr = arrTemp.filter((c) => {
        return c.search(reg) !== -1;
    });

    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        if (arr[i].toLowerCase() !== arr[j].toLowerCase()) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

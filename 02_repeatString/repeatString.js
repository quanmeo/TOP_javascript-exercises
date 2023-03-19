const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    } else if (string === '') {
        return '';
    }

    let ret = '';
    while (num-- > 0) {
        ret += string;
    }

    return ret;
};

// Do not edit below this line
module.exports = repeatString;

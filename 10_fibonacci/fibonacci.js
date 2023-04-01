const fibonacci = function(num) {
    if (num < 1) {
        return 'OOPS';
    }

    let a = 0;
    let b = 1;
    for (let i = 1; i <= num; i++) {
        [a, b] = [b, a + b];
    }

    return a;
};

// Do not edit below this line
module.exports = fibonacci;

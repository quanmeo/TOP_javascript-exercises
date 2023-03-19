const sumAll = function(lower, upper) {
    if (!(Number.isInteger(lower) && Number.isInteger(upper)
    && lower >= 0 && upper >= 0)) {
        return 'ERROR';
    }

    const min = (lower < upper) ? lower : upper;
    const max = (lower + upper) - min;

    let ret = 0;

    for (let i = min; i <= max; i++)
    {
        ret += i;
    }

    return ret;
};

// Do not edit below this line
module.exports = sumAll;

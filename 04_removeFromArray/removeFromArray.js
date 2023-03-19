const removeFromArray = function(listItems, ...removedItems) {
    let ret = [];

    for (const item of listItems) {
        let removed = false;
        for (const i of removedItems) {
            if (item === i) {
                removed = true;
                break;
            }
        }

        if (!removed) {
            ret.push(item);
        }
    }

    return ret;
};

// Do not edit below this line
module.exports = removeFromArray;

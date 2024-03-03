const removeFromArray = function(array , ...valuesToRemove) {
    return array.filter(item => !valuesToRemove.includes(item));
    // i need to learn this but for now i just copied this and know little about the .filter
};

// Do not edit below this line
module.exports = removeFromArray;

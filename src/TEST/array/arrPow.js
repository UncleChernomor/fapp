/**
 * возращает квадраты целых чисел в массиве
 * @param {*} arr 
 * @returns array integer number
 */
function powArray(arr) {
    const resArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            if (arr[i] === 1) {
                resArr.push(1);
                continue;
            }

            resArr.push(Math.pow(arr[i], 2));
        }
    }

    return resArr;
}

module.exports = powArray;
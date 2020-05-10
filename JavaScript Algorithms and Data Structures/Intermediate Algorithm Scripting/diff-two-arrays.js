// My Solution

function diffArray(arr1, arr2) {
  var newArr = [...arr1, ...arr2].filter(i => {
    if (!arr1.some(j => j === i)) {
      return i;
    } else if (!arr2.some(j => j === i)) {
      return i;
    }
  });
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Another Example:

function diffArray2(arr1, arr2) {
  return arr1
  .concat(arr2)
  .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5]);
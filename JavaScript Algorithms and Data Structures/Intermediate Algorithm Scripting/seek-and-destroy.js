function destroyer(...args) {
  const arr = args.shift();
  const newArr = arr.filter(i => {
    return !args.includes(i);
  })
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/* Another way to pass an unknown number of arguments, with one that is known */

function destroyer2(arr, ...args) {
  const newArr = arr.filter(i => {
    return !args.includes(i);
  })
  return newArr;
}

destroyer2([1, 2, 3, 1, 2, 3], 2, 3);
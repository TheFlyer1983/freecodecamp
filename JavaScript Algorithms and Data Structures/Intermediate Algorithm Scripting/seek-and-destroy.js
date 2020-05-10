function destroyer(...args) {
  const arr = args.shift();
  const newArr = arr.filter(i => {
    return !args.includes(i);
  })
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
function dropElements(arr, func) {
  const maxLoops = arr.length;
  for (let i = 0; i < maxLoops; i++) {
    if (!func(arr[0])) {
      arr.shift()
    };
  }
  
  return arr;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3;}));

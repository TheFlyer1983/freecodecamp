function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  const arr3 = [...arr2];
  arr3.splice(n,0,...arr1);
  return arr3;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr.sort((a,b) => a > b ? 1 : -1);
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);

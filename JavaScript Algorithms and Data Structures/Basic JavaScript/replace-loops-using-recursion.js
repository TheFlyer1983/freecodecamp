function sum(arr, n) {
  // Only change code below this line
  if (n<=0) {
    return arr[n];
  } else {
    return sum(arr, n - 1) + arr[n]
  }
  // Only change code above this line
}

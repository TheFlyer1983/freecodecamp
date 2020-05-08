var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  const sortedArray = [...arr];
  sortedArray.sort((a,b) => a > b ? 1 : -1);
  return sortedArray;
  // Only change code above this line
}
nonMutatingSort(globalArray);

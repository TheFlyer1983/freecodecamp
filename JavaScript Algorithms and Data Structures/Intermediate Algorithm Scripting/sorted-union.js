function uniteUnique(arr) {
  const returnArr = [];

  for (let i = 0; i < arguments.length; i++) {
    let arrayArguments = arguments[i];
    arrayArguments.filter((j) => {
      if (returnArr.indexOf(j) < 0) {
        returnArr.push(j);
      }
    });
  }

  return returnArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

function uniteUnique2(...arr) {
  // Make an array out of the given arrays and flatten it (using the spread opertator).
  const flatArray = [].concat(...arr);
  // Create a Ser which clears any duplicates since it's a regular set and not a multiset.
  return [...new Set(flatArray)]; // Uses ES2016 Set object to store only unique values
}

uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1]);
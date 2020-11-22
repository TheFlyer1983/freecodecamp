function smallestCommons(arr) {
  let quot = 0;
  let loop = 1;
  let n;
  // Sort the array descending, then add the numbers missing.
  arr.sort((a,b) => b > a ? 1 : -1);
  let newArr = [];
  for  (let i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }
  
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }
    loop ++;
  } while (n !== newArr.length);
  
  return quot;
}


smallestCommons([1,5]);

function smallestCommons2(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  // Initially the solution is assigned to the higest value of the array
  let sol = max;

  for (let i = max - 1; i >= min; i--) {
    // Each time the solution checks (i.e. sol%i===0) it won't be necessary
    // to increment 'max' to our solutuion and restart the loop.
    if (sol % i) {
      sol += max;
      i = max;
    }
  }
  return sol;
}


smallestCommons2([1,5]);

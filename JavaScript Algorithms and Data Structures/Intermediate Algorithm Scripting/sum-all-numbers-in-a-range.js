function sumAll(arr) {
  arr.sort((a,b) => a < b ? 1 : -1);
  const count = arr[0] - arr[1];
  for (let i = arr[0]-1; i > arr[1]; i--) {
    arr.push(i);
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

sumAll([4, 1]);

/* Another solutions */

function sumAll2(arr) {
  let max = Math.max(arr[0], arr[1]); // Could also use Match.max(...arr)
  let min = Math.min(arr[0], arr[1]); // Could also use Match.min(...arr)
  let temp = 0;
  for (let i = min; i <= max; i++) {
    temp += i; 
  }
  return temp;
}

sumAll3([4,1]);

/* Using the solution above we can make it even more consise */

function sumAll3(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

sumAll3([4,1]);
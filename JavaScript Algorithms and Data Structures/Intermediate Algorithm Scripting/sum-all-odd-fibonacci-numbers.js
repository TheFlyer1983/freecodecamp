function sumFibs(num) {
  let prevNumber = 0;
  let currentNumber = 1;
  let result = 0;
  while (currentNumber <= num) {
    if (currentNumber % 2 !== 0) {
      result += currentNumber;
    }

    currentNumber += prevNumber;
    prevNumber = currentNumber - prevNumber;
  }
  return result;
}

sumFibs(1000);

// Solution two using arrays
function sumFibs2(num) {
  if (num <= 0) return 0;

  //Array of fib numbers
  const arrFib = [1, 1];
  let nextFib = 0;

  //Add the new Fibonacci Numbers to the front so we don't need to calculate the length of the array
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  return arrFib.filter(x => x % 2 !== 0).reduce((a,b) => a + b);
}

sumFibs2(1000);
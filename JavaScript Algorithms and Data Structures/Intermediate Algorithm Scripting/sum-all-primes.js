function sumPrimes(num) {
  let primes = getPrimes(num);
  
  return primes.reduce((a, b) => a + b);
}

function getPrimes(max) {
  let sieve = [];
  let primes = [];

  for (let i = 2; i <= max ; i++) {
    if (!sieve[i]) {
      primes.push(i);
      for (let j = i << 1; j <= max; j += i){
        sieve[j] = true;
      }
    }
  }
  return primes;
}

sumPrimes(977);

// Solution 2 - I think this version is more understandable. You could also make the sum variable an array and then use reduce to add them all up at the end.

function sumPrimes2(num) {
  let sum = 0;
  let i = 1
  while (i <= num) {
    if (isPrime(i)) {
      sum += i;
    }
    i++
  }
  
  return sum;
}

function isPrime(num) {
  for (let index = 2; index < num; index++) {
    if (num % i === 0) return false;    
  }
  return num !== 1 && num !== 0;
}

console.log(sumPrimes2(977));

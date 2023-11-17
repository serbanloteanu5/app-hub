/* 
Filename: complexCode.js
Description: This code implements a complex algorithm for finding prime numbers using the Sieve of Eratosthenes method.
*/

// Function to find all prime numbers up to a given limit
function findPrimes(limit) {
  // Create an array of boolean values, all initially set to true
  const primes = new Array(limit + 1).fill(true);

  // 0 and 1 are not prime numbers
  primes[0] = primes[1] = false;

  // Iterate through the array
  for (let i = 2; i <= Math.sqrt(limit); i++) {
    // If i is prime, mark all multiples of i as false
    if (primes[i]) {
      for (let j = i * i; j <= limit; j += i) {
        primes[j] = false;
      }
    }
  }

  // Collect all prime numbers
  const primeNumbers = [];
  for (let i = 2; i <= limit; i++) {
    if (primes[i]) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}

// Get input limit from the user
const limit = parseInt(prompt("Enter the upper limit:"));

// Find all prime numbers up to the given limit
const primes = findPrimes(limit);

// Display the prime numbers
console.log(`Prime numbers up to ${limit}: `);
primes.forEach(prime => console.log(prime));

// Additional code can be added to perform further operations on the prime numbers
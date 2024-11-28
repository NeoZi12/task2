function isPrime(n) {
  for (let j = 2; j < n; j++) if (n % j == 0) return false;
  return true;
}

const limit = 237;

for (let i = 2; i < limit; i++) {
  isPrime(i) && console.log(i);
}

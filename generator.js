function* generatePrimes(limit) {
    const isPrime = (num) => {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    };

    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            yield num;
        }
    }
}

const primeGen = generatePrimes(20);

for (let prime of primeGen) {
    console.log(prime);
}

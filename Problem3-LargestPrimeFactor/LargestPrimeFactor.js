const isPrime = n => {
    if (n === 1) {
      return false
    } else if (n === 2) {
      return true
    } else {
      let i = 2;
      while (i < n) {
        if (n%i === 0) {
          return false;
        }
        i += 1
      }
      return true;
    }
  }
  
  function largestPrimeFactor(number) {
    const sqr = Math.floor(Math.sqrt(number))
    let n = 1
    let primeFactor;
    while (n <= sqr) {
      if (number%n === 0) {
        const highDivisor = number/n
        if (isPrime(highDivisor)) {
          primeFactor = highDivisor
        } else if (isPrime(n)) {
          primeFactor = n
        }
      }
      n += 1
    }
    return primeFactor
  }

  export default largestPrimeFactor;
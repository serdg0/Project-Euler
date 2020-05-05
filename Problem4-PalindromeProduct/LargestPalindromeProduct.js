function isPalindrome(n) {
  const s = n.toString();
  return s.split("").reverse().join("") === s;
}

function largestPalindromeProduct(n) {
  // set low and high
  let low = parseInt('1' + '0'.repeat(n-1));
  let high = parseInt('9'.repeat(n));
  let max = 0;
  while (high >= low) {
    let pivot = high;

    while (pivot != low) {
      if (isPalindrome(pivot*high) && pivot*high > max) {
        max = pivot*high
      }
      pivot -= 1;
    }

    high -= 1
  }
return max
}

export default largestPalindromeProduct;
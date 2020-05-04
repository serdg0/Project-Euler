function isPalindrome(n) {
    n.toString().split('')
  }
  
  function largestPalindromeProduct(n) {
    // set low and high
    let low = parseInt('1' + '0'.repeat(n-1));
    let high = parseInt('9'.repeat(n));
  
    while (high >= low) {
      
      high -= 1
    }
  
    console.log(isPalindrome())
    return true;
  }

export default largestPalindromeProduct;
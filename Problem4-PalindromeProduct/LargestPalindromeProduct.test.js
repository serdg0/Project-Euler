import largestPalindromeProduct from './LargestPalindromeProduct';

test('largestPalindromeProduct(2) should return 9009', () => {
    expect(largestPalindromeProduct(2)).toBe(9009);
});

test('largestPalindromeProduct(3) should return 906609', () => {
    expect(largestPalindromeProduct(3)).toBe(906609);
});
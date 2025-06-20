function hammingWeight(x) {
  let count = 0;
  while (x !== 0) {
    count += x & 1; // Add 1 if the last bit is 1
    x >>>= 1;       // Unsigned right shift to check the next bit
  }
  return count;
}
console.log(hammingWeight(10)); // Output: 2 (1010)
console.log(hammingWeight(21)); // Output: 3 (10101)




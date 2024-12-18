function foo(a, b) {
  a = a === null ? 0 : a; // Assign 0 to a if null
  b = b === null ? 0 : b; // Assign 0 to b if null
  return a + b; // Add numbers
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
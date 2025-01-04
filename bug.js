function foo(a, b) {
  if (a === null || b === null) {
    return 0; // intended behavior
  }
  return a + b; // intended behavior
}

console.log(foo(null, 1)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo(1, 1)); // Output: 2

function bar(a, b) {
  if (a == null || b == null) {
    return 0; // unintended behavior
  }
  return a + b; // intended behavior
}

console.log(bar(null, 1)); // Output: 0
console.log(bar(1, null)); // Output: 0
console.log(bar(null, null)); // Output: 0
console.log(bar(1, 1)); // Output: 2
console.log(bar(1, '1')); // Output: 11
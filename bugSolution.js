function foo(a, b) {
  if (a === null || b === null) {
    return 0; // correct behavior using strict equality
  }
  return a + b; // intended behavior
}

console.log(foo(null, 1)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo(1, 1)); // Output: 2

function bar(a,b){
    if(a === null || b === null){
        return 0; // corrected using === 
    }
    return a + b;
}
console.log(bar(null, 1)); // Output: 0
console.log(bar(1, null)); // Output: 0
console.log(bar(null, null)); // Output: 0
console.log(bar(1, 1)); // Output: 2
console.log(bar(1, '1')); // Output: 11
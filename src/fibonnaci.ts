
/**
 * using recursion
 */

// console.log(0);
// console.log(1);

// let count = 0;

// function fibonacci(prev1: number, prev2: number) {
//   if (count < 10) {
//     let next = prev1 + prev2;

//     console.log(next);
//     prev2 = prev1;
//     prev1 = next;
//     count += 1;
//     fibonacci(prev1, prev2);
//   } else return;
// }

// fibonacci(0,1)

/** 
 * Using for loop
 * 
 * 
 */

// let prev1 = 0;
// let prev2 = 1;

// console.log(prev1)

// console.log(prev2)

// function getFibonacci(n: number) {
//   for (let i = 0; i < n; i++) {
//     const next = prev1 + prev2;

//     console.log(next);

//     prev1 = prev2;
//     prev2 = next;
//   }
// }


/**
 * Finding The nth Fibonacci Number Using Recursion
 */


// function fibonacci(n: number): number {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(10));

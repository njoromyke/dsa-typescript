// How Selection Sort Works:
// For each pass through the array, the algorithm selects the smallest (or largest, depending on sorting order) unsorted element.
// It then swaps that element with the first unsorted element, effectively "selecting" its final position in the array.
// This process repeats, shrinking the unsorted part of the array with each iteration.
// Steps for Selection Sort:
// Loop through the array with an outer loop (i loop) from 0 to n - 1 (each position of the array).
// In each iteration of the outer loop:
// Assume the element at index i is the smallest element.
// Use an inner loop (j loop) to find the smallest element in the unsorted portion of the array (from i + 1 to n).
// If a smaller element is found, update the index of the smallest element.
// Swap the smallest element with the element at position i.

const selection = [3, 7, 9, 12, 11];

function selectionSort(arr: number[]): number[] {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume the first unsorted element is the smallest
    let minIndex = i;

    // Inner loop to find the smallest element in the unsorted portion
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Update minIndex if a smaller element is found
      }
    }

    // Swap the found smallest element with the first unsorted element
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

console.log(selectionSort(selection));

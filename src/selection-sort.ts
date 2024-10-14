/**
 * Finds the lowest value in an array and pushes it to the front of the array.
 * The inner loop goes through the items in the array, finds the lowest, and swaps it with the current index.
 * The loop reduces by one element each time it runs since the lowest values are moved to the start.
 * An outer loop controls how many times the inner loop runs.
 * For n elements, the outer loop runs n-1 times.
 */
function selectionSort(arr: number[]): number[] {
  const n = arr.length;

  // Outer loop that controls the number of passes (n-1)
  for (let i = 0; i < n - 1; i++) {
    // Assume the current element is the smallest
    let minIndex = i;

    // Inner loop to find the minimum element in the unsorted part
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Update minIndex if a smaller value is found
      }
    }

    // Swap the found minimum element with the first element of the unsorted part
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    //  if (minIndex !== i) {
    //    const temp = arr[i]; // Store the current value in temp
    //    arr[i] = arr[minIndex]; // Move the smallest value to the current position
    //    arr[minIndex] = temp; // Assign the stored value to the minIndex position
    //  }
  }

  return arr;
}

const data = [4, 5, 6, 2, 1, 7, 88, 22, 898, 12, 10, 55, 33];

console.log(selectionSort(data));

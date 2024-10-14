const arr = [4, 67, 23, 44, 22, 55, 2, 77, 3];

function bubbleSort(arr: number[]): number[] {
  const n = arr.length;

  // Outer loop: number of passes
  for (let i = 0; i < n - 1; i++) {
    // Inner loop: compare adjacent elements
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];

        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort(arr));

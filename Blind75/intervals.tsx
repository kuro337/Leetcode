function eraseOverlapIntervals(intervals: number[][]): number {
  // intervals.sort((s, e) => s[1] - e[1]);

  intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  let end = intervals[0][1];
  let overlaps = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) overlaps += 1;
    else end = intervals[i][1];
  }
  return overlaps;
}

// let z = eraseOverlapIntervals([
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [1, 3],
// ]);

// console.log(z);

function binarySearch(arr: number[], target: number) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (start < end) {
    mid = (start + end) >> 1;
    console.log(mid);

    if (target === arr[mid]) {
      console.log("found mid at" + mid);
      return mid;
    }
    if (arr[mid] > target) {
      end = mid;
    } else {
      start = mid;
    }
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 20, 25], 11));

console.log(binarySearch([1, 2, 3, 4, 5], 4));

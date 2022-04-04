// Find number of ways to select 3 pages in ascendxing index order Such that no two adjacent pages are of same order

// book is 01001
// Answer is 4
// 1 , 2 , 3 - 010
// 1 , 2 , 4 - 010
// 2 , 3 , 5 - 101
// 2 , 4 , 5 - 101

function numberOfWays(s) {
  let results = 0;
  let numsArr = s.split("");
  console.log(numsArr);

  countPages([], 0);
  console.log(results);

  return results;

  function countPages(arr, start) {
    if (arr.length === 3) {
      if (arr[0] === "0" && arr[1] === "1" && arr[2] === "0") results++;
      if (arr[0] === "1" && arr[1] === "0" && arr[2] === "1") results++;
      return;
    }

    for (let i = start; i < s.length; i++) {
      arr.push(numsArr[i]);
      console.log(arr);

      countPages(arr, i + 1);
      arr.pop();
    }
  }
}

numberOfWays("010011");

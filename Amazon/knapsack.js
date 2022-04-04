var ks = function (w, v, c) {
  let results = knapsack(w.length - 1, c);
  console.log(results);

  function knapsack(n, C) {
    if (n < 0 || C === 0) return 0;
    else if (w[n] > C) {
      return knapsack(n - 1, C);
    } else {
      let temp1 = knapsack(n - 1, C);
      let temp2 = v[n] + knapsack(n - 1, C - w[n]);
      return Math.max(temp1, temp2);
    }
  }
};

ks([1, 2, 4, 2, 5], [5, 3, 5, 3, 2], 10);

// Recursive Bottom Up

const ksBottomUp = (values, weights, n, target) => {
  //base case: when we cannot have take more items
  if (target < 0) {
    return Number.MIN_SAFE_INTEGER;
  }

  //base case: when no items are left or capacity becomes 0
  if (n < 0 || target === 0) {
    return 0;
  }

  // pick current item n in knapSack and recur for
  // remaining items (n - 1) with reduced capacity (weight - weights[n])
  let include =
    values[n] + ksBottomUp(values, weights, n - 1, target - weights[n]);

  // leave the current item n from knapSack and recur for
  // remaining items (n - 1)
  let exclude = ksBottomUp(values, weights, n - 1, target);

  // return maximum value we get by picking or leaving the current item
  return Math.max(include, exclude);
};

let z = ksBottomUp([5, 3, 5, 3, 2], [1, 2, 4, 2, 5], 4, 10);
console.log(z);

// using DP

const knapSack = (values, weights, target) => {
  // T[i][j] holds the max value of knapsack
  let T = new Array(values.length + 1);
  for (let i = 0; i < T.length; i++) {
    T[i] = new Array(target + 1).fill(0);
  }

  // for ith item
  for (let i = 1; i <= values.length; i++) {
    // choose all weights from 0 to maximum capacity W

    for (let j = 0; j <= target; j++) {
      // base case: don't pick ith element if j-weights[i-1] is negative
      if (weights[i - 1] > j) {
        T[i][j] = T[i - 1][j];
      } else {
        // store the max value that we get by picking or leaving the i'th item
        T[i][j] = Math.max(
          T[i - 1][j],
          T[i - 1][j - weights[i - 1]] + values[i - 1]
        );
      }
    }
  }

  // return maximum value
  console.log(T[values.length][target]);

  return T[values.length][target];
};

knapSack([5, 3, 5, 3, 2], [1, 2, 4, 2, 5], 10);

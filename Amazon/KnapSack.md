<link href="../StudyPlan1_DS/style.css" rel="stylesheet" />
<h1>Dynamic Programming - Knapsack</h1>

<br/>

<h3>Knapsack  </h3>

<br/>

<ul>

<li> Given items with weight and a value,  how many items can we keep in the knapsack to maximize profit? Given a capacity C. Return the value of the items to maximize profit.</li>

<br/>

```
Weight 1 2 4 2 5
Value  5 3 5 3 2

Recursive Sol'n :

We start with the last element - [5,2] - do we put it in knapsack?
If yes - update n to n-1 : so n becomes 5 to 4, Capacity reduces by weight of [5,2] - becomes 5. Value is updated by value of last item - 0 + 2 = 2.
If no - n stays same : 5 , Capacity stays same. (10), value stays same (0).

Then go to next item, and make decision to put in knapsack or not.

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


ks([1,10,2],[5,10,3] , 10)

first
ks(2,10)
temp1 = ks(1,10)  >
                  temp1 = ks(0,10)  >
                        = 5            temp1 = ks(-1,10) returns 0
                                       temp2 = v[0] + ks(-1,10)
                                             = 5
                                       return 5

                  temp2 = 10 + ks(0,0) //ks(0,0) is 0 since C=0
                        = 10
                 return Math.max(0,10)
                 returns 10
temp1 = 10
temp2 = v[2] + ks(1,10-3)
temp2 = 3 + ks(1,7) > ks(1,7)
                      temp1 = ks(0,7) >
                                       temp1 = ks(-1,7) returns 0
                                       temp2 = v[n] + ks(-1,2)
                                             = 5 + 0
                                       temp2 = 5
                                       returns Math.max(0,5)
                                       returns 5
                      temp2 = v[n] + ks(-1,-3) // 0
                      temp2 = 10
                      return Math.max(5,10)
                      returns 10
return Math.max(10,10)

// final answer 10

ks([1,10,2],[5,10,3] , 11)

first
ks(2,11) >
          temp1 = ks(1,11) >
                            temp1=ks(0,11)>
                                          temp1=ks(-1,11) //0
                                          temp2=5+ks(-1,11-1) // 5
                                          returns 5
                            temp1 = 5
                            temp2 = 10 + ks(0,11-10)
                                  = 10 + ks(0,1) >
                                                  temp1 = 0
                                                  temp2 = 5+ks(-1,-4) // 0
                                                  temp2 = 5
                                                  returns 5
                           temp2 = 15
                           returns 15
         temp2 = 3 + ks(1,8) >
                              temp1 = ks(0,8) >
                                               temp1 = 0
                                               temp2 = 5 + 0
                                               returns 5
                              temp2 = 10 + ks(0,8-10) // 0 since c is neg
                              returns 10
        returns Math.max(15,10) which is 15


// final answer 15


ks([1, 2, 4, 2, 5], [5, 3, 5, 3, 2], 10);

First call :
knapsack(4,10)  >
temp1 = knapsack(3,10) >
                        temp1 = knapsack(2,10) >
                                //returned 8    temp1 = knapsack(1,10) > (returned 8)
                                                                        temp1 = knapsack(0,10) //returns 5
                                                                        temp2 = v[0] + knapsack(-1,10-5)
                                                                        return Math.max(5,8)
                                                                        returns 8
                                                temp2 = v[n] + knapsack(0,C-w[n])
                                                      = 3 + knapsack(0,10-2) // knapsack(0,8) returns 5
                                                      = 3 + 5 = 8
                                                Math.max(8,8)
                                                returns 8
                        temp2 = v[n] + knapsack(1,10-4)
                              = 5 + knapsack(1,6)  >
                                                    temp1 = knapsack(0,6) >
                                                          = 5             temp1 = knapsack(-1,6) returns 0
                                                    temp2 = v[1] +        temp2=v[0]+knapsack(-1,6-4)
                                                    knapsack(0,6-3)            = 5
                                                    temp2 = 3+5           return Math.max(0,5)
                                                          =8              returns 5
                                                    return max(5,8)
                                                    8
                            = 13
                        return Math.max(8,13)
                        returns 13
temp1 = 13
temp2 = v[4] + knapsack(3, C-w[n])
      = 2 + knapsack(3,5) >
                          temp1 = knapsack(2,5) >
                                                 temp1=ks(1,5)
                                                               > temp1 = ks(0,5)
                                                                                >

```

<br/>

</br>

<h3>Knapsack Solutions</h3>

<br/>

<li>Better Recursive Solution Bottom Up  </li>

</br>

```
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


```

</br>

<br/>

```
Above recursive sol'n is extremely slow, time complexity is exponential (2^^n).

Sol'n using DP :

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


```

<br/>

<li><span>continue</span> keyword ends the current iteration of a <k>while or for loop </k>and goes back to the true condition!  </li>

<li> <k>Explanation of Recursive Sol'n </k></li>

<br/>

```
Imagine a table of depth : weights.length+1 and breadth : capacity

So if we have 5 items and capacity is 7 - initialize array of length 6 and breadth 11
items:
values  - 2 2 4 5 3
weights - 3 1 3 4 2

l1 - l5 represent the items
first row ie empty with all 0's
starting from l1, if that particular item's weight can be fit depending on capacity (given by column), fill in the column with the value of the number.

If we don't include the current item , we look at cell above it. //  T[i - 1][j]

If we include the current item , we look at row above and the col capacity minus weight of previous item plus the value of current item
Given by:
T[i - 1][j - weights[i - 1]] + values[i - 1]

For ex- we see start with l1, see col 1 is < 3, put 0. Col 2 is < 3 , put 0. Col 3 finally has enough capacity for weight of item 1 (which is 3) , so put down 2 - which is the value for item 1.

        0 1 2 3 4 5 6 7
Empty 0 0 0 0 0 0 0 0 0
i1    1 0 0 0 2 2 2 2 2
i2    2 0
i3    3 0
i4    4 0
i5    5 0

Moving on to item 2 , the weight is 2.
We can fill in col 1 and col 2 and col 3 with 2.
When we get to col 4, we see there is enough space to fill in item 2 as well as item 1 since capacity is 4. So we fill in 2 and the entry from cell above it from item 1 row, which is 2. So we fill in 4 for col 4.

        0 1 2 3 4 5 6 7
Empty 0 0 0 0 0 0 0 0 0
i1    1 0 0 0 2 2 2 2 2
i2    2 0 2 2 2 4 4 4 4
i3    3 0
i4    4 0
i5    5 0



Moving on to item 3 , the weight is 3.
If an item weight cannot fit, fill it in with the value from the cell above it.
So we fill in cells for col 1,2 with 2 from above.
For col 3, weight of item 3 is 3 and value is 4, which is improvement from val of 2 from before.
So change col 3 to 4.
Here, we can fit items from row above it, as well as item 3 with weight 3. So fill in 4 + value of item 3 which is 4. So 4+4=8

        0 1 2 3 4 5 6 7
Empty 0 0 0 0 0 0 0 0 0
i1    1 0 0 0 2 2 2 2 2
i2    2 0 2 2 2 4 4 4 4
i3    3 0 2 2 4 6 6 6 8
i4    4 0
i5    5 0


```

<br/>

<li><k>474. Ones and Zeroes</k>  </li>
</br>

```
You are given an array of binary strings strs and two integers m and n.

Return the size of the largest subset of strs such that there are at most m 0's and n 1's in the subset.

A set x is a subset of a set y if all elements of x are also elements of y.



Example 1:

Input: strs = ["10","0001","111001","1","0"], m = 5, n = 3
Output: 4
Explanation: The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.
Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.
{"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3.
Example 2:

Input: strs = ["10","0","1"], m = 1, n = 1
Output: 2
Explanation: The largest subset is {"0", "1"}, so the answer is 2.
```

</br>

</br>

```
var findMaxForm = function(S, M, N) {
    let dp = Array.from({length:M+1},() => new Uint8Array(N+1))
    for (let i = 0; i < S.length; i++) {
        let str = S[i], zeros = 0, ones = 0
        for (let j = 0; j < str.length; j++)
            str.charAt(j) === "0" ? zeros++ : ones++
        for (let j = M; j >= zeros; j--)
            for (let k = N; k >= ones; k--)
                dp[j][k] = Math.max(dp[j][k], dp[j-zeros][k-ones] + 1)
    }
    return dp[M][N]
};
```

</br>

<li>  </li>
<li>  </li>
<li>  </li>

</ul>

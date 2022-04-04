<link href='style.css' rel='stylesheet' />

<h1> Medium LC </h1>

<ul>
<li> <k>3. Longest Substring Without Repeating Characters  </k> </li>
<li>Given a string s, find the length of the longest substring without repeating characters.

</li>

<br/>

```
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

KEY TEST CASE :

Input: s = "dvdf"
Output: 3

```

<br/>

<br/>

```
Sol'n:

left 0
map['a'] 0

dvfaaa

dvaed

var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left=0,right=0;
    let longest=0;
    while(right < s.length){
        if(!set.has(s.charAt(right))){
            set.add(s.charAt(right))
            longest = Math.max(set.size,longest)
            right++;
        }else{
            set.delete(s.charAt(left));
            left++;
        }
    }
    return longest;
};



```

<br/>

<li> <k>Recursion - 77.Combinations</k> </li>
<li> Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

You may return the answer in any order. </li>

<br/>

```
Example 1:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
Example 2:

Input: n = 1, k = 1
Output: [[1]]

// Basically combination means [2,4] also covers the combo [4,2]

Sol'n:

var combinations(n , k) {
    let results = [];

    function comboBreaker(currCombo , combo=[]) {
        if (combo.length===k) {
            results.push([...combo]);
            return;
        }
        for (let i=currCombo;i<=n;i++) {
            combo.push(i);
            comboBreaker(i+1 , combo );
            combo.pop();
        }
    }

    comboBreaker(1 , []);
}

comboBreaker(1,[])
    comboBreaker(2,[1])
        comboBreaker(3 , [1,2]) -> pushes arr and returns and pops off array
        comboBreaker(3 , [1,3]) -> pushes arr and returns and pops off array
        comboBreaker(3 , [1,4]) -> pushes arr and returns and pops off array
    comboBreaker(3,[2])
        comboBreaker(3 , [2,3]) -> pushes arr and returns and pops off array
        comboBreaker(3 , [2,4]) -> pushes arr and returns and pops off array
    comboBreaker(4,[3])
        comboBreaker(3 , [3,4]) -> pushes arr and returns and pops off array


```

<br/>

<li> <k>695. Max Area of Island</k> </li>
<li>You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0. </li>

<br/>

```
Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.

Own Solution : Successful

var maxAreaOfIsland = function(grid) {

    let currMax = 0;
    let max = 0;


    for (let i=0;i<grid.length;i++) {
        for (let k=0;k<grid[0].length;k++) {
            if (grid[i][k]===1) {
                checkIslands(i,k);
                max = Math.max(max,currMax);
                currMax=0;
            }
        }
    }
    return max;

    function checkIslands(index1 , index2) {
        if (grid[index1][index2] === 1) {
            currMax++;
            grid[index1][index2] = 2;
        }
        if (index1-1>=0 && grid[index1-1][index2]===1) checkIslands(index1-1,index2);
        if (index1+1<grid.length && grid[index1+1][index2]===1) checkIslands(index1+1,index2);
        if (index2-1 >=0 && grid[index1][index2-1]===1) checkIslands(index1,index2-1);
        if (index2+1 <=grid[0].length && grid[index1][index2+1]===1)  checkIslands(index1,index2+1);

    }
};


```

<br/>

<li><k>2. Add Two Numbers</k>  </li>

</br>

```
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

9 9 9 9 9 9 9
      9 9 9 9
      ----
1 0 0 0 9 9 9 8

9821
439
3222

1289
 934

999
54
44


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
     var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1!==null||l2!==null||sum>0){

        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;

    }

    return List.next;

};
```

</br>

<li> <k>4. Median of Two Sorted Arrays</k> <em>hard</em> </li>

</br>

```
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Accepted O(logn) Sol'n:
var findMedianSortedArrays = function(nums1, nums2) {
  let totalLen = nums1.length + nums2.length;
  let idx1 = 0;
  let idx2 = 0;
  let curr;
  let last;

  while (idx1 + idx2 <= totalLen/2) {
    if (curr!==undefined) {
      last = curr;
    }
    let elOne = nums1[idx1];
    let elTwo = nums2[idx2];
    if (elOne === undefined) {
      curr = elTwo;
      idx2++;
    } else if (elTwo === undefined) {
      curr = elOne;
      idx1++;
    } else if (elOne < elTwo) {
      curr = elOne;
      idx1++;
    } else {
      curr = elTwo;
      idx2++;
    }
  }
  return totalLen % 2 === 0 ? (last + curr) / 2 : curr;
};

Own Solution O(n) not accepted :

var findMedianSortedArrays = function (nums1, nums2) {
  let mergedArr = [];
  let median;
  mergeSort(nums1, nums2);
  // console.log(mergedArr);
  if (mergedArr.length % 2 === 0) {
    median =
      (mergedArr[mergedArr.length / 2] + mergedArr[mergedArr.length / 2 - 1]) /
      2;
  } else median = mergedArr[Math.floor(mergedArr.length / 2)];

  // console.log(median);
  return median;

  function mergeSort(arr1, arr2) {
    let p1 = 0;
    let p2 = 0;
    // 1 2 9   3 4 5 6 7
    // 1 2 3   4
    // 1 1 2   2 2 3
    while (p1 < arr1.length && p2 < arr2.length) {
      if (arr1[p1] <= arr2[p2]) {
        mergedArr.push(arr1[p1]);
        p1++;
      } else {
        mergedArr.push(arr2[p2]);
        p2++;
      }
    }
    if (p1 >= arr1.length) {
      for (let i = p2; i < arr2.length; i++) {
        mergedArr.push(arr2[i]);
      }
    } else {
      for (let i = p1; i < arr1.length; i++) {
        mergedArr.push(arr1[i]);
      }
    }
  }
};

findMedianSortedArrays([1, 5, 12], [5, 6, 7, 20]);

```

</br>

</br>

```
Given a string s, return the longest palindromic substring in s.



Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"


```

</br>

<li><k>5. Longest Palindromic Substring</k>  </li>

</br>

```
Given a string s, return the longest palindromic substring in s.



Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"


```

</br>

</br>

```
Optimal Answer:

// Expand Around Center solution
// T O(N^2)
// S O(1)
var longestPalindrome = function(s) {
  var max = '';
  for (var i = 0; i < s.length; i++) {
    // this loop is to take into account
    // different palindromes like 'aba' and 'abba'
    for (var j = 0; j < 2; j++) {
      var left = i;
      var right = i + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      // here imagine we get into string like
      // "sabbad", then
      // right = 5
      // left = 0
      // and actual length of "abba" should be "4"
      // 5 - 0 - 1 === 4
      if ((right - left - 1) > max.length) {
        max = s.substring(left + 1, right);
      }

    }
  }
  return max;
};

Own Ans: TERRIBLE Big O

var longestPalindrome = function(s) {
     let max = s[0];
    if (s.length===1) return s;
  for (let i = 0; i < s.length; i++) {
    let x = s.slice(0, s.length + 1);
    let last = x.lastIndexOf(s[i]);
    // abcbbd
    while (i !== last) {
      isPalindrome(i, last);

      last = x.slice(0, last).lastIndexOf(s[i]);
    }

    // console.log("s[i]", `${s[i]}`, "i:", i, `last:`, last);
  }

  console.log(max);
  return max;

  function isPalindrome(start, end) {
    let origin = start;
    let parse = end;
    while (start < end) {
      // console.log("start is", start, "end is", end);

      if (s[start] === s[end]) {
        start++;
        end--;
      } else return;
    }
    let pal = s.slice(origin, parse + 1);
    if (pal.length > max.length) max = pal;
    // console.log("pal", pal, "max", max);
  }
};

```

</br>

<li>  <k>31. Next Permutation</k></li>

</br>

```
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are considered permutations of arr: [1,2,3], [1,3,2], [3,1,2], [2,3,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.



Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]
```

</br>

</br>

```
// Ex
[1 , 5 , 8 , 4 , 7 , 6 , 5 , 3 , 1]

From the right , we need to find first number that is actually decreasing

We can see it is 4 - 1>3>5>6>7> then 4 is decreasing

So we swap 4 with the FIRST ELEMENT that is just greater than it FROM THE RIGHT which is 5

And we swap the elements 4 and 5 , and then reverse the order of elements AFTER 5 to get our answer

//step1 find first decreasing elem
             s
[1 , 5 , 8 , 4 , 7 , 6 , 5 , 3 , 1]

//step2 swap that elem with the first elem JUST bigger than it from the END
             s          sw
[1 , 5 , 8 , 4 , 7 , 6 , 5 , 3 , 1]
becomes
[1 , 5 , 8 , 5 , 7 , 6 , 4 , 3 , 1]

//then reverse the order of elements after the item we swapped
Then swap this to get answer
                 x---------------x
[1 , 5 , 8 , 5 , 7 , 6 , 4 , 3 , 1]

Answer
[1 , 5 , 8 , 5 , 1 , 3 , 4 , 6 , 7]


// Note that for an array that is all decreasing there is no next larger rearrangement
[5 , 4 , 3 , 1]
// no larger so we just swap to get
// in this case no need there is no decreasing element from right so start will be -1
// so we only swap if start>=0
// so in this case we only reverse the array from start + 1
[1 , 3 , 4 , 5]

Sol'n:

/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    // func to swap
    const swap = (index1 , index2) => {
        [nums[index1] , nums[index2]] = [nums[index2] , nums[index1]]
    }
    const reverse = (startIndex , endIndex) => {
        while (startIndex < endIndex) {
          [nums[startIndex] , nums[endIndex]] = [nums[endIndex] , nums[startIndex]]
            startIndex++
            endIndex--
        }
    }
    let start:number = nums.length - 2

    while (start>=0 && nums[start] >= nums[start+1]) {
        start--
    }

  // if start is -1, that means we had pure decreasing array such as 3 2 1
  if (start >=0) {
       let end = nums.length-1;
       while (nums[end]<= nums[start]) {
        end--
    }
    // swap positions
    swap(start,end)
    }
    // reversing elems to right of start
    reverse(start+1 , nums.length-1)

    // no need to return since solution wants in place
};

```

</br>

<li>  </li>

<li>  </li>

<li>  </li>

<li>  </li>

<li>  </li>

<li>  </li>

<li>  </li>

<li>  </li>
</ul>

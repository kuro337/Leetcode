<link href="../StudyPlan1_DS/style.css" rel="stylesheet" />
<h1> AWS Study Guide </h1>

<br/>

<ul>

<li>Important Questions  </li>

```
I've compiled a list of Amazon questions people have been asked who have had 3 virtual interviews for SDE 1:
Two Sum (#1)
Median of Two Sorted Arrays * (#4) .
Longest Palindromic Substring (#5) .
String to Integer (atoi) (#8) .
Integer to Roman (#12) .
Roman to Integer (#13) .
Valid Parentheses (#20) .
Merge K Sorted Lists (#23) .
Valid Sudoku (#36)
Combination Sum (#39) .
Permutations (#46) .
Merge Intervals (#56) .
Rotate List (#61) .
Word Search (#79) .
Validate Binary Search Tree(#98) .
Same Tree ~ (#100) .
Symmetric Tree ~ (#101) .
Binary Tree Level Order Traversal (#102) .
Convert Sorted List to Binary Search Tree (#109)
Populating Next Right Pointers in Each Node (#116)
Best Time to Buy and Sell Stock (#121)
Word Ladder II (#126)
Word Ladder (#127) .
LRU Cache (#146)
Min Stack (#155)
Number of Islands (#200) .
Isomorphic Strings (#205)
Course Schedule (#207)
Course Schedule II (#210)
Integer to English Words (#273)
Game of Life (#289)
Find Median from Data Stream (#295)
Longest Increasing Subsequence (#300)
Design Tic-Tac-Toe (#348)
Pacific Atlantic Water Flow (#417)
Minesweeper (#529)
Diameter of Binary Tree (#543)
Reorganize String (#767)

* not required to solve
~ solve both iteratively and recursively



```

<br/>
<br/>

<li> Number Islands , Level Order Tree Traversal , Word Series (Word Ladder 1 and 2 , Word Break 1 and 2 , Word Search 1 and 2) </li>

<li><k>OOD Questions </k> <ol>  
<li>Unix File System File Search API  </li>
<li>Parking Lot  </li>
</ol>  </li>
<li> <k>How is Hash Table Implemented?</k> </li>
<li> <k>How is Caching Implemented?</k> </li>
<li> <k>Explain and implement a Trie </k></li>
<li> <k>Inheritance vs Composition</k> </li>
<li> <k> Explain and give examples for Design Patterns </k> </li>
<li> <k>Difference and similarity between List , Linked List , Array  </k> </li>
<li> <k> Bar Raiser </k> </li>

</br>

```
Given a set of N integers find the kth largest contiguous subarray sum.
Questions on OS like describe the boot up process of OS.
Difference between caching, paging and buffering.
Difference between stack and heap memory, calloc and malloc, etc.
Things to keep in mind while designing a software product (scalability, memory leaks, deadlocks).

```

</br>

<li> <k> Implement Dijkstra's </k> </li>
<li> <k> Parking Lot OOD </k> 
<ol>
<li>There are 3 parking areas (each of different sizes) for 3 different vehicle sizes - small, medium and large.  </li>
<li>Small one can accommodate only small vehicles, medium can accommodate small and medium vehicles and similarly for the large one.
  </li>
<li>Design a system which issues a parking ticket to a vehicle entering the lot with the optimal parking space allotted to it. For eg., if a medium vehicle arrives and both medium and large parking areas have vacant spaces, the vehicle should be allotted the medium slot.
  </li>
<li> Also design a syntax for the token ID which is generated when each vehicle enters the lot. The ID should be uniquely able to determine the details of the slot where the vehicle is parked for smooth parking and un-parking.
 </li>
<li>Provide the class design of the same.
  </li>
</ol>
</li>

<br/>

```


```

<br/>

<li> <a href="https://www.geeksforgeeks.org/subtree-given-sum-binary-tree/">Subtree with given sum in a Binary Tree </a> </li>
<li>Implement Queue using stack  </li>
<li>Difference between set , hashmap , list  </li>
<li>  </li>
<li>  </li>
<li>  </li>

</ul>

<br/>

<hr>
<hr>

<br/>

<h3> Solutions + Implementations </h3>

<br/>

<ul>
<li><k> #8. String To Integer </k>   </li>

<li> Regex to find first index of <k>digit</k> or <k>NON digit</k> in a string :

 </li>

<li><code><b>'123a'.match(/\d/)</b> returns array with result ['1', index:0,input:'123a',groups:undefined] </code> </li>
<li><code>'123a'.match(/\D/) returns array with result ['a', index:3,input:'123a',groups:undefined] </code> </li>
<li> <k>Returning the index of a regex match - use <b>search()</b></k> </li>
<li><code> '123a'.search(/\D/) returns 3 </code>  </li>
<li> <k>Replacing all occurences in a string using Regex </k>  </li>
<li><code> '00000123'.replace(/0/g , '') </code>  </li>
<li> <k>Finding index of first digit from 1-9 </k>  </li>
<li><code>str.search(/[1-9]/) </code>  </li>

<li><b>Extremely Useful Function - <k>parseInt(str)</k> </b> </li>
<li><span>parseInt('000025') // 25 </span>  </li>
<li><span>parseInt('abc025!!!   ') // NaN </span>  </li>
<li><span>parseInt('25abc') // 25 </span>  </li>
<li><span>parseInt('    25abc') // 25 </span>  </li>
<li><k>Note about ParseInt :</k>

<ol> 
<li>parseInt() returns NaN if the first non space character is a non digit.   </li>
<li>Ex: <span>parseInt('   a200') or parseInt('!123') will return NaN  </li>
<li>However, just normal whitespace is fine.   </li>
<li> Ex: <span> parseInt('   1234') returns 1234 </span> </li>
<li> parseInt also gets RID of any Zero's before our Int </li>
</ol>
 </li>

<li><span>NaN || 0 returns 0 </span> </li>
<br/>

```
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.


Example 1:

Input: s = "42"
Output: 42
Explanation: The underlined characters are what is read in, the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^
The parsed integer is 42.
Since 42 is in the range [-231, 231 - 1], the final result is 42.
Example 2:

Input: s = "   -42"
Output: -42
Explanation:
Step 1: "   -42" (leading whitespace is read and ignored)
            ^
Step 2: "   -42" ('-' is read, so the result should be negative)
             ^
Step 3: "   -42" ("42" is read in)
               ^
The parsed integer is -42.
Since -42 is in the range [-231, 231 - 1], the final result is -42.
Example 3:

Input: s = "4193 with words"
Output: 4193
Explanation:
Step 1: "4193 with words" (no characters read because there is no leading whitespace)
         ^
Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
             ^
The parsed integer is 4193.
Since 4193 is in the range [-231, 231 - 1], the final result is 4193.

```

<br/>

<li><b>Sol'n:</b>  </li>

<br/>

```
// Own Soln : Good Speed , Bad Memory Usage

var myAtoi = function (s) {
  let str = s.trim();
  str = str.slice(0);
  let sign = null;
  if (str[0] === "-") sign = "neg";
  if (str[0] === "+") sign = "pos";
  if (sign) str = str.slice(1);
  let locNonDigit = str.search(/\D/);
  if (locNonDigit !== -1) str = str.slice(0, locNonDigit);
  str = str.slice(str.search(/[1-9]/));

  str = greaterThan(str);
  sign === "neg" ? (str = -Number(str)) : (str = Number(str));

  console.log(str);

  return str;

  function greaterThan(num) {
    if (!num.length) return 0;
    let lowerBoundary = "2147483648";
    let upperBoundary = "2147483647";
    let numStr = num + "";
    if (sign === "neg") {
      if (numStr.length < lowerBoundary.length) return num;
      else if (numStr.length > lowerBoundary.length) {
        return 2147483648;
      } else {
        for (let i = 0; i < numStr.length; i++) {
          if (numStr[i] > lowerBoundary[i]) return 2147483648;
          else if (numStr[i] < lowerBoundary[i]) return num;
        }
      }
      return num;
    } else {
      if (numStr.length < upperBoundary.length) return num;
      else if (numStr.length > upperBoundary.length) {
        return 2147483647;
      } else {
        for (let i = 0; i < numStr.length; i++) {
          if (numStr[i] > upperBoundary[i]) return 2147483647;
          else if (numStr[i] < upperBoundary[i]) return num;
        }
      }
      return num;
    }
  }
};

```

<br/>

</br>

```
Optimal Sol'n:

One Liner - wtf...

var myAtoi = function(s) {
   return Math.max(Math.min(parseInt(s) || 0, 2147483647), -2147483648)
};

Explanation :

NaN || 0 returns 0

Extremely Useful Function - parseInt(str)

parseInt('000025') // 25

parseInt('abc025!!!   ') // NaN

parseInt('25abc') // 25

parseInt('    25abc') // 25

Note about ParseInt

parseInt() returns NaN if the first non space character is a non digit.

Ex: parseInt('   a200') or parseInt('!123') will return NaN

However, just normal whitespace is fine.

Ex:  parseInt('   1234') returns 1234

parseInt also gets RID of any Zero's before our Int


```

</br>

<li> <k>20. Valid Parentheses</k>  </li>

</br>

```
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
```

</br>

</br>

```
Sol'n :

var isValid = function(s) {
    const stack = [];
    const map = {
      '(': ')',
      '[': ']',
      '{': '}'
    }

    for (let i = 0 ; i < s.length ; i++) {
        let c = s[i];
        if (map[c]) {
          stack.push(map[c])
        } else if (c !== stack.pop()) {
          return false;
        }
    }

    return !stack.length;
};

```

</br>
<li> <k>23. Merge K Sorted Lists <em>hard</em></k>  </li>

</br>

```
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.



Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []

```

</br>

</br>

1 2 3 4

```
function mergeLists(a, b) {
    const dummy = new ListNode(0);
    let temp = dummy;
     while (a !== null && b !== null) {
         if (a.val < b.val) {
             temp.next = a;
             a = a.next;
         } else {
             temp.next = b;
             b = b.next;
         }
         temp = temp.next;
     }
    if (a !== null) {
        temp.next = a;
    }
    if (b !== null) {
        temp.next = b;
    }
    return dummy.next;
}

var mergeKLists = function(lists) {
    if (lists.length === 0 ) {
        return null;
    }
    // two two
    // priority queue
    while (lists.length > 1) {
        let a = lists.shift(); // the head will contains the "less" length list
        let b = lists.shift(); // acturally, we can use the linkedlist to replace it, the while loop will be the while( list.header.next !== null || lists.length > 0)
        const h = mergeLists(a, b);
        lists.push(h);
    }
    return lists[0];
};

```

</br>

<li><k>39. Combination Sum</k>   </li>

</br>

```
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.



Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []

```

</br>

</br>

```

var combinationSum = function(candidates, target) {
    const resArr = []

    const dfs = (i = 0, sum = 0, currentArr = []) => {
        if (sum > target) return
        if (sum === target) {
            resArr.push([...currentArr])
            return
        }
        for (let j = i; j < candidates.length; j++) {
            currentArr.push(candidates[j])
            dfs(j, sum + candidates[j], currentArr)
            currentArr.pop()
        }
    }

    dfs()
    return resArr
};

```

</br>

<li> <k>56. Merge Intervals</k>  </li>

</br>

```
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.



Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

```

</br>

</br>

```
var merge = function(intervals) {
    if(intervals.length < 2) return intervals
    intervals.sort((a,b) => a[0]-b[0])
    let result = []
    let prev = intervals[0]
    for(let i =1; i < intervals.length;i++){
        if(prev[1]>=intervals[i][0]){
            prev = [prev[0],Math.max(prev[1], intervals[i][1])]
        }else{
            result.push(prev);
            prev=intervals[i]
        }
    }
    result.push(prev)
    return result
};
```

</br>

<li>  <k>61. Rotate List</k> </li>

</br>

```
Given the head of a linked list, rotate the list to the right by k places.

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]



```

</br>

</br>

```
var rotateRight = function(head, k) {
  let tail = head;
  if (head === null) return head;
  let len = 1;
  while (tail.next) {  // we get the length and set tail as the last element
    tail = tail.next;
    len++;
  }
  tail.next = head;   // we connect the last element to the start of the list
  let count = len - (k % len);
  while (count > 0) {

    // from above 2 lines, list is connected to each other as the tail loops into the head.
    // now we just need to set the head as the true first element of the list
    // and then set tail.next to null for the true end of the list as it currently loops around

    head = head.next;
    tail = tail.next;
    count--;
  }
  tail.next = null;
  return head;
};
```

</br>

<li> <k><a href="https://leetcode.com/problems/word-search/">79. Word Search </a></k>  </li>

<br/>

```
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

```

<br/>

<br/>

```
Beautiful Sol'n :

const exist = (board, word) => {
  if (board.length === 0) return false;

  const h = board.length;
  const w = board[0].length;
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const go = (x, y, k) => {
    if (board[x][y] !== word[k]) return false;
    if (k === word.length - 1) return true;

    board[x][y] = "*"; // mark as visited
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      if (i >= 0 && i < h && j >= 0 && j < w) {
        if (go(i, j, k + 1)) return true;
      }
    }
    board[x][y] = word[k]; // reset
    return false;
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (go(i, j, 0)) return true;
    }
  }

  return false;
};

```

<br/>

<li> Amazon Mock  </li>

<li><k>456. 132 Pattern </k> </li>

</br>

```
[-1,3,2,0]
var find132pattern = function(nums) {

};

Explanation :

First - we create a new array and store the SMALLEST element from the original array.

This can simply be done by first adding the 1st element from nums into our array

let arr1 = [nums[0]]

Then we loop through nums and take Math.min of 1st item and each item after

for (let i=1;i<nums.length;i++) {
  arr1.push(Math.min(arr[i-1],nums[i]))
}

So our comparision array will look like:[-1,-1,-1,-1] //or if arr was [-1,-2,3,0] it'll be [-1,-2,-2,-2]

Then starting from the end of the array , we will check if :
nums[i] is greater than comparision array at i.
If it is not, then it was the smallest element from the array and elements before it are definitely not going to be smaller than it

If it is greater , we can proceed :

We have 1 while loop and an if loop that only execute if our second array is populated. First time, it will do nothing.
At end of the loop, push nums[i] into array 2. (we know it's not the smallest element)

In the first while loop , we pop off of array 2 if the latest element at array 2 is EQUAL TO or SMALLER than the item at array[i]. (the min value array) . We do this because if the latest item at arr2 is smaller or equal to the smallest item , then us checking the next condition won't satisfy the entire solution. Because in the next if condition , we return true.

Now , in the FOR LOOP - we just need to confirm that the next element in our backwards loop (2nd last) is BIGGER than the item we put in array 2.

in other words, that the last item in array 2 is smaller than item at nums[i] - because we already know that the last item num[i] and 2nd last item nums[i-1] is greater than the smallest item.

Thus, we can return true.

arr1 represents 1st element
arr2 represents last element
nums[j] represents middle element

For ex array [1 , 3 , -1 , 2] // 1 3 2 satisfies our condition
arr 1 will be [1 , 1 , -1 , -1]

when we start for loop at nums.length , first we'll check if nums[j] is bigger than index j at comparison nums array. if it is :
push 2 to arr2
arr2 will be [2]

then we check current element (only after confirming it's bigger than smallest - index j at arr1)
current element in backwards loop is -1  - so it is NOT BIGGER , hence we skip this for loop

again, check current element - it is 3 AND it is bigger than index j at comparison array (3>1)

now we just need to check is curr element greater than item from arr2 - if it is return true.
arr2 has [2], curr element is 3 , and we know all elements in arr2 and current element have a smaller item before them  , so RETURN TRUE!





```

</br>

<br/>

```
Sol'n passed 85% test cases :

var find132pattern = function(nums) {
    // i < j < k
    // n[i] < n[k] < n[j]
    let results = [];
    count(0,[]);
    console.log(results)
    if (results.length) return true
    else return false

    function count(start,arr) {
        if (arr.length===3) {
            if (arr[0] < arr[1] && arr[1] > arr[2] && arr[2] > arr[0]) {
                results.push([...arr]);
            return true }
            else return false
        }
    for (let i=start;i<nums.length;i++) {
        arr.push(nums[i])
        console.log(start,arr)
        if (count(i+1,arr)) return true
        arr.pop()
    }

    }

};

Official :

var find132pattern = function(nums) {
    // sanity check
    if (nums.length < 3) return false;

    let N2 = []; // potential candidates, number 2
    let N1 = [nums[0]]; // the smallest number, number 3

    for (let i=1;i<nums.length;i++) {
        N1.push(Math.min(N1[N1.length-1], nums[i]));
    }

    for (let i=nums.length-1;i>=0;i--) { // number 3
        if (nums[i] > N1[i]) {
            // remove useless N2 candidates
            while (N2.length!=0 && N2[N2.length-1] <= N1[i]) N2.pop();
            // found a pattern
            if (N2.length!=0 && N2[N2.length-1] < nums[i]) return true;
            N2.push(nums[i]);
        }
    }
    return false;
}

```

<br/>

<br/>

```
Failing on TC :
[-10,-10,-9,-10,-10,-10,-10,-9,-10,-9,-10,-9,-10,-10,-10,-9,-9,-9,-10,-10,-10,-9,-10,-10,-10,-9,-9,-9,-9,-10,-10,-9,-9,-9,-10,-9,-10,-10,-10,-9,-10,-10,-9,-10,-10,-9,-9,-9,-10,-9,-10,-9,-10,-10,-9,-9,-10,-10,-9,-9,-9,-10,-9,-10,-10,-10,-9,-9,-10,-9,-10,-10,-9,-10,-10,-10,-10,-9,-10,-10,-10,-10,-10,-9,-9,-9,-10,-10,-9,-9,-9,-9,-9,-9,-10,-10,-10,-10,-9,-9,-10,-10,-10,-9,-9,-10,-9,-10,-10,-9,-9,-9,-10,-10,-10,-9,-10,-10,-10,-10,-9,-9,-9,-10,-10,-9,-9,-9,-10,-10,-9,-9,-10,-9,-10,-10,-9,-9,-9,-10,-9,-9,-9,-10,-10,-9,-9,-10,-10,-10,-9,-10,-10,-10,-10,-10,-10,-10,-10,-9,-10,-10,-9,-9,-9,-10,-10,-9,-9,-9,-10,-9,-9,-10,-9,-9,-10,-10,-9,-9,-10,-10,-10,-10,-10,-10,-9,-9,-9,-10,-10,-10,-9,-10,-9,-10,-10,-10,-10,-9,-9,-9,-10,-9,-9,-9,-9,-9,-9,-10,-10,-9,-9,-9,-10,-9,-10,-10,-10,-9,-9,-9,-9,-9,-10,-9,-10,-9,-9,-9,-9,-9,-9,-9,-10,-10,-10,-10,-9,-9,-10,-10,-9,-10,-10,-9,-9,-9,-9,-10,-10,-10,-9,-9,-9,-9,-10,-10,-9,-9,-10,-9,-9,-10,-9,-9,-10,-10,-10,-10,-10,-9,-10,-9,-9,-9,-9,-10,-10,-10,-9,-10,-10,-10,-10,-10,-9,-9,-10,-10,-10,-10,-9,-9,-9,-10,-9,-10,-10,-10,-9,-10,-9,-9,-10,-9,-9,-10,-9,-10,-10,-9,-9,-10,-9,-10,-10,-10,-10,-10,-9,-9,-10,-10,-10,-9,-10,-9,-10,-9,-10,-9,-9,-9,-10,-9,-10,-9,-9,-9,-10,-10,-10,-10,-10,-9,-10,-9,-10,-9,-9,-10,-10,-9,-9,-9,-10,-9,-10,-10,-10,-9,-10,-9,-10,-9,-10,-9,-10,-9,-10,-10,-10,-9,-10,-9,-9,-10,-10,-10,-10,-9,-10,-10,-9,-10,-10,-9,-10,-10,-10,-10,-9,-9,-9,-9,-10,-9,-9,-9,-9,-10,-9,-10,-10,-10,-10,-9,-10,-10,-10,-9,-9,-10,-9,-10,-10,-9,-9,-10,-9,-10,-9,-10,-9,-10,-9,-10,-9,-9,-9,-10,-10,-10,-10,-9,-9,-9,-10,-9,-9,-10,-9,-9,-9,-9,-9,-10,-9,-9,-9,-9,-10,-10,-10,-9,-9,-9,-9,-9,-10,-10,-9,-9,-10,-10,-10,-10,-10,-10,-9,-10,-10,-9,-9,-10,-10,-10,-9,-10,-9,-10,-10,-9,-9,-10,-10,-9,-10,-10,-9,-10,-10,-10,-9,-9,-10,-10,-10,-10,-10,-10,-10,-9,-9,-9,-10,-9,-10,-10,-10,-9,-10,-10,-9,-9,-10,-9,-9,-9,-10,-10,-9,-10,-9,-9]

[-2,1,2,-2,1,2]

[1 , 1 , 1 , 1]
[1 , 2 , 3 , 4]

4

[-1 , -1 , -1 , -1]
[-1 , 3 , -1 , -1]

0

```

<br/>

```
Given an array nums of integers and integer k, return the maximum sum such that there exists i < j with nums[i] + nums[j] = sum and sum < k. If no i, j exist satisfying this equation, return -1.



Example 1:

Input: nums = [34,23,1,24,75,33,54,8], k = 60
Output: 58
Explanation: We can use 34 and 24 to sum 58 which is less than 60.
Example 2:

Input: nums = [10,20,30], k = 15
Output: -1
Explanation: In this case it is not possible to get a pair sum less that 15.

```

</br>

```
var twoSumLessThanK = function(A, K) {
    A.sort((a,b)=>a-b)

    var start = 0;
    var end = A.length -1;
    var result = -1;

    while(start<end){
        var sum = A[start]+A[end]
        if(sum > result && sum < K){
            result = sum;
        }
        sum > K ? end-- : start++
    }
    return result;
};

Failing on TC :
[254,914,110,900,147,441,209,122,571,942,136,350,160,127,178,839,201,386,462,45,735,467,153,415,875,282,204,534,639,994,284,320,865,468,1,838,275,370,295,574,309,268,415,385,786,62,359,78,854,944]
200
```

</br>

<li>  <k> 205.Isomorphic Strings</k></li>

<br/>

```
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.



Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true


var isIsomorphic = function(s, t) {
    var obj = {};

    for(var i = 0; i < s.length; i++){
        if(!obj['s' + s[i]]) obj['s' + s[i]] = t[i];
        if(!obj['t' + t[i]]) obj['t' + t[i]] = s[i];
        if(t[i] != obj['s' + s[i]] || s[i] != obj['t' + t[i]]) return false;
    }
    return true;
};

```

<br/>
<li> <k>290.Word Pattern</k>  </li>

<br/>

```
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.



Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

Tip : text = "hello world sirz memes" can be split into an array using .split()
arr = text.split(" ") ['hello','world']

 */
var wordPattern = function(pattern, s) {
    const dict = {};
    const reverseDict = {};
    const words = s.split(' ');

    if ( pattern.length !== words.length ) {
        return false;
    }

    for ( let i = 0; i < words.length; i++ ) {
        const word = words[i];
        const letter = pattern[i];
        if ( ! dict[letter] && ! reverseDict[word] ) {
            dict[letter] = word;
            reverseDict[word] = letter;
        }
        if ( dict[letter] !== word || reverseDict[word] !== letter ) {
            return false;
        }
    }

    return true;
};

```

<br/>

<li><k>127. Word Ladder <em>HARD</em></k>   </li>

<br/>

```
A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.



Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
Example 2:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

```

<br/>

<br/>

```


```

<br/>

<li> <b>If we want to print the letters from a - z we can do </b>  </li>

</br>

```
for (let i=0;i<25;i++) {
  console.log(String.fromCharCode(97+i))
}

The character code of a is 97

Then all following a are 98, 99 , etc.

"a".charCodeAt(0)  returns char code for string provided at index provided

String.fromCharCode(97) returns a string with the charcode

```

</br>

</br>

```
var ladderLength = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) {
    return 0;
  }
  wordSet.delete(beginWord);

  let q1    = [beginWord], q2 = [endWord];
  let count = 0;

  while (q1.length && q2.length) {
    count++;
    if (q1.length > q2.length) {
      // Ensure that q1 is the shorter; align the sets with the queues
      [ q1, q2 ] = [ q2, q1 ];
    }

    const set1  = new Set(q1), set2 = new Set(q2);
    let len = q1.length;

    while (len--) {
        const str = q1.shift(); // take first word from shorter queue
        set1.delete(str);       // delete it from the associated set

        let i = str.length;
        while (i--) {
          // For each letter...
          for (let j = 97; j <= 122; j++) {
            const cur = `${str.slice(0, i)}${String.fromCharCode(j)}${str.slice(i + 1)}`;

            if (set2.has(cur)) {
              return count + 1;
            }

            if (wordSet.has(cur)) {
              q1.push(cur);
              set1.add(cur);

              wordSet.delete(cur);
            }
          }
        }
    }
  }

  return 0;
};

Easier to follow Sol'n :

function ladderLength(beginWord, endWord, wordList) {
  let len = 1;
  let queue = [beginWord];
  const dict = new Set(wordList);
  const seen = new Set(queue);

  while (queue.length) {
    const next = [];
    for (let v of queue) {
      if (v === endWord) {
        return len;
      }

      const arr = v.split('');
      for (let i = 0; i < arr.length; i++) {
        for (let d = 0; d < 26; d++) {
          arr[i] = String.fromCharCode(97+d);
          const nv = arr.join('');
          if (!seen.has(nv) && dict.has(nv)) {
            next.push(nv);
            seen.add(nv);
          }
          arr[i] = v[i];
        }
      }
    }
    queue = next;
    len++;
  }

  return 0;
}


```

</br>

<li>   </li>

<li>   </li>

<li>   </li>

<li>   </li>

<li>   </li>

<li>   </li>

<li>   </li>

<li>   </li>

<li>   </li>

<li>   </li>
</ul>

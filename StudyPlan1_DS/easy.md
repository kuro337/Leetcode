<link href="style.css" rel="stylesheet" />

<h1> LeetCode Problems </h1>

<ul>
<li> Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.</li>

```
Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

Solution :


var sortedSquares = function(A) {
    let result = [];
    let l = 0;
    let r = A.length - 1;
    let p = r;

    while (l <= r) {
        if (A[l] ** 2 > A[r] ** 2) {
            result[p--] = A[l++] ** 2;  // p and l increment , decrement after the operation
        } else {
            result[p--] = A[r--] ** 2;
        }
    }

    return result;
};

```

<br/>

<li>Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4] </li>

<br/>

```
/*
Solution:
1. Reverse the entire array.
2. Reverse the first k elements.
3. Reverse the rest.
*/

// Super Short but not good performance solution

var rotate = function(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
};

// Awesome solution with good performance :

var rotate = function(nums, k) {
   k %= nums.length // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts

   let reverse = function(i, j){
    while(i < j){
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
        i++
        j--
    }
   } // suppose  ----->--->
	reverse(0, nums.length-1); // reverse   <--<------
	 reverse(0, k-1) // reverse first part ---><----
   reverse(k, nums.length-1)// reverse second part --->----->

};

[1,2,3,4,5,6,7]

reverse(0, 6) turns it into:
[7,6,5,4,3,2,1]

After reverse(0,k-1) = reverse(0,2)

[5,6,7,4,3,2,1]

After reverse(k , nums.length - 1) = reverse(3 , 6)

[5,6,7,1,2,3,4];


```

<br/>

<li> To return length of a set, we use <span>set.size</span> , for arrays we use <span>array.length</span> </li>
<li> Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1

https://leetcode.com/problems/maximum-subarray/discuss/?currentPage=1&orderBy=most_votes&query=</li>

<br/>

```


function maxSubArray(nums) {
  var prev = 0;
  var max = -Number.MAX_VALUE;

  for (var i = 0; i < A.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
}

// Explanation

set initials
1.1 first value in the array. It doesn’t matter to us whether max is positive or negative.

1.2 we need an intermediate current positive value, because a negative value does not interest us, since -2 is always more than -5 and it means 0 + -2 > -5.

At this point we've covered first value in the array, that's why we will move through array starting from the 1 index.

current += nums[i] means that every time we take a new value, we will sum it with the past current value. This will help us discard lower values in the next step.

max = Math.max(max, current) means that we choose only the highest value (previous max or new current).

current = Math.max(current, 0) means that if the value was negative, then we throw it away and set zero as default. Why? Because it makes no sense to summarize the negative values, they simply do not interest us.
The previous step is enough to compare negative values. There we will choose the minimum negative value (if it is the case i.e [-10, -3, -5, -2, -6] will return only -2 because it is the highest value from the negative ones.

const maxSubArray = nums => {
    let max = nums[0];
    let current = Math.max(max, 0);

    for (let i = 1; i < nums.length; i += 1) {
        current += nums[i];
        max = Math.max(max, current);
        current = Math.max(current, 0);
    }

    return max;
};

```

<br/>

<li> Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0] </li>

<br/>

```
[0,1,0,3,12] i 0 p 0 nothing happens
[0,1,0,3,12] i 1 p 0 swap happens
[1,1,0,3,12] i 2 p 1 nothing happens
[1,1,0,3,12] i 3 p 1 swap happens
[1,3,0,3,12] i 4 p 2 swap happens
[1,3,12,3,12] i 4 p 3 loop ends
[0,1,0,3,12] i 0 p 0


[1,0,0,3,12]
[1,0,0,3,12]
[1,0,3,0,12]
[1,0,3,12,0]

Brute Force Sol'n (bad performance) :

var moveZeroes = function(nums) {
    function swap(i , j) {
        [nums[i] , [nums[j]]] = [nums[j] , [nums[i]]];
    }
    let length = nums.length;

    while (length > 0) {
        for (let x=0;x<length-1;x++) {
          if (nums[x] === 0) swap(x , x+1);
        }
        length--;
    }


};

Optimal Solution: (own solution runs better )

var moveZeroes = function(nums) {
    if (nums.length === 1) return nums;
    let i = 0;
    let length = nums.length-1;
    while (length > 0) {
        if (nums[i] === 0) nums.push(...nums.splice(i,1));
        else i++;
        length--;
    }
};

// Faster O(n) sol'n :

//two pointers
var pos = 0;
for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
        nums[pos++] = nums[i];
    }
}
if (pos===0) return nums;

for (i = pos; i < nums.length; i++) {
    nums[i] = 0;
}




```

<br/>

<li> Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2]. </li>

<br/>

```
// 2 Pointer 99% sol'n :

var twoSum = function(numbers, target) {
 let left = 0;
let right = numbers.length - 1;
    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum===target) {
            return [left+1,right+1];
        }
        else if (sum > target) right--;
        else left++;
    }
}

// Brute Force
var twoSum = function(numbers, target) {
    let i = 0;
    let index = [];

    while (i < numbers.length-1) {
        for (let j=0;j<numbers.length;j++) {
            if (j!==i) {
                 if (numbers[i] + numbers[j] === target) {
                index[0] = i+1;
                index[1] = j+1;
            }
            }
        }
        i++;
        if (index.length > 0) return index;
    }
};

```

<br/>

<li>Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"] </li>

<br/>

```
// Own sol'n : Struggled :(

var reverseWords = function(s) {
    let stringArr = s.split(' ');
    // stringArr is now ['hello','memers']
    function reverseWord(arr,i) {
        let wordArr = arr[i].split('');
        function swap(start,end) {
             [wordArr[start] , [wordArr[end]]] = [wordArr[end] , [wordArr[start]]];
        }
        let start=0;
        let end = wordArr.length-1;
        while (start < end) swap(start++,end--);
        arr[i] = wordArr.join('');

    }
    for (let initial=0;initial<stringArr.length;initial++) {
        reverseWord(stringArr , initial);
    }
    return stringArr.join(' ');
}



};



```

<br/>

<li> <k>2 sum JS</k> </li>

<li> Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2] </li>

<br/>

```

const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];

    if (another in map) {
      return [map[another], i];
    }

    map[nums[i]] = i;
  }

  return null;
};
```

<br/>

<li> <k>733. Flood Fill</k> </li>
<li> An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

Return the modified image after performing the flood fill. </li>

</br>

```
([[1,1,1],[1,1,0],[1,0,1]] , 1 , 1, 2)
var floodFill = function(image, sr, sc, newColor) {
    // [1,1] [2,1] [0,1] [1,0] [1,2]

// Own Solution

var floodFill = function (image, sr, sc, newColor) {
  let visited = [];
  //   console.log(image.length);
  let originalColor = image[sr][sc];
  image[sr][sc] = newColor;
  if (originalColor === newColor) return image;

  scanPixel([sr, sc]);
  while (visited.length) {
    let popped = visited.pop();
    scanPixel(popped);
  }

  return image;

  function scanPixel(pos) {
    let pushArr = [];

    if (pos[0] > 0) pushArr.push([pos[0] - 1, pos[1]]);
    if (pos[0] < image.length - 1) pushArr.push([pos[0] + 1, pos[1]]);
    if (pos[1] > 0) pushArr.push([pos[0], pos[1] - 1]);
    if (pos[1] < image[pos[0]].length - 1) pushArr.push([pos[0], pos[1] + 1]);

    pushArr.forEach((pixel) => {
      if (image[pixel[0]][pixel[1]] === originalColor) {
        image[pixel[0]][pixel[1]] = newColor;
        visited.push([pixel[0], pixel[1]]);
      }
    });
  }
};

// Optimized Sol'n:





```

</br>

<li>Amazon OA Priority Queue Problem  </li>

</br>

```
Given array of priorities [1,12,5,3] transform array to lowest num possible without mutating

Ex Input : [1,12,5,3]
Output : [1,4,3,2]

Sol'n :

function priors(arr) {
  let clone = [...arr]
    .map((priority, index) => [priority, index])
    .sort((a, b) => a[0] - b[0]);
  console.log(clone);

  let low = 1;
  let curr = clone[0][0];
  for (let i = 0; i < clone.length; i++) {
    arr[clone[i][1]] = low;
    if (clone[i + 1] && clone[i + 1][0] !== curr) low++;
  }
  console.log(arr);
}

priors([2, -10, 123, 5]);

```

</br>

<li> <k>606.Construct String from Binary Tree</k> </li>

<br/>

```
Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it.

Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.

Input: root = [1,2,3,4]
Output: "1(2(4))(3)"
Explanation: Originally, it needs to be "1(2(4)())(3()())", but you need to omit all the unnecessary empty parenthesis pairs. And it will be "1(2(4))(3)"


Input: root = [1,2,3,null,4]
Output: "1(2()(4))(3)"
Explanation: Almost the same as the first example, except we cannot omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.


var tree2str = function(root) {
    if (!root) return "";

    let val = root.val;
    let left = tree2str(root.left);
    let right = tree2str(root.right);

    if (!left && !right) return `${val}` ;
    if (!right) return `${val}(${left})`;
    return `${val}(${left})(${right})`;
};

Note : If the right node is empty , we simply do not include it because we do not want to print an empty bracket for an empty right node.

For example if we add below line

if (!left) return `${val}(${right})`;

When input is : [1,2,3,null,4]

Output will be :

"1(2(4))(3)"

Instead of :

"1(2()(4))(3)"

```

<br/>

<li>  </li>
<li>  </li>
<li>  </li>
<li>  </li>
<li>  </li>
<li>  </li>

</ul>

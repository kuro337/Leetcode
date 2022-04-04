<link href="style.css" rel="stylesheet" />

<h1> Blind 75 </h1>

- [Intervals](#intervals)
- [Linked List](#linked-list)
- [Arrays](#arrays)
- [Graphs](#graphs)

<a href="https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions">Blind 75</a>

<ul>

### Intervals

<li> <k>252.Meeting Rooms</k> </li>

</br>

```
Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.



Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input: intervals = [[7,10],[2,4]]
Output: true

```

</br>

</br>

```
var canAttendMeetings = function(intervals) {
    if(!intervals || intervals.length === 1) return true;

    let sorted = intervals.sort((a,b) => a[0] - b[0]);
    for(let i = 0; i < sorted.length - 1; i++) {
        if(sorted[i][1] > sorted[i+1][0]) return false;
    }
    return true;
};

```

</br>

<li> <k>57.Insert Intervals</k> </li>

</br>

```
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.



Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

```

</br>

</br>

```
var insert = function(intervals, newInterval) {
    let size = intervals.length;
    let index = 0;
    let res = [];

    while(index < size && intervals[index][1] < newInterval[0]) {
        res.push(intervals[index]);
        index++;
    }
    while(index < size && intervals[index][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
        index++;
    }
    res.push(newInterval);
    while(index < size) {
        res.push(intervals[index]);
        index++;
    }
    return res;
}

Explanation :
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]

We keep pushing the intervals to result till the 2nd value in current interval is bigger than the 1st value for new interval

If it is , then we need to modify the current interval

Then we loop till end of indexes or if the first value of current interval is bigger than 2nd val of new interval

If 1st val of curr interval is bigger than 2nd val of new interval - we just push newInterval to results

If not, we know we have to mutate the current interval within the while loop

Within the while loop - if 1st val of curr interval is smaller or equal to 2nd val of new interval -
set newInterval's 1st value to be Math.min(newinterval[0] , currInterval[0])
set newInterval's 2nd value to be Math.max(newinterval[1] , currInterval[1])

then push new interval to res , then keep pushing remaining intervals to results till index is greater than size, then return results

```

</br>

<li><k>56.Merge Interval</k>  </li>

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


function merge(intervals: number[][]): number[][] {
  if (!intervals.length) return intervals
  intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])
  var prev = intervals[0]
  var res = [prev]
  for (var curr of intervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1])
    } else {
      res.push(curr)
      prev = curr
    }
  }
  return res

};

Makes use of array reference.
let arr = [1,10]
let ref = [arr]  // 1,10
arr[0] = 200
ref // 200 , 10
```

</br>

<li> <k>435. Non-overlapping intervals</k> </li>

</br>

```
Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.



Example 1:

Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
Example 2:

Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
Example 3:

Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

JS sol'n : O(NLogN)
Space : O(1)

var eraseOverlapIntervals = function(intervals) {
	// sort by earliest finish time
    intervals.sort((a, b) => a[1] - b[1]);
    let prev = intervals[0], remove = 0;

    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] < prev[1]) remove++;
        else prev = intervals[i];
    }
    return remove;
};

TS Sol'n:

function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((s,e)=>s[1]-e[1]);
  let end=intervals[0][1];
  let overlaps=0;

  for(let i=1;i<intervals.length;i++){
     if(intervals[i][0]<end)
       overlaps+=1;
     else
       end=intervals[i][1];
  }
return overlaps;
}

```

</br>

<li> <k>252,Meeting Rooms</k> </li>

</br>

```
Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.



Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input: intervals = [[7,10],[2,4]]
Output: true

Sol'n :

function canAttendMeetings(intervals: number[][]): boolean {

    if (intervals.length===1) return true

    intervals.sort((a,b)=>a[0]!==b[0]?a[0]-b[0]:a[1]-b[1])

    // [[0,30],[5,10],[15,20]]
    // [[1,13] . [13, 15] ]

    let start = intervals[0]

    for (let i=1;i<intervals.length;i++) {
        if (intervals[i][0] > start[0] && intervals[i][0] >= start[1] ) {
            start = intervals[i]
        }
        else return false
    }
    return true
};

[[13,15] , [1,13]] should return true

```

</br>

<li><k>Meeting Rooms II</k>   </li>

</br>

```
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.



Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
Example 2:

Input: intervals = [[7,10],[2,4]]
Output: 1


Constraints:

1 <= intervals.length <= 104
0 <= starti < endi <= 106

Sol'n :

function minMeetingRooms(intervals: number[][]): number {

 const endTimes = [...intervals.sort((A, B) => A[1] - B[1])];
    intervals.sort((A, B) => A[0] - B[0]);

    let minRooms = 0, e = 0;

    for (let s = 0; s < intervals.length; s++) {
        while (intervals[s][0] >= endTimes[e][1]) e++;
        minRooms = Math.max(minRooms, s - e + 1);
    }

    return minRooms;

};

// 1 5 5
// 2 6 6

// [ [2,15],[4,9],[9,29],[16,23] ,[36,45] ]

// s starts at 0 and checks first start time. e starts at 0 and only increments if current s is greater than current e
// e keeps incrementing till the start time in loop is smaller than end time.

Explanation :

1. Separate out the start times and the end times in their separate arrays.
2 Sort the start times and the end times separately. Note that this will mess up the original correspondence of start times and end times. They will be treated individually now.
3 We consider two pointers: s_ptr and e_ptr which refer to start pointer and end pointer. The start pointer simply iterates over all the meetings and the end pointer helps us track if a meeting has ended and if we can reuse a room.
4 When considering a specific meeting pointed to by s_ptr, we check if this start timing is greater than the meeting pointed to by e_ptr. If this is the case then that would mean some meeting has ended by the time the meeting at s_ptr had to start. So we can reuse one of the rooms. Otherwise, we have to allocate a new room.
5 If a meeting has indeed ended i.e. if start[s_ptr] >= end[e_ptr], then we increment e_ptr.

Ex:
(1, 10), (2, 7), (3, 19), (8, 12), (10, 20), (11, 30)

Splitting all start and ends :

1  2   3   8   10  11
7  10  12  19  20  30

We want to set two pointers - one for start (at 1) and one for end (at 7)

If start is smaller than end , we increment numRooms and move start pointer to next start
If start is bigger than end , we do not need to increment numRooms and just move end pointer

start < end pointer means no meeting has ended by the time our meeting is to start, hence we need another room

start > end pointer means a meeting ends to free up a room for us , so move end pointer by 1


Using Priority Queue

function minMeetingRooms(intervals) {

    if (intervals==null || intervals.length==0){
        return 0
    }
    if (intervals.length==1){
        return 1
    }
    //sort intervals by start date
    intervals.sort((a,b) => a[0] - b[0]);

    let rooms = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {

        let room = getEarliestRoom(rooms);
        let current = intervals[i];

        //if the room ends before the current interval starts, use the room and update the room end time to current
        if (room[1] <= current[0]){
            room[1] = current[1]
        }
        else{ //allocate a room
            rooms.push(current)
        }

    }

    return rooms.length;

    function getEarliestRoom(r) { //returns the room that ends first
        r.sort((a,b) => a[1]-b[1])
        return r[0]
    }

}
```

</br>
<li>  </li>

<li>  </li>

<li>  </li>

### Linked List

<li> <k>206. Reverse Linked List</k> </li>

</br>

```
Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

```

</br>

</br>

```
var reverseList = function(head) {
    if (!head) return null
    if (!head.next) return head

   let cur = head;
let prev = null;
let next = null;

while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
}

return prev;

};

```

</br>
<li> <k>105.Construct Binary Tree from Array of Preorder and Inorder Traversal</k> </li>

</br>

```
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
Example 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]

Explanation :

The basic idea is: from the preorder array, we know that the value of the root node is the first element, since the inorder array doesn't contain duplicate values, from the inorder array, we can find out the index of the root value, with this index, we can calculate how many nodes are there in the left and right subtrees, based on these information we can recursively rebuild the whole tree.

For example, we have this tree below:

            1
           / \
          2   3
         / \   \
        4   5   6
the preorder and inorder arrays are:

preorder: 1 2 4 5 3 6
inorder: 4 2 5 1 3 6

let's group the left nodes with ( ) and right nodes with [ ]:

preorder: 1 (2 4 5) [3 6]
inorder: (4 2 5) 1 [3 6]

we can then build the left subtree using the following preorder and inorder arrays:

preorder: 2 4 5
inorder: 4 2 5

and for the right subtree:

preorder: 3 6
inorder: 3 6

var buildTree = function(preorder, inorder) {
    let inOrderIndexLookup = new Map();

    //since inorder does not contain duplicates, we will have one entry for each node;
    for(let i = 0, len = inorder.length; i < len; i++) {
        inOrderIndexLookup.set(inorder[i], i);
    }

    function helper(preStart, preEnd, inStart, inEnd) {
        if(preStart > preEnd || inStart > inEnd) return null;

        let value = preorder[preStart];
        let index = inOrderIndexLookup.get(value);
        let leftTreeNodeCount = index - inStart;
        let root = new TreeNode(value);

        root.left = helper(preStart + 1, preStart + leftTreeNodeCount, inStart, index - 1);
        root.right = helper(preStart + leftTreeNodeCount + 1, preEnd, index + 1, inEnd);
        return root;
    }

    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};

Walkthrough :
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

Root 3 , left subtree is 9 , right subtree is 15,20,7

1. Build a map of nodes and their index from inorder tree

map {9: 0 , 3: 1 , 15: 2 , 20: 3 , 7: 4}

Then our recursive function takes
buildTreeRecursively(preorderStartIndex , preOrderEndIndex , inOrderStartIndex, inOrderEndIndex) and uses it to build the left and right nodes of the tree

To simply understand the root.left and root.right call , basically we need to give it the indexes of both arrays that will form the correct array

So if both arrays are :
preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
First call will be build(0,4 , 0,4) which builds the entire array

Then within it for root.left since we know our left subtree is [9] we should call
root.left = build(1, 1 , 0 , 0)

We know our right subtree is [15,20,7] so we should we call
root.right = build(2,4 , 2 , 4)


Our first call is build(0 , prearray.length-1 , 0 , inarray.length - 1)

Within the func we :

1. EXPLORING build(0 , 4 , 0 , 4)
Get root which is prearray[0] (3)

Get length of left nodes to the root
We get this from the map we created and looking up index of root in inorderarray - start of inorder array (1)

Get length of nodes to right which is : inorderarrayend - index (3)

Then we create our root node and call the same func recursively with

//                [9]             [9]                [0]       [0]
root.left = build(prestart+1 , prestart+leftnodes , instart , index-1)

2. Exploring root.left call
build(1 , 1 , 0 , 0)
root = 9
index = 0
leftnodesCount = index - instart = 0 - 0 = 0
root.left = build(2 , 1 ,0 , -1 ) -> returns null
root.right = build(prestart + leftnodes+1 , preend , index+1 , inend)
root.right = build(2, 1 , 1 , 0) -> returns null
return root -> returns 9

1. Going back to build(0,4,0,4)
root.left = build(0,1,0,0) returned [9]

Now root.right = build()

```

</br>

</br>

```
Solid Explanation in Leetcode Explanation :

Approach 1: Recursion
Intuition

The two key observations are:

Preorder traversal follows Root -> Left -> Right, therefore, given the preorder array preorder, we have easy access to the root which is preorder[0].

Inorder traversal follows Left -> Root -> Right, therefore if we know the position of Root, we can recursively split the entire array into two subtrees.

Now the idea should be clear enough. We will design a recursion function: it will set the first element of preorder as the root, and then construct the entire tree. To find the left and right subtrees, it will look for the root in inorder, so that everything on the left should be the left subtree, and everything on the right should be the right subtree. Both subtrees can be constructed by making another recursion call.

It is worth noting that, while we recursively construct the subtrees, we should choose the next element in preorder to initialize as the new roots. This is because the current one has already been initialized to a parent node for the subtrees.

```

</br>

<li><k> 19. Remove Nth Node From End of List</k> </li>

</br>

```
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let slow = head;
    let fast = head;

    for (let i=0;i<n;i++) fast=fast.next

    if (!fast) return head.next

    while (fast.next) {
        fast=fast.next;
        slow=slow.next;
    }
    slow.next = slow.next.next;
    return head;


};

```

</br>
<li>  </li>
<li>  </li>
<li>  </li>
<li>  </li>

### Arrays

<li><k> 238. Product of Array Except Self </k>  </li>

</br>

```
Best performance sol'n:

const productExceptSelf = nums => {
  const answer = [];
  for (let i = 0, leftExceptSelf = 1; i < nums.length; i++) {
    answer.push(leftExceptSelf);
    leftExceptSelf *= nums[i];
  }

  for (let i = nums.length - 1, rightExceptSelf = 1; i >= 0; i--) {
    answer[i] *= rightExceptSelf;
    rightExceptSelf *= nums[i];
  }

  return answer;
}

```

</br>

<li> <k>152. Maximum Product Subarray</k> </li>

</br>

```
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.



Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

Sol'n :

function maxProduct(nums: number[]): number {
    if (!nums.length) return 0
    let currMax = nums[0]
    let currMin = nums[0]
    let max = currMax


    for (let i=1;i<nums.length;i++) {
        let tempMax = Math.max(nums[i] , nums[i] * currMax , nums[i] * currMin)

        currMin = Math.min(nums[i] , nums[i] * currMin , nums[i] * currMax)

        currMax = tempMax

        max = Math.max(currMax , max)
    }

    return max
};



```

</br>

<li><k>153.Find minimum in Rotated Sorted Array</k>  </li>

</br>

```
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.



Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.
```

</br>

```
To find an element in a sorted array , we can use binary search. However, the array is rotated so we need to make a couple of changes to binary search.

We basically need to find the inflection point.

Normal sorted array will be : [1,4,5,6,7,8]

Rotated array will be [5,6,7,8,1,4]
or
Rotated array will be [4,5,6,7,8,1]
or
Rotated array will be [8,1,4,5,6,7]

First check if mid is bigger than 1st elem and smaller than last elem - if it is we can use normal binary search

If not-
2 cases - last element is bigger than mid or smaller than mid
If last elem smaller than mid - inflection poinT TO right of mid
If last elem bigger than mid - inflection point to left of mid



In sorted array , we can see there will be one point which is the inflection point - where the next number is actually smaller.

// Own Solution : Beats 99%

function findMin(nums: number[]): number {
    if (nums.length===1) return nums[0]
    if (nums.length===2) {
        if(nums[0] > nums[1])  return nums[1]
        return nums[0]
    }
    let start = 0
    let end = nums.length - 1
    let mid = (start + end) >> 1

    if (nums[mid] > nums[start] && nums[mid] < nums[end]) return nums[start]

    if (nums[mid] > nums[end]) return findNext(nums,mid,true)
    else return findNext(nums,mid,false)

    function findNext(arr:number[] ,startPos:number, toRight:boolean) : number {
    if (toRight) {
        if (arr[startPos] >arr[startPos+1]) return arr[startPos+1]
        else return findNext(arr,startPos+1 , true)
    }
        else {
            if (arr[startPos] < arr[startPos-1]) return arr[startPos]
            else return findNext(arr,startPos-1,false)
        }
    }
};

```

</br>
</br>

<li> <k>15. 3 sum </k> </li>

</br>

```
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.



Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []

```

</br>

</br>

```
Sol'n:

function threeSum(nums) {
	const results = []

	if (nums.length < 3) return results


	nums = nums.sort((a, b) => a - b)

    // if the question asks us for a custom target, we can control it here
	let target = 0

	for (let i = 0; i < nums.length - 2; i++) {
		// `i` represents the "left" most number in our sorted set.
		// once this number hits 0, there's no need to go further since
		// positive numbers cannot sum to a negative number
		if (nums[i] > target) break

		// we don't want repeats, so skip numbers we've already seen
		if (i > 0 && nums[i] === nums[i - 1]) continue


		let j = i + 1

		let k = nums.length - 1

	        while (j < k) {
			let sum = nums[i] + nums[j] + nums[k]


			if (sum === target) {
				// store the valid threesum
				results.push([nums[i], nums[j], nums[k]])

				// this is important! we need to continue to increment `j` and decrement `k`
				// as long as those values are duplicated. in other words, we wanna skip values
				// we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
				// [[-2,0,2], [-2,0,2]].
				//
				// (i'm not a fan of this part because we're doing a while loop as we're
				// already inside of another while loop...)

				while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--

				// finally, we need to actually move `j` forward and `k` backward to the
				// next unique elements. the previous while loops will not handle this.

				j++
				k--

			// if the sum is too small, increment `j` to get closer to the target
			} else if (sum < target) {
				j++

			// if the sum is too large, decrement `k` to get closer to the target
			} else { // (sum > target)
				k--
			}
		}
	}

	return results
};

Explanation:

After sorting our array is :
[-4 , -1 , -1 , 0 , 1 , 2]

We want to iterate over every element and then have a left and right pointer to sum everything up
If sum > target(0) ,we need to move right pointer to make sum smaller
If sum < target(0) , we need to move left pointer to right to make sum bigger

We want to skip duplicates in the main for loop so use continue in for loop for ex for i=2 , since i=1 is -1 and i=2 is -1 too

In the while loop within for loop we want to skip duplicates too , we can do that by
while (nums[j] === nums[j + 1]) j++
while (nums[k] === nums[k - 1]) k--

```

</br>
<li>  </li>

<li><k>11.Container with Most Water</k>  </li>

</br>

```
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Sol'n:

We keep track of area in a variable and keep moving pointer for shorter length. At the end maxArea will have the max area

function maxArea(height: number[]): number {
let maxArea : number = 0;
let start = 0
let end = height.length-1

while (start < end) {
    maxArea=Math.max(maxArea , (end-start) * Math.min(height[start],height[end]))
    if (height[start] > height[end]) end--
    else start++
}
    return maxArea

};


```

</br>

### Graphs

<li> <k>133.Clone Graph</k> </li>

</br>

```
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}


Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

Ex 1 :
Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

Example 3:

Input: adjList = []
Output: []
Explanation: This an empty graph, it does not have any nodes.


Sol'n :

function cloneGraph(node: Node | null): Node | null {
    var map = {};
  return traverse(node);

  function traverse(node) {
    if (!node) return node;
    if (!map[node.val]) {
      map[node.val] = new Node(node.val);
      map[node.val].neighbors = node.neighbors.map(traverse);
    }
    return map[node.val];
  }

};


```

</br>

<li> </k>207.Course Schedule</k> </li>

</br>

```
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.



Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

// Favorite Solution:

// 4, prerequisites = [[1,0],[0,1] , [3,2] , [3,1] ]

function canFinish(numCourses: number, prerequisites: number[][]): boolean {


  const order = [];
  const queue = [];
  const graph = new Map();
  const indegree = Array(numCourses).fill(0);
  // [0 0 0 0]

  for (const [e, v] of prerequisites) {
    // build graph map
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }
    // build indegree array
    indegree[e]++;
  }

    // graph { 0:[1] , 1: [0 , 3] , 2:[3] }
    // indegree 1 1 0 2

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const v = queue.shift();
    if (graph.has(v)) {
      for (const e of graph.get(v)) {
        indegree[e]--;
        if (indegree[e] === 0) queue.push(e);
      }
    }
    order.push(v);
  }

  return numCourses === order.length;
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
<li>  </li>
<li>  </li>
<li>  </li>

</ul>

<link href="../style.css" rel="stylesheet" />

<h1>Tree Problems </h1>

<ul>

<li> <k>Pog Tip to calculate midpoint of 2 numbers</k>
<br/>
<span> (x + y) >> 1 ; 
<br/>
ex: 2 + 5 >> 1 = 3 
<br/>
ex: 3 + 3 >> 1 = 3 </span>
<br/>
<span>Lot better performance than Math.floor((x+y)/2)</span>
<br/>
The bitwise operator essentially divides by 2 and ignores the remainder

</li>

<li>  <k>61. Rotate List</k> </li>

</br>

```
Given the head of a linked list, rotate the list to the right by k places.

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Easy to Follow Sol'n:

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

</br>

```
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

First , we take tail as head
tail = head

Then , loop till we get length and set tail to last elem

while (tail.next) len++ , tail = tail.next

We have tail as the actual tail and len for ex: 5

Then we set the head as the next for tail
tail.next = head
// So we have tail as 5 > next is 1

We take count as length - (k % length) note 2 % 5 is just 2
so count will be 3  // as 5 - (2%5) = 5 - 2 = 3

Then count times , we increment head by count times and increment tail by count times

Head changes from 1 > 2 , then 2 > 3  , then 3 > 4
Tail changes from 5 > 1 , to 1 > 2 , then 2 > 3

we set tail.next as null , marking end so new list is :
4 , 5 , 1 , 2 , 3  // 3 points to null


```

</br>

<li>  <k>98. Valid Binary Search Tree</k> </li>

</br>

```
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Input: root = [2,1,3]
Output: true

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

Entire left side must be smaller than root

```

</br>

</br>

```
Input: [5,1,4,null,null,3,6]

      5
    1   4
       3  6


var isValidBST = function(root) {

       return helper(root, null, null);
};

// Own Solution : good one

var isValidBST = function(root) {
    if (!root) return true
    return dfs(root,Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)

    function dfs(root,lower,higher) {
        if (root===null) return true
        if (root.val<=lower ||  root.val>=higher) return false
        return (dfs(root.left,lower,root.val) && dfs(root.right,root.val,higher))
    }
}

function helper(root, min, max) {

     if (!root) {

             return true; // We hit the end of the path
      }

      if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
             return false; // current node's val doesn't satisfy the BST rules
       }

      // Continue to scan left and right
       return helper(root.left, min, root.val) && helper(root.right, root.val, max);

 };


```

</br>
<li>100. Same Tree  </li>

<br/>

```
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Input: p = [1,2,3], q = [1,2,3]
Output: true

function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

```

<br/>

<li> <k>101.Symmetric Tree</k> </li>

<br/>

```
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Input: root = [1,2,2,3,4,4,3]
Output: true

Input: root = [1,2,2,null,3,null,3]
Output: false

              1
       2             2
    3     4       4     3
  5  6   7  8    8  7  6  5


[3,4]  [3,4]

[,4,5]  [,4,5]

        1
    2      2
 n    3  n   3

 Garbage Iterative Sol'n :

 var isSymmetric = function(root) {
    if (!root || !root.left && !root.right) return true
    if (root.left && !root.right) return false
    if (!root.left && root.right) return false


   let next = true;
   const left = []
   const right = []
   left.push(root.left)
   right.push(root.right)

   while (left.length) {
       console.log(left,right)
       if (left[0].val===-101 && right[0].val===-101) {
           left.shift()
           right.shift()
           continue
       }
       let popped1
       let popped2
        if (left[0].val===right[0].val) {
            popped1=left.shift()
            popped2=right.shift()
        }
       else return false;
       if (popped1.left) left.push(popped1.left)
       else left.push(new TreeNode(-101))
       if (popped1.right) left.push(popped1.right)
       else left.push(new TreeNode(-101))
       if (popped2.right) right.push(popped2.right)
       else right.push(new TreeNode(-101))
       if (popped2.left) right.push(popped2.left)
       else right.push(new TreeNode(-101))

    }
    return true
};

Own Iterative - A lot better performance:

var isSymmetric = function(root) {
   if (!root || !root.left && !root.right) return true

    return trav(root.left, root.right)

    function trav(n1 , n2) {
        if (n1===null && n2===null) return true
        if (n1===null || n2===null) return false
        if (n1.val!==n2.val) return false
       return  (trav(n1.left,n2.right) && trav(n1.right,n2.left))

    }
};


```

<br/>

<br/>

```
Really good sol'n:

var isSymmetric = function(root) {
    if(root  ==  null){
        return false;
    }

    let checkChild = function(left, right){
        if(left == null && right == null){
            return true;
        } else if(left ==  null || right == null){
            return false;
        } else if(left.val != right.val ){
            return false;
        } else {
            return checkChild(left.left, right.right) && checkChild(left.right, right.left)
        }
    }

    return checkChild(root.left, root.right);
};

```

<br/>

<li> <k>102. Binary Tree Level Order Traversal</k> </li>

<br/>

```
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1 :

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []

```

<br/>

<br/>

```
Own Sol'n : Good Performance Pog

var levelOrder = function(root) {
    const results = []
    if (!root) return results
    let node = root
    results.push([node.val])

    let currLevel = [node]
    let nextLevel = []

   while (currLevel.length) {
     add(currLevel)
       let temp = []
       currLevel = nextLevel
       nextLevel = temp
   }
    return results



    function add(nodeArray) {
        let arr = []
        if (!nodeArray.length) return
        for (let node of nodeArray) {
            if (node.left) {
                arr.push(node.left.val)
                nextLevel.push(node.left)
            }
            if (node.right) {
                arr.push(node.right.val)
                nextLevel.push(node.right)
            }
        }

        if (arr.length) results.push(arr)
    }
};


// Fastest Sol'n:

var levelOrder = function(root) {
    let q = [root], ans = []
    while (q[0]) {
        let qlen = q.length, row = []
        for (let i = 0; i < qlen; i++) {
            let curr = q.shift()
            row.push(curr.val)
            if (curr.left) q.push(curr.left)
            if (curr.right) q.push(curr.right)
        }
        ans.push(row)
    }
    return ans
};

```

<br/>

<li> <k>109. Convert Sorted List to Binary Search Tree</k> </li>

<br/>

```
Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example 1:
Input: head = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.
Example 2:

Input: head = []
Output: []


Constraints:

The number of nodes in head is in the range [0, 2 * 104].
-105 <= Node.val <= 105

```

<br/>

<br/>

```
Best Solution

var sortedListToBST = function (head) {
  if (head === null) return null;

  if (head.next === null) {
    const node = new TreeNode(head.val, null, null);

    return node;
  }

  let midNode = mid(head);

  const node = new TreeNode(midNode.val);

  let current = head;

  while (current.next !== midNode) current = current.next;

  current.next = null;

  node.left = sortedListToBST(head);
  node.right = sortedListToBST(midNode.next);

  return node;
};

function mid(head) {
  if (head === null || head.next === null) return head;

  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

// Logic

If we have list [-10 , -3 , 0 , 5 , 9]
We create a function mid that accepts the head of the list and returns the middle node
this can be done using 2 pointers and a slow/fast pointer

while (fast && fast.next) {
    slow=slow.next
    fast = fast.next.next
}

Then in the main f'n , we want to create our BST root node using the mid function ran on the head

Then we want to disconnect the lists and assign the left and right side as the l/r to the bst root

We can disconnect the list by using a pointer that starts at head and stops when head.next is the middle node we got (which is also the root)

Then we do head.next = null , essentially disconnecting the list

We simply call main fn on left and right side and return the BST, we are done

```

<br/>

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

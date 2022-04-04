<link href="../StudyPlan1_DS/style.css" rel="stylesheet" />
<h1> Amazon LC </h1>

<ul>
<li>Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1 </li>

<br/>

```
Own Sol'n:

var firstUniqChar = function(s) {
    let map = {};
    for (let i=0;i<s.length;i++) {
        map[s[i]] ? map[s[i]] = map[s[i]] +1 : map[s[i]] = 1;
    }
    for (let k=0;k<s.length;k++) {
        if (map[s[k]] === 1) return k
    }
    return -1;
};

// Better hashmap solution:

var firstUniqChar = function(s) {
    let map = new Map();

    for (let i=0;i<s.length;i++) {
        if (map.get(s[i])>0) map.set(s[i] , map.get(s[i])+1);
        else map.set(s[i] , 1);
    }
    for (let k=0;k<s.length;k++) {
        if (map.get(s[k])===1) return k;
    }
    return -1
};


```

<br/>

<li> Example 1:

Input: s = "00110011"
Output: 6
Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
Notice that some of these substrings repeat and are counted the number of times they occur.
Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.
Example 2:

Input: s = "10101"
Output: 4
Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.

Constraints:

1 <= s.length <= 105
s[i] is either '0' or '1'. </li>

<li> <a href="https://leetcode.com/problems/count-binary-substrings/discuss/1172554/Count-Binary-Substrings-or-JS-Python-Java-C%2B%2B-or-Easy-Rolling-Count-Solution-w-Explanation">Amazing Answer O(N)</a> </li>

<br/>

```
Input: s = "00110011"
Input: s = "000011001"


Idea:
Since the 0's and 1's have to be grouped consecutively, we only have to be concerned with the most recent two groups (curr, prev) at any time as we iterate through the input string (s). Since each addition to our answer (ans) must therefore be centered on the "edge" between the two groups, we should be able to count multiple increases to ans at the same time.

For example, if we find a group that is "0001111", then we know that we've found multiple answer counts centered on the "01". Each additional extra character on both sides will be an extra answer, which means that "0011" and "000111" are also answers. In other words, the number that we should add to ans is equal to min(zeros, ones), or 3 in this example.

So we can now iterate through s, keeping track of the curr and prev groups, and when we find the end of a group, we can calculate our addition to ans and then swap the two variables while resetting curr to 1.

Since we're going to be comparing s[i] to s[i-1] to see if the character has changed, we'll need to start our iteration with i = 1 which means we should define a starting value for curr of 1. Also, since the end of s is technically the end of a group, we should add another min(curr, prev) onto ans before we return ans, as it won't be accounted for in the iteration through s.

Time Complexity: O(N) where N is the length of s
Space Complexity: O(1)
Implementation:
There are only minor differences in the code for all four languages.

Javascript Code:

var countBinarySubstrings = function(s) {
    let curr = 1;
    let prev = 0;
    let ans = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i-1]) curr++ ;
        else {
        ans += Math.min(curr, prev);
        prev = curr;
        curr = 1; }
        }
    return ans + Math.min(curr, prev)
};

```

<br/>

<li> <k>937. Reorder Data in Log Files</k> </li>
<li> You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

There are two types of logs:

Letter-logs: All words (except the identifier) consist of lowercase English letters.
Digit-logs: All words (except the identifier) consist of digits.
Reorder these logs so that:

The letter-logs come before all digit-logs.
The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
The digit-logs maintain their relative ordering.
Return the final order of the logs.

Example 1:

Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
Explanation:
The letter-log contents are all different, so their ordering is "art can", "art zero", "own kit dig".
The digit-logs have a relative order of "dig1 8 1 5 1", "dig2 3 6".
Example 2:

Input: logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"] </li>

<br/>

```
const reorderLogFiles = (logs) => {
  const body = s => s.slice(s.indexOf(' ') + 1); // get the body after identifier
  const isNum = c => /\d/.test(c);

  // if body same then compare identifier
  const compare = (a, b) => {
    const n = body(a).localeCompare(body(b));
    if (n !== 0) return n;
    return a.localeCompare(b);
  };

  const digitLogs = [];
  const letterLogs = [];
  for (const log of logs) {
    if (isNum(body(log))) digitLogs.push(log);
    else letterLogs.push(log);
  }
  return [...letterLogs.sort(compare), ...digitLogs];
};



```

<br/>

<li> Important Concepts </li>
<li> <span>"a".localeCompare("b") </span> returns <k>negative value</k> because a is before c </li>
<li><span>"art".localeCompare("aaa") </span> returns <k>positive value</k> because art should come after aaa </li>
<li><span>"art".localeCompare("art") </span> returns <k>ZERO</k>if values are same</li>
<li> <span>/\d/.test("aa12")</span> tests if any digits are present and returns true/false </li>
<li><span>sort()</span> function swaps values starting from index 0 and 1 if the return value is positive , and does nothing if return value is equal or negative.  </li>

<hr>
<hr>
<br/>
<li><k>Integer to Roman</k>  </li>
<li>  Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol Value
I 1
V 5
X 10
L 50
C 100
D 500
M 1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

Example 1:

Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.
Example 2:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.</li>

<br/>

```
const integerToRoman(N) {
 const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
 const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
 let result = ''
 for (let i=0;N;i++) {
     while (N>=val[i]) {
         N-=val[i];
         result+=rom[i]
     }
 }
 return result;
}

LXVI

```

<br/>

<li><k>19. Remove Nth Node From End of List</k>
Medium

8440

406

Add to List

Share
Given the head of a linked list, remove the nth node from the end of the list and return its head. </li>

<br/>

```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]


var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head
    for (let i = 0; i < n; i++) fast = fast.next
    if (!fast) return head.next
    while (fast.next) fast = fast.next, slow = slow.next
    slow.next = slow.next.next
    return head
};


```

<br/>

<li> Solution Explanation:
With a singly linked list, the only way to find the end of the list, and thus the n'th node from the end, is to actually iterate all the way to the end. The challenge here is attemping to find the solution in only one pass. A naive approach here might be to store pointers to each node in an array, allowing us to calculate the n'th from the end once we reach the end, but that would take O(M) extra space, where M is the length of the linked list.

A slightly less naive approach would be to only store only the last n+1 node pointers in the array. This could be achieved by overwriting the elements of the storage array in circlular fashion as we iterate through the list. This would lower the space complexity to O(N+1).

In order to solve this problem in only one pass and O(1) extra space, however, we would need to find a way to both reach the end of the list with one pointer and also reach the n'th node from the end simultaneously with a second pointer.

To do that, we can simply stagger our two pointers by n nodes by giving the first pointer (fast) a head start before starting the second pointer (slow). Doing this will cause slow to reach the n'th node from the end at the same time that fast reaches the end. </li>

<br/>

<li><k>1120. Maximum Average Subtree</k> <b>Medium</b>

Given the root of a binary tree, return the maximum average value of a subtree of that tree. Answers within 10-5 of the actual answer will be accepted.

A subtree of a tree is any node of that tree plus all its descendants.

The average value of a tree is the sum of its values, divided by the number of nodes.

</li>

<br/>

```
Input: root = [5,6,1]
Output: 6.00000
Explanation:
For the node with value = 5 we have an average of (5 + 6 + 1) / 3 = 4.
For the node with value = 6 we have an average of 6 / 1 = 6.
For the node with value = 1 we have an average of 1 / 1 = 1.
So the answer is 6 which is the maximum.
Example 2:

Input: root = [0,null,1]
Output: 1.00000

Sol'n:

Key is to account for null nodes, then do DFS traverse

var maximumAverageSubtree = function(root) {
function go(node) {
    if (node == null) return { sum: 0, count: 0, maxAvg: 0 };

    const l = go(node.left);
    const r = go(node.right);

    const sum = l.sum + r.sum + node.val;
    const count = l.count + r.count + 1;
    const maxAvg = Math.max(l.maxAvg, r.maxAvg, sum  / count);

    return { sum, count, maxAvg };
  }

  return go(root).maxAvg;
  }



```

<br/>

<h3>SLiding Window </h3>

<li><k>Longest Nice Substring </k>  </li>
<li> A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string. </li>

<br/>

```
Example 1:

Input: s = "YazaAay"
Output: "aAa"
Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
"aAa" is the longest nice substring.
Example 2:

Input: s = "Bb"
Output: "Bb"
Explanation: "Bb" is a nice string because both 'B' and 'b' appear. The whole string is a substring.
Example 3:

Input: s = "c"
Output: ""
Explanation: There are no nice substrings.

YayAxAAAaa

aaAxAAaaxaaB

```

<br/>

<br/>

```
Sol'n:

 var longestNiceSubstring = function(s) {
     function isLongestNiceSubstring(a){
        if(a.length<2) return "";
        let checker = new Set();
        for(let i = 0; i<a.length; i++){
            checker.add(a[i]);
        }
        for(let i =0;i<a.length;i++){
            if(!checker.has(a[i].toLowerCase())||!checker.has(a[i].toUpperCase())){
                let s1=isLongestNiceSubstring(a.substring(0,i));
                let s2=isLongestNiceSubstring(a.substring(i+1,a.length));
                if(s2.length>s1.length){
                    return s2;
                }else return s1;
            }
        }
        return a;
    }

    return isLongestNiceSubstring(s);

};


The key is to find the first character that does not have a corresponding uppercase/lowercase element.
Once we find that element we run the function on the left and right side of it.
If another 'stray' string is found we run it recursively against it till we get a value.

For ex : "aaAxAAaaxaaB"

1st stray character is x
Once we reach x the if condition will be true for !set.has("x".toUpperCase)
Then we will run our function longestNiceSubstring on aaA & AAaaxaaB and use the longer return value
longestNiceSubstring("aaA") will return "aaA" and longestNiceSubstring("AAaaxaaB") will call itself recursively till it returns "AAaa" which will be our answer.

```

<br/>
<li><k>1176. Diet Plan Performance</k>  </li>

<li>A dieter consumes calories[i] calories on the i-th day.

Given an integer k, for every consecutive sequence of k days (calories[i], calories[i+1], ..., calories[i+k-1] for all 0 <= i <= n-k), they look at T, the total calories consumed during that sequence of k days (calories[i] + calories[i+1] + ... + calories[i+k-1]):

If T < lower, they performed poorly on their diet and lose 1 point;
If T > upper, they performed well on their diet and gain 1 point;
Otherwise, they performed normally and there is no change in points.
Initially, the dieter has zero points. Return the total number of points the dieter has after dieting for calories.length days.

Note that the total points can be negative. </li>

<br/>

```
Example 1:

Input: calories = [1,2,3,4,5], k = 1, lower = 3, upper = 3
Output: 0
Explanation: Since k = 1, we consider each element of the array separately and compare it to lower and upper.
calories[0] and calories[1] are less than lower so 2 points are lost.
calories[3] and calories[4] are greater than upper so 2 points are gained.
Example 2:

Input: calories = [3,2], k = 2, lower = 0, upper = 1
Output: 1
Explanation: Since k = 2, we consider subarrays of length 2.
calories[0] + calories[1] > upper so 1 point is gained.
Example 3:

Input: calories = [6,5,0,0], k = 2, lower = 1, upper = 5
Output: 0
Explanation:
calories[0] + calories[1] > upper so 1 point is gained.
lower <= calories[1] + calories[2] <= upper so no change in points.
calories[2] + calories[3] < lower so 1 point is lost.

```

<br/>

<br/>

```
Sol'n:

[10,5,2,1,9,3] 3
var dietPlanPerformance = function(calories, k, lower, upper) {
	let left = 0, right = left + k, points = 0, countCal = 0;

	for(let i = 0; i < k; i++){
		countCal += calories[i]
	}
	while(right <= calories.length){

		if(countCal < lower){
			points--
		}else if(countCal > upper){
			points++
		}
		countCal = countCal - calories[left] + calories[right]
		left++
		right = left + k
	}
	return points
};


```

<br/>

<li> <k>567. Permutation in String</k> </li>

<br/>

```
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.



Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false

"hello"

"ooooelloh"

```

<br/>

<br/>

```
// We use a sliding window to check that window in s2. If our s1 string is 'abc' we want to start our window at the s2 first 3 characters and keep sliding to the right. We can compare the maps for equality and return true if they are equal.

var checkInclusion = function(s1, s2) {
	if(s1.length > s2.length) {
        return false;
    }
    const patternMap = new Map();   // O(26)
    const stringMap = new Map();    // O(26)
    for(let charIdx = 0; charIdx < s1.length; ++charIdx) {  // O(m)
        patternMap.set(s1[charIdx], patternMap.has(s1[charIdx]) ? patternMap.get(s1[charIdx]) + 1 : 1);
        stringMap.set(s2[charIdx], stringMap.has(s2[charIdx]) ? stringMap.get(s2[charIdx]) + 1 : 1)
    }
    let left = 0,
        right = s1.length - 1;

    // O((n - m) * 26) ~ O(n)
    while(right < s2.length) {
        if(areMapsEqual(patternMap, stringMap)) {    // O(26)
            return true;
        }
        const key1CountInStr = stringMap.get(s2[left]);
        if(key1CountInStr > 1) {
            stringMap.set(s2[left], key1CountInStr - 1);
        } else {
            stringMap.delete(s2[left]);
        }
        ++left;
        ++right;
        stringMap.set(s2[right], stringMap.has(s2[right]) ? stringMap.get(s2[right]) + 1 : 1);
    }
    return false;
};
// O(26) (max characters)
function areMapsEqual(map1, map2) {
    if(map1.size !== map2.size) {
        return false;
    }
    for(let key of map1.keys()) {
       if(!map2.has(key) || map1.get(key) !== map2.get(key)) {
            return false;
        }
    }
    return true;
}

```

<br/>

<li> <k>  474. Ones and Zeroes </k> </li>

</br>

```
You are given an array of binary strings strs and two integers m and n.

Return the size of the largest subset of strs such that there are at most m 0's and n 1's in the subset.

A set x is a subset of a set y if all elements of x are also elements of y.


xample 1:

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
var findMaxForm = function (S, M, N) {
  let dp = Array.from({ length: M + 1 }, () => new Uint8Array(N + 1));
  for (let i = 0; i < S.length; i++) {
    let str = S[i],
      zeros = 0,
      ones = 0;
    for (let j = 0; j < str.length; j++)
      str.charAt(j) === "0" ? zeros++ : ones++;
    for (let j = M; j >= zeros; j--)
      for (let k = N; k >= ones; k--)
        dp[j][k] = Math.max(dp[j][k], dp[j - zeros][k - ones] + 1);
  }
  console.log(dp);

  return dp[M][N];
};

findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3);


// Explanation

var findMaxForm = function (S, M, N) {
  let dp = Array.from({ length: M + 1 }, () => new Uint8Array(N + 1));

  // Creates arr of length M+1 , composed of Uint8Array's of length N+1

  for (let i = 0; i < S.length; i++) {
    let str = S[i],
      zeros = 0,
      ones = 0;
    for (let j = 0; j < str.length; j++)
      str.charAt(j) === "0" ? zeros++ : ones++;
    for (let j = M; j >= zeros; j--)
      for (let k = N; k >= ones; k--)
        dp[j][k] = Math.max(dp[j][k], dp[j - zeros][k - ones] + 1);
  }
  console.log(dp);

  return dp[M][N];
};

findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3);

First creates DP - looks like :
[Uint8Array(4),Uint8Array(4),Uint8Array(4),Uint8Array(4),Uint8Array(4),Uint8Array(4) ]

A Uint8Array is initialized with 0's

// Selects first item from S array , for ex: ["10"]
// Sets ones and zeroes to number of 1's , 0's in selected str

// Starts outer loop with j = M , so j=5 , and decrements j till j>=zeroes. So outer loop runs 5x
// For every outer loop, runs inner loop with k=N,so k=3, which sets dp[j][k] as Math.max(dp[j][k] , dp[j-zeroes][k-ones]+1)

So first inner loop , will take Math.max(dp[5][3],dp[4][2]+1). dp[5][3] will be 1
Similarly , dp([5][2], dp[4][1]+1) , dp([5][2]) will be 1
dp([5][1]) will be 1 // math.max(dp[5][1],dp[4][0]+1)
First inner loop ends as k>= ones , and k was last at 1 and ones is 1

Next inner loop will be for when j decrements from 5 to 4, so :
dp([4][3]) = Math.max(dp[4][3], dp[3][2] +1)
dp([4][2]) = Math.max(dp[4][2], dp[3][1] +1)
dp([4][1]) = Math.max(dp[4][1], dp[3][0] +1)

Next inner loops will be for j=3,j=2,j=1 (since zeroes = 1)
dp([3][3]) = Math.max(dp[3][3], dp[2][2] +1)
dp([3][2]) = Math.max(dp[3][2], dp[2][1] +1)
dp([3][1]) = Math.max(dp[3][1], dp[2][0] +1)

dp([2][3]) = Math.max(dp[2][3], dp[1][2] +1)
dp([2][2]) = Math.max(dp[2][2], dp[1][1] +1)
dp([2][1]) = Math.max(dp[2][1], dp[1][0] +1)

dp([1][3]) = Math.max(dp[1][3], dp[0][2] +1)
dp([1][2]) = Math.max(dp[1][2], dp[0][1] +1)
dp([1][1]) = Math.max(dp[1][1], dp[0][0] +1)

The main outer loop for i=0 and first elem of S is done , and dp arr looks like :
[
    [0,1,1,1],
    [0,1,1,1],
    [0,1,1,1],
    [0,1,1,1],
    [0,1,1,1],
    [0,1,1,1],
]

now i increments to 1 and we take next str which is "0001"

set zeros to 3 , ones to 1

Start outer loop where j=5 , till j>=zeroes aka j>=3 , so loop will 3 times

Start inner loop where k=3, till k>=ones aka k>=1 , so loop will run 3 times

Within loops:

dp[5][3] = Math.max(dp[5][3],dp[m-zeroes][n-ones],+1)
dp[5][3] = Math.max(dp[5][3] , dp[2][2]+1) // sets dp[5][3] to 2 since we set dp[2][2] as 1 earlier
dp[5][2] = Math.max(dp[5][2] , dp[2][1]+1) // 2
dp[5][1] = Math.max(dp[5][1] , dp[2][0]+1) // 1

dp[4][3] = Math.max(dp[4][3] , dp[1][2]+1) // 2
dp[4][2] = Math.max(dp[4][2] , dp[1][1]+1) // 2
dp[4][1] = Math.max(dp[4][1] , dp[1][0]+1) // 1

dp[3][3] = Math.max(dp[3][3] , dp[0][2]+1) // 1
dp[3][2] = Math.max(dp[3][2] , dp[0][1]+1) // 1
dp[3][1] = Math.max(dp[3][1] , dp[0][0]+1) // 1

The main outer loop for i=0 and first elem of S is done , and dp arr looks like :
[
    [0,1,1,1],
    [0,1,1,1],
    [0,1,1,1],
    [0,1,1,1],
    [0,1,2,2],
    [0,1,2,2],
]


 // Logs dp at the end after all elements are considered from S
 [
     Uint8Array(4) [0,1,1,1],
     Uint8Array(4) [1,2,2,2],
     Uint8Array(4) [1,2,3,3],
     Uint8Array(4) [1,2,3,3],
     Uint8Array(4) [1,2,3,3],
     Uint8Array(4) [1,2,3,4],
 ]

```

</br>

<li> <k>210. Course Schedule II <em>(topological sort)</em></k> </li>

<br/>

```
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.



Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
Example 2:

Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
Example 3:

Input: numCourses = 1, prerequisites = []
Output: [0]

[[1,0],[2,0],[3,1],[3,2]]
[0,0,0,0]



```

<br/>

<br/>

```
var findOrder = function(numCourses, prerequisites) {

    const graph = new Map()
    const queue = []
    const count = new Array(numCourses).fill(0)
    const results = []

   // [1,0],[2,0],[3,1],[3,2]
    // {0 : [1.2] . 1: [3] , 2: [3]}
    // [0 , 1 , 1 , 2 ]

    // [[1,0],    [0,1] ,   [1,2],]
    // {0 : [1] . 1: [0] , 2: [1] }
    // [1 , 2 , 0  ]

    for (const [x,y] of prerequisites) {
        if (graph.has(y)) {
            graph.get(y).push(x)
        }
        else graph.set(y,[x])
        count[x]++
    }

    for (let i=0;i<numCourses;i++) {
        if (count[i]===0) queue.push(i)
    }

    while (queue.length) {
        let elem = queue.shift()
        if (graph.has(elem)) {
            for (const x of graph.get(elem)) {
                count[x]--
                if (count[x]===0) queue.push(x)
            }
        }
        results.push(elem)
    }

    return results.length === numCourses ? results : []

}

```

<br/>

<br/>

```
Explanation :

First we create a graph (map) and use the prerequisite course as the key

Since the courses are numbered conesecutively from 1 - n , we create an array of size n

The array represents the courses that have dependencies

From prereqs array of x , y - we increment count array by 1 every time a course has a dependency

For ex : [1,0],[2,0],[3,1],[3,2]
We increment counter array at index 1 , at index 2 , index 3 , then index 3 again

We also build the graph which should look like {0:[1,2] , 1:[3] , 2:[3]}

Then we add the item with 0 dependencies to the queue and begin a while loop for the queue

In the while loop , we pop from the start using shift

Then we check if the item has any dependencies by checking for it in the graph. Before adding any of it's items (which are the courses that it is dependent on) to the queue , check if the count array for that item has a count of 0 after subtracting 1 from it (accounting for the current dependency being fulfilled)

If it does , add it to the queue

Then we push to results.

In the end , if the results array length is not equal to number of courses, return empty array
If length is correct, return entire results array


```

<br/>

<li> <k>253.Meeting Rooms II</k> </li>

</br>

```
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.



Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
Example 2:

Input: intervals = [[7,10],[2,4]]
Output: 1

```

</br>

</br>

```
Soln:

var minMeetingRooms = function(intervals) {
    if (!intervals || intervals.length < 1) {
        return 0;
    }
    let rooms = 0;
    let end = 0;
    const starts = intervals.map(a => a[0]).sort((a, b) => a-b);
    const ends = intervals.map(a => a[1]).sort((a, b) => a-b);
    for(let i=0; i < intervals.length; i++) {
        if(starts[i] < ends[end]) {
            rooms++;
        } else {
            end++;
        }
    }
    return rooms;
};

```

</br>

<li>  </li>
<li>  </li>
<li>  </li>
<li>  </li>
</ul>

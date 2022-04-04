<link href="style.css" rel="stylesheet" />

<h1>Important Algorithms </h1>

<h3>Backtracking </h3>

<br/>
<br/>

<ul>

<li> <k>46.Permutations</k></li>

<li>Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.</li>

<br/>

```

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]

```

<br/>

</br>

```

const permute = function(nums) {
  const result = [];
  const temp = [];

  // we are using a common strategy to initialize an 'answer' object, and pass it into
  // a recursion helper to modify the values. Sometimes it helps to separate this because
  // there are times you will want to have conditionals or a for loop in the top level code
  // before you call a recursive function.

  findPermutations(temp, nums, result);
  return result;
};

const findPermutations = (temp, nums, result) => {
  if (!nums.length) {
   // Here it is important to call concat(), just a fancy way of copying the original array.
   // See what happens when you remove concat, things will go crazy because you are
   // modifying an object that is referenced elsewhere!

    result.push(temp.concat());
    return;
  }

  for (var i = 0; i < nums.length; i++) {

	const newNum = nums[i];

	// we've picked our new number to add, so add it to our "picked" array called temp

    temp.push(newNum);

	// remember, in the first iteration, after picking 1, we need to pass in [2, 3] as the numbers left.

    nums.splice(i, 1);

    findPermutations(temp, nums, result);

	// Remember to "reset" our temp and nums array before our next iteration, where we pick the 2, and leave [1,3]

    temp.pop();
    nums.splice(i, 0, newNum);
  }
};

// ['a' , 'b' , 'c' , 'd']

arr.splice(0 , 1 ) // modified array in place removes 1 item starting at index 0 - array turns into [b,c,d]

arr.splice(1,2, 'meme') // deletes 2 items starting at index 1 and inserts 'meme' after deleting - [a,meme,d]

// Explanation
// The for loop in findPermutations never runs if nums is empty

First we call perm([],[1,2,3] , []) which calls below fn
i 0
perm([1],[2,3],[]); > (For loop will run twice since length of nums is 2)
                      i 0 (newNum=2)
                      perm([1,2],[3],[]) >
                                          i 0
                                          perm([1,2,3] , [],[]) >
                                                                  i 0
                                                                  fn returns and adds to results (for loop never runs)

                                          Pops off temp making it [1,2]
                                          Nums is now [3]
                                          For loop will only run once anyway
                    Pop off from temp making it [1]
                    Add newNum to nums making it [2,3]
                     i 1 (newNum=3)
                     perm([1,3],[2]) >
                                      i 0
                                      perm([1,3,2],[],[]) >
                                                            i 0
                                                            Pushes to results and returns (for loop never runs)
                                      resets both arrs
                                      temp is [1,3]
                                      nums [2]
                    Pop off temp making it [1]
                    Add newNum to Nums making it [2,3]
Pop off temp making it []
Add newNum to nums making it [1,2,3]\
i 1 (newNum = 2)
perm([2],[1,3]); (2 for loops)   >
                    i 0 (newNum = 1)
                    perm([2,1] , [3]) >
                                        (For loop will only run once)
                                        i 0 (newNum = 3)
                                        perm ([2,1,3] , [], [])         >
                                                                          pushes to array and returns , no for loop
                                        Pops off from temp making it [2,1]
                                        Adds newNum back to nums making it [3]
                  Pops off from temp : [2]
                  Makes nums [1,3]
                  i 1 (newNum = 3)
                  perm([2,3] , [1]) >
                                      (For loop only runs once)
                                      i 0
                                      perm([2,3,1] , [] , [])    >  Pushes to results and returns , no for loop
                                      Pops off temp : [2,3]
                                      Adds newNums to start of nums [1]
Pops off temp making it []
Adds newNum to nums making it [2,1,3]
i 2 (newNum = 3)
perm([3] , [2,1])  (2 for loops) >
                                  i 0
                                  perm([3,2],[1])       >
                                                         i 0
                                                         perm([3,2,1] , [] , [])  >
                                                                                  pushes to arr and returns
                                                         Pops off temp : [3,2]
                                                         Adds back newNum to nums : [1]
                                                         Only 1 for loop runs
                                Pops off from temp : [3]
                                Adds newNum to nums : [2,1]
                                i 1
                                perm([3,1] , [2]) >
                                                    i 0
                                                    perm([3,1,2] , [] , []) > pushes to arr and returns
                                                    resets temp and nums to [3 , 1] and [2]
Completed all loops , return result










```

</br>

<li><b>Sol'n Explanation</b> :
<ol>
<li>Example array : <span>[1,2,3]</span>   </li>
<li>Declare a results array where we will push results </li>
<li>We want to call a function <span>permutations</span> recursively and pass it <b>two parameters</b> which are arrays <span>temp (where we add elements from nums) & nums (the entire nums array) </span>   </li>
<li>Our solution f'n will look like this : <br/>
<code>permutations([],nums) </br>
return results;   </code>
  </li>
<li>The base case for recursive fn is when length of nums is 0 , because we know we have exhausted all elements.</b>   </li>

```
base case :
if (!nums.length) {
  results.push([...temp]);
  return;
}

// We need to do [...temp] or it will cause messy reference errors

```

<br/>
<li> If the length of temp is not equal to nums array, we start a <span>for loop (for every item in nums)</span>. Within the for loop , we : <ol>

<li> Push the <code>i</code> item from nums to temp </li>
<li> Mutate nums to remove the ith item we passed to temp from nums. </li>
<li>Call <code>permutations</code> recursively on it with new temp and nums.  </li>
<li>After that , we need to reset temp and nums back to where it was.  </li>
<li>Pop off the latest item from temp.  </li>
<li>Add back the ith item to the start of nums so in the next for loop the next item from nums will get selected.  </li>

</ol>

```
Initial call to trigger recursion will be
permutations([],nums) aka permutations([],[1,2,3])

This will first start a for loop for every item in nums (so total 3 loops) i=0,i=1,i=2

Within the first Loop we will set newNum as nums[i] which will be 1
Then we push newNum to temp making temp [1]
Then we call permutations on rest of nums excluding nums[i]
We do this by using
nums.slice(i,1)

Therefore, calling :

permutations([1] , [2,3]) (which will have 2 for loops)

Which will push first item of nums to temp and call fn again

permutations([1,2] , [3]) (which will have 1 for loop)

Which will do the same

permutations([1,2,3] , []) - finally we push to results as base case is met and never enter the for loop
This pushes and returns , and we continue the rest of the for loop for perms([1,2],[3]) which just resets nums and temp to [1,2] and [3]

Remember permutations([1,2] , [3]) only had 1 item in nums so we only had 1 for loop

So we go back to the call stack for permutations([1],[2,3]) and continue the for loop

We pop off temp making it [] and we set nums to [1,2,3] (reset both to when we first called it)

i becomes 1 for first recursive call of ([1],[2,3]);
so new newNUm will now be nums[i] = nums[1] which is 3
So then temp becomes [1,3] and nums is [2]
So we call
perms([1,3] , [2]) (1 for loop)

This will call perms([1,3,2],[]) which just pushes to results and returns
For loop continues and temp and nums is reset to [1,3] and [2]

Remember, this was the second for loop for perms([1],[2,3])
We continue the for loop and reset temp to [] and nums to [2,1,3]
Note that nums now becomes [2,1,3] after the first loop due to nums.splice(i,0,newNum)

So we go back to the main call stack for perms([],[2,1,3]) after we recursively completed calls
i is now 1
So we will call :
perms([2] , [1,3]) and repeat till nums is empty
perms([2],[1,3]) will call perms([2,1],[3]) and perms([2,3],[1]) which will call perms([2,1,3],[]) and perms([2,3,,1],[]) respectively

Then once perms([2],[1,3]) finishes recursive calls we will :
Reset temp to [] and nums to [1,2,3] as i=1 and nums.splice(i,0,newNum)

i will be 2 now and temp is [] nums is [1,2,3]
newNum will be nums[i] = 3
temp is [3] and nums is [1,2]

perms([3],[1,2]) will first call perms([3,1],[2]) which calls perms([3,1,2],[])
Then it will call perms([3],[2,1]) which calls perms([3,2,1],[]);

i reaches 3 and all our loops are done.



```

 </li>

</ol>
 </li>

<li><k>78.Subsets</k> </li>

<li> Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order. </li>

<br/>

```
Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]


Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.

```

<br/>

<br/>

```
len = 2
subs([] , [1,2,3]) >
                    newNum is 1
                    i 0
                    subs([1],[2,3]) >
                                      i 0 (newNum 2)
                                      subs([1,2],[3]) > pushes to results and returns
                                      Pops off temp and sets nums to [2,3] temp is [1]
                                      i 1 (newNum 3)
                                      subs([1,3],[2]) > pushes to results and returns

                    Pops off making temp [] and nums [1,2,3]
                    i 1
                    newNum is 2 (nums[i])
                    subs([2],[1,3]) >
                                      i 0 (newNum 1)
                                      subs([2,1],[3]) > pushes to results and returns
                                      Resets temp to [2] , nums to [1,3]
                                      i 1 (newNum 3)
                                      subs([2,3],[1]) > pushes to results and returns
                  i 2
                  newNum is 3
                  subs([3],[1,2]) > will call subs([3,1],[2]) which pushes to arr and returns
                                  > then calls subs([3,2],[1]) which pushes to arr and returns

2nd while loop done , now increment length to 3 (last while loop)

len = 3
subs([],[1,2,3]) >





```

<br/>
<br/>

```

// Best Sol'n:

var subSets = function(nums) {
    var results = [];
    dfs([],0);
    return results;

    var dfs = function(temp,start) {
        results.push([...temp])                        //(1)
        for(let i=start; i<nums.length; i++) {     //(2)
            temp.push(nums[i]);                    //(3)
            dfs(temp,i+1);
            temp.pop();
        }
    }
}

// [1,2,3]

dfs([],0) (will have 3 iterations of for loop)
Pushes [] to results
Starts a loop starting at 0 till the length of nums
i 0
Within the loop :
Pushes nums[i] to temp
Runs dfs on temp and i + 1
dfs([1],1)  >
              Pushes [1] to results
              Starts while loop from 1 till nums.length (2 iterations of for loop)
              i 1
              Pushes nums[1] to temp making it [1,2]
              dfs([1,2] , 2)                >
                                             i 2
                                             Pushes [1,2] to results
                                             Starts for loop with just 1 iteration since i=2
                                             temp is now [1,2,3]
                                             dfs([1,2,3],3)                  >
                                                                              Pushes [1,2,3] to results
                                                                              No for loop runs because i=3
                                            Continues for loop for dfs([1,2],2)
                                            Pops last elem from temp making it [1]
             Pops off temp : [1]
             i 2
             Pushes nums[2] to temp : [1,3]
             dfs([1,3], 3)                 >
                                            Pushes [1,3] to results no loop is ran
             Pops off temp : [1]
Continues for loop for dfs([],0)
Pops off temp making it [];
i 1 (second loop for dfs([],0))
temp.push(nums[1]) makes temp [2]
dfs([2],2)     >
                Pushes [2] to results
                Starts a for loop with 1 iterations
                Pushes nums[i] to temp
                i 2
                temp is now [2,3]
                dfs([2,3],3)               > Pushes [2,3] to results , no for loop
Continues for loop for dfs([2],2)
Pops off temp : []
i 2 (last loop for dfs([],0))
temp : [3]
dfs([3],3)      > pushes [3] to results and no for loop

We are done



```

<br/>

<li>Find number of ways to select 3 pages in ascendxing index order Such that no two adjacent pages are of same order </li>
<li> book is 01001 ,  Answer is 4</li>

<br/>

```
Find number of ways to select 3 pages in ascendxing index order Such that no two adjacent pages are of same order

book is 01001
Answer is 4
1 , 2 , 3 - 010
1 , 2 , 4 - 010
2 , 3 , 5 - 101
2 , 4 , 5 - 101

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

numberOfWays("01001");

```

<br/>

<br/>

```
cp([] , [0 , 1 , 0 , 0 , 1]) calls
                cp([0], [1,0,0,1]) calls
                                   cp([0,1], [0,0,1]) calls
                                                     cp([0,1,0], [0,1]) > pushes to arr and returns
                                                     For loop continues
                                                     arr turns to [0,1] nums turns to [0,0,1]
                                                     Second for loop
                                                     arr is [0,1,0] numsis [0,1]



```

<br/>

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
<li> </li>

<li> </li>

<li> </li>

<li> </li>

</ul>

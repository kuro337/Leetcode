var subsets = function (nums) {
  let results = [];
  let temp = [];
  results.push([]);

  if (!nums.length) return results;

  results.push([...nums]);

  let length = 1;

  while (length < nums.length) {
    subs(temp, nums);
    length++;
  }
  console.log(results);

  return results;

  function subs(temp, nums) {
    if (temp.length === length) {
      results.push([...temp]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      let newNum = nums[i];
      temp.push(newNum);
      nums.splice(i, 1);
      subs(temp, nums);
      temp.pop();
      nums.splice(i, 0, newNum);
    }
  }
};

subsets([1, 2, 3]);

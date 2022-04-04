var ladderLength = function (beginWord, endWord, wordList) {
  const set = new Set(wordList);
  if (!set.has(endWord)) return 0;
  let queue = [beginWord];
  const seen = new Set(queue);

  let length = 1;

  while (queue.length) {
    console.log(queue);
    const next = [];
    for (let elem of queue) {
      if (elem === endWord) {
        console.log(length);
        return length;
      }
      // hit

      let mutate = elem.split(""); // h i t
      // after below loop , next will have all words that are in our set that differ from orig word by 1 char
      for (let i = 0; i < mutate.length; i++) {
        let origChar = mutate[i]; // h
        for (let j = 0; j < 26; j++) {
          mutate[i] = String.fromCharCode(97 + j); // a i t
          let combined = mutate.join(""); // ait
          if (!seen.has(combined) && set.has(combined)) {
            next.push(combined);
            seen.add(combined);
          }
          mutate[i] = origChar;
        }
      }
    }
    queue = next;
    length++;
  }
  return 0;
};

ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);

// let l = ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]);

// console.log(l);

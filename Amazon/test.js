// var isValid = function (s) {
//   let foundBracket = false;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
//       if (foundBracket) foundBracket = false;
//       else {
//         console.log("false");

//         return false;
//       }
//     }
//     if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
//       foundBracket = true;
//     }
//   }
//   if (foundBracket) {
//     console.log("false");
//     return false;
//   } else {
//     console.log("true");
//     return true;
//   }
// };

// isValid("([])");

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    console.log("false");
    return false;
  }
  let result = "";
  const obj = {};

  for (let i = 0; i < s.length; i++) {
    if (i > 0 && result[i - 1] !== t[i - 1]) {
      console.log(result, t[0], "false");
      return false;
    }

    if (s[i] !== t[i]) {
      if (!obj[s[i]] || !obj[t[i]]) {
        if (!obj[s[i]]) obj[s[i]] = obj[t[i]] ? -1 : t[i];
        else if (!obj[t[i]]) obj[t[i]] = obj[s[i]] ? -1 : s[i];
        else {
          obj[t[i]] = s[i];
          obj[s[i]] = t[i];
        }
      }
      result += obj[s[i]];
    } else result += t[i];
  }
  console.log(result, "true");
  return true;
};

isIsomorphic("cat", "bgg");

// sc : b , tb : c  b!==b c!==c
// sa : g , tg : a
// st : g , tg already a so we can't set to t
//

isIsomorphic("egg", "add");

isIsomorphic("ba", "ab");

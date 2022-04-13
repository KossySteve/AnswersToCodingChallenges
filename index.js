// QUESTION LINK 
//https://www.hackerrank.com/challenges/find-strings/problem

//SOLUTION
function findStrings(w, queries) {
  const allSubStrings = (str) => {
    let subStrArr = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        subStrArr.push(str.substring(i, j));
      }
    }
    return subStrArr;
  };
  let arrSubs = [];
  w.forEach((str) => (arrSubs = [...arrSubs, ...allSubStrings(str)]));
  let subStr = [...new Set(arrSubs)].sort();
  return queries.map((q, i, a) => (subStr[q - 1] ? subStr[q - 1] : "INVALID"));
}

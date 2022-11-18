// PROBLEM LINK
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

//PROBLEM LINK : https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
//SOLUTION

function climbingLeaderboard(ranked, player) {
  return player.map(
    (score, index) =>
      [...new Set(ranked), score].sort((a, b) => b - a).indexOf(score) + 1
  );
}

//PROBLEM LINK : https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true

//SOLUTION

function timeConversion(s) {
  const ext = s.slice(-2).toUpperCase();
  const timeArr = s.slice(0, -2).split(":");

  if (ext === "PM") {
    timeArr[0] === "12"
      ? (timeArr[0] = "12")
      : (timeArr[0] = parseInt(timeArr[0]) + 12);
  } else if (ext === "AM" && timeArr[0] === "12") {
    timeArr[0] = "00";
  }

  return timeArr.join(":");
}

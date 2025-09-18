// https://school.programmers.co.kr/learn/courses/30/lessons/42578
// 의상

function solution(clothes) {
    return Object.values(clothes.reduce((obj, v) => {
        obj[v[1]] = obj[v[1]] ? obj[v[1]] + 1 : 1;
        return obj;
    }, {})).reduce((acc, v) => acc*(v + 1), 1) - 1;
}

// ChatGPT
function solution(clothes) {
  const cnt = new Map();
  for (const [, type] of clothes) {
    cnt.set(type, (cnt.get(type) || 0) + 1);
  }
  let answer = 1;
  for (const c of cnt.values()) answer *= (c + 1);
  return answer - 1;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/87390
// n^2 배열 자르기

// ChatGPT
function solution(n, left, right) {
  const L = right - left + 1;
  const answer = new Array(L);

  let r = Math.floor(left / n);
  let c = left % n;

  for (let idx = 0; idx < L; idx++) {
    answer[idx] = (r >= c ? r : c) + 1; // Math.max(r, c) + 1

    c++;
    if (c === n) { c = 0; r++; }
  }

  return answer;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/132265
// 롤케이크 자르기

function solution(topping) {
  const n = topping.length;
  const left = new Array(n);
  const right = new Array(n);

  const setL = new Set();
  const setR = new Set();

  // 누적 종류 수 초기화
  for (let i = 0; i < n; i++) {
    setL.add(topping[i]);
    left[i] = setL.size;
      
    setR.add(topping[n - i - 1]);
    right[n - i - 1] = setR.size;
  }

  // 공평하게 자르는 위치 세기
  let answer = 0;
  for (let i = 0; i < n - 1; i++) {
    if (left[i] === right[i + 1]) answer++;
  }

  return answer;
}

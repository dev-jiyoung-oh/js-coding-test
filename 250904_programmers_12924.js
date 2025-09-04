// https://school.programmers.co.kr/learn/courses/30/lessons/12924
// 숫자의 표현

// 내 풀이 - 가끔가다 효율성 테스트에서 몇 문제 실패
function solution(n) {
    let answer = 0;
    
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let j = i;
        
        while (sum < n) {
            sum += j++;
        }
        
        if (sum === n) answer++;
    }
    
    return answer;
}

// ChatGPT
// 투 포인터(슬라이딩 윈도우) O(n)
function solution(n) {
  let ans = 0;
  let left = 1, right = 1, sum = 1;

  while (left <= n) {
    if (sum === n) { ans++; sum -= left++; }        // 정답 찾음 → 왼쪽 이동
    else if (sum < n) { right++; sum += right; }    // 더 작음 → 오른쪽 확장
    else { sum -= left++; }                         // 더 큼 → 왼쪽 축소
  }
  return ans;
}
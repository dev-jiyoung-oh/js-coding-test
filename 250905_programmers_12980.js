// https://school.programmers.co.kr/learn/courses/30/lessons/12980
// 점프와 순간 이동

/* ChatGPT 풀이
 - 순간이동(짝수): n /= 2 → 점프 소모 없음
 - 점프(홀수): n = (n-1)/2 → 점프 소모 +1
 - 즉, n을 2진수로 바꿨을 때 1의 개수가 곧 필요한 점프 횟수
*/
function solution(n){
    return n.toString(2).replace(/0/g, '').length; 
}

function solution(n) {
  var cnt = 1;          // 점프 횟수 카운트
  while (1 < n) {       // n이 1보다 클 동안 반복
    if (n % 2 == 0) {   // n이 짝수일 때
      n = n / 2;
    } else {            // n이 홀수일 때
      n = (n - 1) / 2;
      cnt++;
    }
  }
  return cnt;
}

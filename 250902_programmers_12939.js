// https://school.programmers.co.kr/learn/courses/30/lessons/12939
// 최댓값과 최솟값

function solution(s) {
    const nums = s.split(' ').map(Number); // map(Number) 을 생략해도 Math.min / max 함수 내부에서 변환해주긴 함.
    const answer = Math.min(...nums) + ' ' + Math.max(...nums);
    return answer;
}
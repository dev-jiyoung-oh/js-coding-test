// https://school.programmers.co.kr/learn/courses/30/lessons/12915
// 문자열 내 마음대로 정렬하기
// 다른 사람의 풀이 참고 https://school.programmers.co.kr/learn/courses/30/lessons/12915/solution_groups?language=javascript
// 비교 연산자로 문자열을 대소 비교할 수 있다. (ASCII 값을 비교)

function solution(strings, n) {
    let answer = [...strings];
    
    answer.sort((a, b) => {
        if(a[n] > b[n]) return 1;
        if(b[n] > a[n]) return -1;

        if(a > b) return 1;
        if(b > a) return -1;

        return 0;
    });
    
    return answer;
}
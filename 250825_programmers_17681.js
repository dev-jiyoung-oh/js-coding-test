// https://school.programmers.co.kr/learn/courses/30/lessons/17681
// [1차] 비밀지도

// 다른 사람의 풀이 https://school.programmers.co.kr/learn/courses/30/lessons/17681/solution_groups
const solution = (n, arr1, arr2) =>
    arr1.map((a1, i) => (a1 | arr2[i]).toString(2).padStart(n, '0').replace(/0/g, ' ').replace(/1/g, '#'));

// 내 풀이
function solution(n, arr1, arr2) {
    var answer = [];
    
    for (let i = 0; i < n; i++) {
        let str = (arr1[i] | arr2[i]).toString(2).padStart(n, '0');
        str = str.replace(/0/g, ' ').replace(/1/g, '#');
        answer.push(str);
    }
    
    return answer;
}
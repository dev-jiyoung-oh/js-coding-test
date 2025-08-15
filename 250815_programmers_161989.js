// https://school.programmers.co.kr/learn/courses/30/lessons/161989
// 덧칠하기

function solution(n, m, section) {
    let count = 0;
    let painted = 0;
    
    for (let s of section) {
        if (painted <= s) {
            count++;
            painted = s + m;
        }
    }
    
    return count;
}
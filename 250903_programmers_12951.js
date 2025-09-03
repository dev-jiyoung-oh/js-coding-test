// https://school.programmers.co.kr/learn/courses/30/lessons/12951
// JadenCase 문자열 만들기

function solution(s) {
    let answer = '';
    let arr = s.toLowerCase().split(' ');
    
    for (let i = 0; i < arr.length; i++) {
        let w = arr[i];
        
        if (w[0] && isNaN(w[0])) {
            arr[i] = w[0].toUpperCase() + w.substring(1);
        }
    }
    
    answer = arr.join(' ');
    
    return answer;
}
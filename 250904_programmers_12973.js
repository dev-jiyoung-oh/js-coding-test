// https://school.programmers.co.kr/learn/courses/30/lessons/12973
// 짝지어 제거하기

function solution(s) {
    let stk = [];
    
    for (let i = 0; i < s.length; i++) {
        if (stk.length && s[i] === stk[stk.length - 1]) stk.pop();
        else stk.push(s[i]);
    }
    
    return stk.length === 0 ? 1 : 0;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/12909
// 올바른 괄호
// 다른 사람의 풀이 참고 https://school.programmers.co.kr/learn/courses/30/lessons/12909/solution_groups?language=javascript

function solution(s){
    const OPEN = '(', CLOSED = ')';
    let openCnt = 0;
    
    for (const ch of s) {
        if (ch === OPEN) openCnt++;
        if (ch === CLOSED) openCnt--;
        if (openCnt < 0) return false;
    }

    return openCnt === 0;
}
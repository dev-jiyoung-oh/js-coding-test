// http://xn--school-v72y.programmers.co.kr/learn/courses/30/lessons/76502
// 괄호 회전하기

function solution(s) {
    const len = s.length; if (len % 2 !== 0) return 0;
    const open = { '(': true, '[': true, '{': true };
    const pair = { ')': '(', ']': '[', '}': '{' };
    const t = s + s;
    
    let answer = 0;
    
    for (let start = 0; start < len; start++) {
        let stack = new Array(len);
        let sp = 0;
        let flag = true;
        
        for (let i = start; i < start + len; i++) {
            let ch = t[i];
            
            if (open[ch]) {
                stack[sp++] = ch;
            } else if (sp && stack[sp - 1] === pair[ch]) {
                sp--;
            } else {
                flag = false;
                break;
            }
        }
        
        if (flag && sp === 0) answer++;
    }
    
    return answer;
}
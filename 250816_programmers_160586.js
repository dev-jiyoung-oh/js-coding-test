// https://school.programmers.co.kr/learn/courses/30/lessons/160586
// 대충 만든 자판

function solution(keymap, targets) {
    let chars = {}; // { 문자: 눌러야 하는 최소 횟수, ... }
    const MAX = 100;
    
    for (const key of keymap) {
        for (let i = 0; i < key.length; i++) {
            const char = key[i];
            chars[char] = Math.min(chars[char] ?? MAX, i + 1);
        }
    }
    
    let answer = new Array(targets.length).fill(0);
    for (let i = 0; i < targets.length; i++) {
        for (let c of targets[i]) {
            if (!chars[c]) {
                answer[i] = -1;
                break;
            } else {
                answer[i] += chars[c];
            }
        }
    }
    
    return answer;
}
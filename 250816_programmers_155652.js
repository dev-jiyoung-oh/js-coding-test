// https://school.programmers.co.kr/learn/courses/30/lessons/155652
// 둘만의 암호

const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function solution(s, skip, index) {
    const alp = alphabets.filter(c => !skip.includes(c));
    
    let answer = '';
    
    for (const c of s) {
        const idx = (alp.indexOf(c) + index) % alp.length;
        answer += alp[idx];
    }
    
    return answer;
}
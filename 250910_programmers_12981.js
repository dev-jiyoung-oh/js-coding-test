// https://school.programmers.co.kr/learn/courses/30/lessons/12981
// 영어 끝말잇기

function solution(n, words) {
    const seen = new Set();
    
    for (let i = 0; i < words.length; i++) {
        const w = words[i];
        
        if (i > 0 && w[0] !== words[i - 1].slice(-1) || seen.has(w)) {
            const player = (i % n) + 1;
            const round  = Math.floor(i / n) + 1;
            
            return [player, round];
        }

        seen.add(w);
    }

    return [0, 0]; // 완벽
}
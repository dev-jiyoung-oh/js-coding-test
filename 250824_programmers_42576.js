// https://school.programmers.co.kr/learn/courses/30/lessons/42576
// 완주하지 못한 선수

// 내 풀이
function solution(participant, completion) {
    const completionMap = {};
    
    for (let c of completion) {
        completionMap[c] = (completionMap[c] | 0) + 1;
    }
    
    for (let p of participant) {
        if (!completionMap[p]) return p;
        if (--completionMap[p] < 0) return p;
    }
    
    return null;
}

// 다른 사람의 풀이 https://school.programmers.co.kr/learn/courses/30/lessons/42576/solution_groups
function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}
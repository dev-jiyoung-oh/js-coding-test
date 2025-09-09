// https://school.programmers.co.kr/learn/courses/30/lessons/138476
// 귤 고르기

function solution(k, tangerine) {
    let tDict = {};
    tangerine.forEach(t => tDict[t] = (tDict[t] || 0) + 1);
    
    let tArr = Object.values(tDict).sort((a, b) => b - a);
    
    let answer = 0;
    
    for (const t of tArr) {
        answer++;
        
        if (k > t) k -= t;
        else break;
    }
    
    return answer;
}
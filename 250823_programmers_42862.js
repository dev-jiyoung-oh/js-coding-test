// https://school.programmers.co.kr/learn/courses/30/lessons/42862
// 체육복

// 다른 사람 풀이 https://school.programmers.co.kr/learn/courses/30/lessons/42862/solution_groups?language=javascript
function solution(n, lost, reserve) {
    const students = {};
    let answer = 0;
    
    for(let i = 1; i <= n; i++){
        students[i] = 1;
    }
    
    lost.forEach(number => students[number] -= 1);
    reserve.forEach(number => students[number] += 1);

    for (let i = 1; i <= n; i++){
        if(students[i] === 2 && students[i-1] === 0){
                students[i-1]++;
                students[i]--;
        } else if(students[i] === 2 && students[i+1] === 0){
                students[i+1]++;
                students[i]--;
        }
    }
    
    for (let key in students){
        if(students[key] >= 1){
            answer++;
        }
    }
    
    return answer;
}

// 내 풀이
function solution(n, lost, reserve) {
    const lost_ = lost.sort((a,b) => a - b).filter(v => reserve.indexOf(v) === -1);
    const reserve_ = reserve.sort((a,b) => a - b).filter(v => lost.indexOf(v) === -1);
    
    let answer = n - lost_.length;
    let reserveIdx = 0;
    
    for (const l of lost_) {
        if (reserveIdx >= reserve_.length) break;
        for (let i = reserveIdx; i < reserve_.length; i++) {
            const r = reserve_[i];
            
            if (Math.abs(l - r) === 1) {
                answer++;
                reserveIdx = i + 1;
                break;
            } else if (r < l) {
                reserveIdx = i + 1;
                continue;
            } else if (r > l) {
                break;
            }
        }
    }
    
    return answer;
}
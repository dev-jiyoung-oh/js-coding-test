// https://school.programmers.co.kr/learn/courses/30/lessons/42889
// 실패율

function solution(N, stages) {
    // count[stage]: stage에 머무는 인원 수(1..N), N+1은 완주자
    const count = new Array(N + 2).fill(0);
    for (const stage of stages) {
        if (stage >= 1 && stage <= N + 1) count[stage]++;
    }

    const result = [];
    let reached = stages.length; // 1스테이지 도달 인원(초기엔 전체)

    for (let stage = 1; stage <= N; stage++) {
        const fail = count[stage];
        const rate = reached > 0 ? fail / reached : 0;
        
        result.push({ stage, rate });
        reached -= fail; // 다음 스테이지 도달 인원으로 갱신
    }
    
    result.sort((a, b) => {
        if (a.rate !== b.rate) return b.rate - a.rate;
        else return a.stage - b.stage;
    });
    
    return result.map(x => x.stage);
}
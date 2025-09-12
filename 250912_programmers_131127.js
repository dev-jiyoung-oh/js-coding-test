// https://school.programmers.co.kr/learn/courses/30/lessons/131127
// 할인 행사

function solution(want, number, discount) {
    const WINDOW = 10;
    const len = discount.length;
    const need = [...number];
    
    const idx = new Map();
    for (let i = 0; i < want.length; i++) idx.set(want[i], i);
    
    let answer = 0;
    
    // 윈도우 초기화
    for (let i = 0; i < WINDOW; i++) {
        const j = idx.get(discount[i]);
        if (j !== undefined) need[j]--;
    }
    
    // 윈도우 슬라이드
    let left = 0, right = WINDOW - 1;
    while (right < len) {
        if (need.every(n => n <= 0)) answer++;
        
        const outIdx = idx.get(discount[left]);
        if (outIdx !== undefined) need[outIdx]++;
        
        left++; right++;
        
        const inIdx = idx.get(discount[right]);
        if (inIdx !== undefined) need[inIdx]--;
    }
    
    return answer;
}
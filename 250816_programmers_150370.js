// https://school.programmers.co.kr/learn/courses/30/lessons/150370
// 2023 KAKAO BLIND RECRUITMENT / 개인정보 수집 유효기간

function toNum(str) {
    const [y, m, d] = str.split('.').map(Number);
    return y * 12 * 28 + m * 28 + d;
}

function solution(today, terms, privacies) {
    const today_num = toNum(today);
    
    let term_map = {};
    let answer = [];
    
    for (const term of terms) {
        const [type, period] = term.split(' ');
        term_map[type] = Number(period) * 28;
    }
    
    for (let i = 0; i < privacies.length; i++) {
        const [date_str, type] = privacies[i].split(' ');
        
        if (toNum(date_str) + term_map[type] <= today_num)
            answer.push(i + 1);
    }
    
    return answer;
}
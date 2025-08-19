// https://school.programmers.co.kr/learn/courses/30/lessons/118666
// 성격 유형 검사하기

function solution(survey, choices) {
    const TYPES = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];
    
    let MBTI = {};
    
    TYPES.forEach(([t1, t2]) => {
        MBTI[t1] = 0;
        MBTI[t2] = 0;
    });
    
    survey.forEach((s, i) => {
        const t = choices[i] < 4 ? s[0] : s[1];
        MBTI[t] += Math.abs(4 - choices[i]);
    });
    
    return TYPES.map(([t1, t2]) => MBTI[t2] > MBTI[t1] ? t2 : t1).join('');
}
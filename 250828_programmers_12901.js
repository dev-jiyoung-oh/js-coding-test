// https://school.programmers.co.kr/learn/courses/30/lessons/12901
// 2016년

function solution(a, b) {
    const MONTH_DAYS = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    
    const toDay = (a, b) => {
        let day = b;
        for (let i = 1; i < a; i++) {
            day += MONTH_DAYS[i];
        }
        return day;
    }
    
    const day = toDay(a, b);
    
    return DAYS[(day-1) % 7];
}

// 다른 사람 풀이 참고해서 아래처럼 수정 https://school.programmers.co.kr/learn/courses/30/lessons/12901/solution_groups?language=javascript
function solution(a, b) {
    const MONTH_DAYS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    
    let day = b;
    
    for (let i = 0; i < a - 1; i++) {
        day += MONTH_DAYS[i];
    }
    
    return DAYS[day % 7];
}
// https://school.programmers.co.kr/learn/courses/30/lessons/42586
// 기능개발

function solution(progresses, speeds) {
    const n = progresses.length;
    
    let answer = [];
    let day = 0;
    
    for (let i = 0; i < n; i++) {
        const needDay = Math.ceil((100 - progresses[i]) / speeds[i]);
        
        if (needDay > day) {
            day = needDay;
            answer.push(1);
        } else {
            answer[answer.length - 1]++;
        }
    }
    
    return answer;
}
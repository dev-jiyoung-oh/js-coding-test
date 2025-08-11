// https://school.programmers.co.kr/learn/courses/30/lessons/388351
// 유연근무제

function solution(schedules, timelogs, startday) {
    var answer = schedules.length;
    
    for (let i=0; i<schedules.length; i++) {
        let atLeastTime = calcAtLeastTime(schedules[i]);
        let day = startday;
        
        for (let j=0; j<timelogs[i].length; j++) {
            if (day < 6 && timelogs[i][j] > atLeastTime) {
                answer--;
                break;
            }
            
            day = day % 7 + 1;
        }
    }
    
    return answer;
}

function calcAtLeastTime(schedule) {
    let hh = Math.floor(schedule / 100);
    let mm = (schedule % 100) + 10;
    
    hh += Math.floor(mm / 60);
    mm %= 60;
    
    return hh * 100 + mm;
}
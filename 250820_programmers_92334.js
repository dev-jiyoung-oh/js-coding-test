// https://school.programmers.co.kr/learn/courses/30/lessons/92334
// 신고 결과 받기

function solution(id_list, report, k) {
    const reports = [...new Set(report)].map(s => s.split(' '));
    
    let reported_cnts = new Map();
    let main_cnts = new Map();
    
    for (const [_, reported] of reports) {
        reported_cnts.set(reported, (reported_cnts.get(reported) ?? 0) + 1);
    }
    
    for (const [reporter, reported] of reports) {
        if (reported_cnts.get(reported) >= k) {
            main_cnts.set(reporter, (main_cnts.get(reporter) ?? 0) + 1);
        }
    }
    
    return id_list.map(r => main_cnts.get(r) || 0);
}
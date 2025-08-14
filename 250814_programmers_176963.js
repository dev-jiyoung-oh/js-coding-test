// https://school.programmers.co.kr/learn/courses/30/lessons/176963
// 추억 점수

function solution(name, yearning, photo) {
    let answer = new Array(photo.length);
    let name_yearning = {};
    
    for (let i = 0; i < name.length; i++) {
        name_yearning[name[i]] = yearning[i];
    }
    
    for (let i = 0; i < photo.length; i++) { // photo.map( ~ ) 으로도 처리 가능!
        answer[i] = photo[i].reduce((acc, name) => acc + (name_yearning[name] ?? 0), 0);
    }
    
    return answer;
}
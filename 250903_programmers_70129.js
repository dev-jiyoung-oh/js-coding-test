// https://school.programmers.co.kr/learn/courses/30/lessons/70129
// 이진 변환 반복하기

function solution(s) {
    let answer = [0, 0]; // [이진 변환 횟수, 변환 과정에서 제거된 0의 개수]
    let str = s;
    
    while (str.length > 1) {
        let str_ = str.replace(/0/g, '');
        
        answer[0]++;
        answer[1] += str.length - str_.length;
        
        str = str_.length.toString(2);
    }
    
    return answer;
}
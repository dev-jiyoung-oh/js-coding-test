// https://school.programmers.co.kr/learn/courses/30/lessons/131128
// 숫자 짝꿍

function solution(X, Y) {
    const x_arr = X.split('').sort((a, b) => b - a);
    const y_arr = Y.split('').sort((a, b) => b - a);
    
    let answer = '';
    let x_i = 0, y_i = 0;
    
    while (x_i < X.length && y_i < Y.length) {
        if (x_arr[x_i] > y_arr[y_i]) {
            x_i++;
        } else if (x_arr[x_i] < y_arr[y_i]) {
            y_i++;
        } else {
            answer += x_arr[x_i];
            x_i++;
            y_i++;
        }
    }
    
    if (answer.length === 0) return '-1';
    if (Number(answer) === 0) return '0';
    return answer;
}
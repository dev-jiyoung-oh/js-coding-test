// https://school.programmers.co.kr/learn/courses/30/lessons/12941
// 최솟값 만들기

function solution(A, B){
    const A_ = [...A];
    const B_ = [...B];
    
    A_.sort((a, b) => a - b);
    B_.sort((a, b) => b - a);
    
    return A_.reduce((sum, v, i) => sum += v * B_[i], 0);
}
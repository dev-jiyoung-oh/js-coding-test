// https://school.programmers.co.kr/learn/courses/30/lessons/12945
// 피보나치 수

function solution(n) {
    const MOD = 1234567;
    
    let a = 0, b = 1;
    
    for (let i = 2; i <= n; i++) {
        [ a, b ] = [ b, (a + b) % MOD ];
    }
    
    return b;
}
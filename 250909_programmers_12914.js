// https://school.programmers.co.kr/learn/courses/30/lessons/12914
// 멀리 뛰기

function solution(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    const MOD = 1234567;
    let a = 1, b = 2; // f(1), f(2)

    for (let i = 3; i <= n; i++) {
        const c = (a + b) % MOD; // f(i) = f(i-1) + f(i-2)
        a = b;
        b = c;
    }

    return b;
}
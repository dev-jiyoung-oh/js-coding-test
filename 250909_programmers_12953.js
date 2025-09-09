// https://school.programmers.co.kr/learn/courses/30/lessons/12953
// N개의 최소공배수

function gcd(a, b) {
    while (b != 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function solution(arr) {
    return arr.reduce((acc, x) => acc / gcd(acc, x) * x);
}
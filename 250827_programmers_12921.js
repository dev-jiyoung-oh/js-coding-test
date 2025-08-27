// https://school.programmers.co.kr/learn/courses/30/lessons/12921?language=javascript
// 소수 찾기

// https://jerryjerryjerry.tistory.com/199 참고
function solution(n) {
    const primes = new Array(n + 1).fill(true);
    primes[0] = primes[1] = false; // 0과 1은 소수가 아니므로 제외

    // 에라토스테네스의 체 알고리즘
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (primes[i]) {
            // i의 배수들은 소수가 아니므로 제외
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }
    
    return primes.filter(e => e).length;
}
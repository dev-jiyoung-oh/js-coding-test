// https://school.programmers.co.kr/learn/courses/30/lessons/12911
// 다음 큰 숫자

function bitCount(n) {
    let cnt = 0;
    while(n) {
        n &= (n - 1); // 최하위 1비트 제거
        cnt++;
    }
    return cnt;
}

function solution(n) {
    const target = bitCount(n);
    let answer = n + 1;
    
    while (bitCount(answer) !== target) answer++;

    return answer;
}
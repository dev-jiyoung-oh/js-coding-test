// https://school.programmers.co.kr/learn/courses/30/lessons/133499
// 옹알이 (2)
// 다른 사람의 풀이 참고 https://school.programmers.co.kr/learn/courses/30/lessons/133499/solution_groups?language=javascript

function solution(babbling) {
    const regexp1 = /(aya|ye|woo|ma)\1+/; // *연속 반복 검출
    const regexp2 = /^(aya|ye|woo|ma)+$/; // 문자열이 전부 옹알이 단어로만 구성되어 있는지 확인

    return babbling.reduce((ans, word) => (
      !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
    ), 0);
}
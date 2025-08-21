// https://school.programmers.co.kr/learn/courses/30/lessons/72410
// 신규 아이디 추천
// 다른 사람 풀이 참고 https://school.programmers.co.kr/learn/courses/30/lessons/72410/solution_groups?language=javascript

function solution(new_id) {
    const id = new_id
        .toLowerCase()
        .replace(/[^\w\d-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .padEnd(1, 'a')
        .slice(0, 15)
        .replace(/\.$/g, '');
    return id.padEnd(3, id[id.length-1]);
}
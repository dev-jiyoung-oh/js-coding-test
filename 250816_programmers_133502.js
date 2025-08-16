// http://xn--school-v05z.programmers.co.kr/learn/courses/30/lessons/133502
// 햄버거 만들기
// 다른 사람의 풀이 참고 https://school.programmers.co.kr/learn/courses/30/lessons/133502/solution_groups?language=javascript

function solution(ingredient) {
    const ORDER = [1, 3, 2, 1]; // 위에서부터. 빵(1) – 고기(3) – 야채(2) - 빵(1)
    
    let answer = 0;
    let stack = [];
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        if (
            stack[stack.length - 1] === ORDER[0] &&
            stack[stack.length - 2] === ORDER[1] &&
            stack[stack.length - 3] === ORDER[2] &&
            stack[stack.length - 4] === ORDER[3]
        ) {
            stack.splice(-4);
            answer++;
        }
    }
    
    return answer;
}
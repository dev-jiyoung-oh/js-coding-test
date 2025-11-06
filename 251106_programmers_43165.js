// https://school.programmers.co.kr/learn/courses/30/lessons/43165
// 타겟 넘버


function solution(numbers, target) {
    const len = numbers.length;
    
    function dfs(index, value) {
        if (index === len) return value === target ? 1 : 0;
        return (
            dfs(index + 1, value + numbers[index]) +
            dfs(index + 1, value - numbers[index])
        );
    }
    
    return dfs(0, 0);
}
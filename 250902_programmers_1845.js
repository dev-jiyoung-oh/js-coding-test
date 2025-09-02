// https://school.programmers.co.kr/learn/courses/30/lessons/1845
// 포켓몬

function solution(nums) {
    const MAX_GET = Math.floor(nums.length / 2);
    const numSet = new Set(nums);
    return Math.min(MAX_GET, numSet.size);
}
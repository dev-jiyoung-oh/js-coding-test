// https://school.programmers.co.kr/learn/courses/30/lessons/42885
// 구명보트

function solution(people, limit) {
    const arr = [...people];
    arr.sort((a, b) => a - b);
    
    let boatCount = 0;
    let left = 0, right = arr.length - 1;
    
    while (left <= right) {
        if (arr[left] + arr[right] <= limit) left++;
        right--;
        boatCount++;
    }
    
    return boatCount;
}
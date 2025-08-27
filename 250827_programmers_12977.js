// https://school.programmers.co.kr/learn/courses/30/lessons/12977
// 소수 만들기
// 다른 사람의 풀이 참고 https://school.programmers.co.kr/learn/courses/30/lessons/12977/solution_groups?language=javascript

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (num % i === 0) return false;

    return true;
}

function solution(nums) {
    let primeCnt = 0;
    
    for (let i = 0; i < nums.length - 2; i++)
        for (let j = i + 1; j < nums.length - 1; j++)
            for (let k  = j + 1; k < nums.length; k++)
                if (isPrime(nums[i] + nums[j] + nums[k]))
                    primeCnt++;
    
    return primeCnt;
}
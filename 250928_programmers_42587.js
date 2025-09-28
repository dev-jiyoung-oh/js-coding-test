// https://school.programmers.co.kr/learn/courses/30/lessons/42587
// 프로세스

// 내 풀이 - 정렬 배열과 값 비교
function solution(priorities, location) {
    const n = priorities.length;
    const sorted = [...priorities].sort((a, b) => b - a);
    
    let count = 0;
    let i = 0;
    
    while (count <= n) {
        if (priorities[i] === sorted[count]) {
            count++;
            if (i === location) break;
        }
        
        i = (i + 1) % n;
    }
    
    return count;
}

// 다른 사람의 풀이 - 큐 시뮬레이션
function solution(priorities, location) {
    var arr = priorities.map((priority, index) => {
        return {
            index: index, priority: priority
        };
    });

    var queue = [];

    while(arr.length > 0) {
        var firstEle = arr.shift();
        var hasHighPriority = arr.some(ele => ele.priority > firstEle.priority);
        if (hasHighPriority) {
            arr.push(firstEle);
        } else {
            queue.push(firstEle);
        }
    }

    return queue.findIndex(queueEle => queueEle.index === location) + 1;
}
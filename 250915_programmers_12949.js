// https://school.programmers.co.kr/learn/courses/30/lessons/12949
// 행렬의 곱셈

function solution(arr1, arr2) {
    // 행렬 A가 m x n 행렬이고 B가 n x p 행렬이면, 결과 행렬 AB는 m x p 행렬
    const m = arr1.length;
    const n = arr2.length;
    const p = arr2[0].length;
    
    const answer = new Array(m);
    
    for (let i = 0; i < m; i++) {
        const Ai = arr1[i];
        answer[i] = new Array(p).fill(0);

        for (let j = 0; j < n; j++) {
            const Bj = arr2[j];
            for (let k = 0; k < p; k++) {
                answer[i][k] += Ai[j] * Bj[k];
            }
        }
    }
    
    return answer;
}

// 다른 사람 풀이 https://school.programmers.co.kr/learn/courses/30/lessons/12949/solution_groups?language=javascript
function solution(arr1, arr2) {
    return arr1.map((row) => arr2[0].map((_, i) => row.reduce((acc, v, j) => acc + v * arr2[j][i], 0)))
}
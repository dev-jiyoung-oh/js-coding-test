// https://school.programmers.co.kr/learn/courses/30/lessons/87946
// 피로도

function solution(k, dungeons) {
    const len = dungeons.length;
    const visited = new Array(len).fill(false);
    let maxCount = 0;
    
    const dfs = (left, count) => {
        maxCount = Math.max(maxCount, count);
        
        for (let i = 0; i < len; i++) {
            const [need, cost] = dungeons[i];
            
            if (!visited[i] && need <= left) {
                visited[i] = true;
                dfs(left - cost, count + 1);
                visited[i] = false;
            }
        }
    }
    
    dfs(k, 0);
    
    return maxCount;
}
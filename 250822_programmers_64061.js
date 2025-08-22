// https://school.programmers.co.kr/learn/courses/30/lessons/64061
// 크레인 인형뽑기 게임

function solution(board, moves) {
    const n = board.length;
    
    let answer = 0;
    let topRow = new Array(n).fill(-1);
    let stack = [];
    
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (topRow[c] === -1 && board[r][c] > 0) {
                topRow[c] = r;
            }
        }
    }
    
    for (let move of moves) {
        const c = move - 1;
        const r = topRow[c];
        
        if (r > -1 && r < n) {
            const top = stack[stack.length - 1];
            const now = board[r][c];
            
            if (now === top) {
                stack.pop();
                answer += 2;
            } else {
                stack.push(now);
            }
            
            topRow[c]++;
        }
    }
    
    return answer;
}
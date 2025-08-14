// https://school.programmers.co.kr/learn/courses/30/lessons/172928
// 공원 산책

const DIR = { N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1] };

function solution(park, routes) {
    let r = 0, c = 0; // r: row, c: column
    
    for (let i = 0; i < park.length; i++) {
        if (park[i].includes('S')) {
            r = i, c = park[i].indexOf('S');
        }
    }
    
    for (const route of routes) {
        const [d, stepStr] = route.split(' ');
        const steps = Number(stepStr);
        const [dr, dc] = DIR[d];
        
        let nr = r, nc = c;
        
        let is_break = false;
        for (let step = 0; step < steps; step++) {
            nr += dr; nc += dc;
            
            if (!park[nr] || !park[nr][nc] || park[nr][nc] == 'X') {
                is_break = true;
                break;
            }
        }
        if (is_break) continue;
        
        r = nr, c = nc;
    }
    
    return [r, c];
}
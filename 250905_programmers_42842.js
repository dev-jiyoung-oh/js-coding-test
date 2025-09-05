// https://school.programmers.co.kr/learn/courses/30/lessons/42842
// 카펫

function solution(brown, yellow) {
    const total = brown + yellow;
    
    for (let height = 1; height * height <= total; height++) {
        if (total % height !== 0) continue;
        
        let width = total / height;
        if ((width - 2) * (height - 2) === yellow) {
            return [width, height];
        }
    }
    
    return [0, 0];
}
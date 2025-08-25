// https://school.programmers.co.kr/learn/courses/30/lessons/17682
// [1차] 다트 게임

// 다른 사람의 풀이 https://school.programmers.co.kr/learn/courses/30/lessons/17682/solution_groups
function solution(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 },
          options = { '*': 2, '#': -1, undefined: 1 };

    //let darts = dartResult.match(/\d.?\D/g);
    let darts = dartResult.match(/\d{1,2}[SDT][*#]?/g);

    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
}

// 내 풀이
function solution(dartResult) {
    let scores = [0, 0, 0];
    let scoreIndex = 0;
    
    for (const r of dartResult) {
        if (isNaN(r)) {
            switch(r) {
                case 'S':
                     break;
                case 'D':
                    scores[scoreIndex] = Math.pow(scores[scoreIndex], 2); break;
                case 'T':
                    scores[scoreIndex] = Math.pow(scores[scoreIndex], 3); break;
            }
            
            switch(r) {
                case '*':
                    scoreIndex--;
                    if (scoreIndex > 0) scores[scoreIndex - 1] = scores[scoreIndex - 1] * 2;
                    scores[scoreIndex] = scores[scoreIndex] * 2;
                    break;
                case '#':
                    scoreIndex--;
                    scores[scoreIndex] = -scores[scoreIndex];
                    break;
            }
            scoreIndex++;
        } else {
            scores[scoreIndex] = scores[scoreIndex] * 10 + Number(r);
        }
    }
    
    return scores.reduce((acc, v) => acc += v, 0);
}
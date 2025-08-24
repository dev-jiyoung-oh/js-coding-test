// https://school.programmers.co.kr/learn/courses/30/lessons/42840
// 모의고사

function solution(answers) {
    const values = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    const scores = new Array(values.length).fill(0);
    
    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];

        for (let j = 0; j < values.length; j++) {
            if (values[j][i % values[j].length] === answer) scores[j]++;
        }
    }

    const MAX_SCORE = Math.max(...scores);
    const answer = [];
    
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === MAX_SCORE) answer.push(i + 1);
    }
    
    return answer;
}
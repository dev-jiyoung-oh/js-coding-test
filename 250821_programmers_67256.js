// https://school.programmers.co.kr/learn/courses/30/lessons/67256
// [카카오 인턴] 키패드 누르기

const POS = {
  1:[0,0], 2:[0,1], 3:[0,2],
  4:[1,0], 5:[1,1], 6:[1,2],
  7:[2,0], 8:[2,1], 9:[2,2],
  '*':[3,0], 0:[3,1], '#':[3,2],
};
const LEFT = 'L';
const RIGHT = 'R';

const dist = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);

function solution(numbers, hand) {
    const HAND = hand === 'left' ? LEFT : RIGHT;
    
    let lPos = POS['*'];
    let rPos = POS['#'];
    let history = [];
    
    const calcLR = (nextPos) => {
        const ld = dist(nextPos, lPos), rd = dist(nextPos, rPos);
        return ld === rd ? HAND : (ld < rd ? LEFT : RIGHT);
    }
    
    const move = (nextPos, lr) => {
        if (lr === LEFT) {
            lPos = nextPos;
            history.push(LEFT);
        } else if (lr === RIGHT) {
            rPos = nextPos;
            history.push(RIGHT);
        }
    }
    
    for (const num of numbers) {
        const next = POS[num];

        switch(num) {
            case 1: case 4: case 7:
                move(next, LEFT); break;
            case 3: case 6: case 9:
                move(next, RIGHT); break;
            case 2: case 5: case 8: case 0:
                const rl = calcLR(next);
                move(next, rl); break;
        }
    }
    
    return history.join('');
}
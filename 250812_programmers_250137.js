// https://school.programmers.co.kr/learn/courses/30/lessons/250137
// [PCCP 기출문제] 1번 / 붕대 감기

function solution(bandage, health, attacks) {
    const [t, x, y] = bandage; // [시전 시간, 초당 회복량, 추가 회복량]
    
    let hp = health; // 현재 체력
    let curr_t = 0; // 직전 공격 t

    for (const [time, attack] of attacks) {
        const diff_t = time - curr_t - 1; // 연속 성공 t

        hp = Math.min(hp + ( diff_t * x + Math.floor(diff_t / t) * y ), health); // 회복 + 추가 회복
        hp = hp - attack;
        
        curr_t = time;
        
        // 현재 체력이 0 이하가 되면 캐릭터가 죽으며 더 이상 체력을 회복할 수 없음. -1 리턴
        if (hp <= 0) {
            hp = -1;
            break;
        }
    }
    
    return hp;
}
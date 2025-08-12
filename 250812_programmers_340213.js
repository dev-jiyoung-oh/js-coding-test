// https://school.programmers.co.kr/learn/courses/30/lessons/340213
// [PCCP 기출문제] 1번 / 동영상 재생기

const STEP = 10;

function toMin(pos) {
    const [hh, mm] = pos.split(':').map(Number);
    return hh * 60 + mm;
}

function toStr(t) {
    const hh = Math.floor(t / 60);
    const mm = t % 60;
    
    return String(hh).padStart(2, '0') + ':' + String(mm).padStart(2, '0');
}

function skip(t, start, end) {
    return t >= start && t <= end ? end : t;
}

function clamp(t, len) {
    return Math.max(0, Math.min(t, len));
}

function solution(video_len, pos, op_start, op_end, commands) {
    const len = toMin(video_len);
    const start = toMin(op_start);
    const end = toMin(op_end);
    
    let t = toMin(pos);
    
    for (const command of commands) {
        t = skip(t, start, end);
        t += command === "next" ? STEP : -STEP;
        t = clamp(t, len);
        t = skip(t, start, end);
    }
    
    return toStr(t);
}
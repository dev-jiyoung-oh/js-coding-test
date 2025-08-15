// https://school.programmers.co.kr/learn/courses/30/lessons/161990
// 바탕화면 정리

function solution(wallpaper) {
    let lux = wallpaper.length, luy = wallpaper[0].length;
    let rdx = 0, rdy = 0;
    
    for (let i = 0; i < wallpaper.length; i++) {
        if (wallpaper[i].includes('#')) {
            lux = Math.min(lux, i);
            luy = Math.min(luy, wallpaper[i].indexOf('#'));
            rdx = Math.max(rdx, i);
            rdy = Math.max(rdy, wallpaper[i].lastIndexOf('#'));
        }
    }
    
    return [lux, luy, rdx+1, rdy+1];
}
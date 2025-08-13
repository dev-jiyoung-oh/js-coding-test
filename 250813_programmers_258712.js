// https://school.programmers.co.kr/learn/courses/30/lessons/258712
// 2024 KAKAO WINTER INTERNSHIP / 가장 많이 받은 선물

function solution(friends, gifts) {
    let record = new Array(friends.length); // 주고 받은 기록. 2차원 배열
    let index = {}; // { name: record인덱스 }
    let jisoo = new Array(friends.length).fill(0);  // 선물 지수. 1차원 배열
    let next_arr = new Array(friends.length).fill(0); // 다음 달에 받을 횟수. 1차원 배열
    
    // 2차원 배열 초기화
    for (let i = 0; i < friends.length; i++) {
        record[i] = new Array(friends.length).fill(0);
        index[friends[i]] = i;
    }
    
    // 주고받은 선물 초기화
    for (const gift_str of gifts) {
        let [giver, taker] = gift_str.split(' ');
        const i = index[giver], j = index[taker];
        
        record[i][j]++;
        jisoo[i]++;
        jisoo[j]--;
    }
    
    // 다음 달에 받을 선물 책정
    for (let i = 0; i < record.length; i++) {
        for (let j = i + 1; j < record.length; j++) {
            const a = record[i][j];
            const b = record[j][i];
            
            if (a === b) {
                if (jisoo[i] > jisoo[j]) next_arr[i]++;
                if (jisoo[j] > jisoo[i]) next_arr[j]++;
            } else if (a > b){
                next_arr[i]++;
            } else if (b > a) {
                next_arr[j]++;
            }
        }
    }
    
    return Math.max(...next_arr);
}
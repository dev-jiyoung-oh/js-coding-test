// https://school.programmers.co.kr/learn/courses/30/lessons/159994
// 카드 뭉치

const SUCCESS = "Yes";
const FAIL = "No";

function solution(cards1, cards2, goal) {
    let index1 = 0, index2 = 0;
    
    for (const word of goal) {
        if (cards1[index1] === word) {
            index1++;
        } else if (cards2[index2] === word) {
            index2++;
        } else {
            return FAIL;
        }
    }
    
    return SUCCESS;
}
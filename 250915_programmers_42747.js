// https://school.programmers.co.kr/learn/courses/30/lessons/42747
// H-Index

// 다른 사람 풀이 https://school.programmers.co.kr/learn/courses/30/lessons/42747/solution_groups?language=javascript
function solution(citations) {
     let i = 0;

     citations.sort((a, b) => b - a);
    
     while(i + 1 <= citations[i]) {
         i++;
     }
    
     return i;
}
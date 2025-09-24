// https://school.programmers.co.kr/learn/courses/30/lessons/64065
// 2019 카카오 개발자 겨울 인턴십
// 튜플

// 내 풀이 - 빈도 기반 방식
function solution(s) {
    const counts = new Map();
    
    for (const num of s.replace(/[{}]/g, '').split(",").map(Number)) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }
    
    const n = counts.size;
    const answer = new Array(n);
    
    for (const [num, cnt] of counts) {
        answer[n - cnt] = num;
    }
    
    return answer;
}

// ChatGPT - 내 풀이 단순화
function solution(s) {
  const arr = s.replace(/[{}]/g, '').split(",").map(Number);
  const counts = arr.reduce((m, v) => m.set(v, (m.get(v) || 0) + 1), new Map());
  return [...counts].sort((a, b) => a[1] - b[1]).map(([num]) => num);
}


// ChatGPT - 집합 길이 기반 정렬 방식
function solution(s) {
  const sets = s
    .slice(2, -2)               // 양 끝 {{ }}
    .split("},{")               // 각 집합 분리
    .map(str => str.split(",").map(Number));
  
  sets.sort((a, b) => a.length - b.length);
  
  const result = [];
  const seen = new Set();
  for (const arr of sets) {
    for (const num of arr) {
      if (!seen.has(num)) {
        seen.add(num);
        result.push(num);
      }
    }
  }
  return result;
}

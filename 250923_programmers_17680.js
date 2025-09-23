// https://school.programmers.co.kr/learn/courses/30/lessons/17680
// [1차] 캐시

// ChatGPT
function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  const cache = new Map();
  let time = 0;

  for (const raw of cities) {
    const city = raw.toLowerCase();

    if (cache.has(city)) {            // hit
      time += 1;
      cache.delete(city);             // 최신화
      cache.set(city, true);
    } else {                          // miss
      time += 5;
      if (cache.size === cacheSize) { // LRU 제거
        const lru = cache.keys().next().value;
        cache.delete(lru);
      }
      cache.set(city, true);
    }
  }
  return time;
}
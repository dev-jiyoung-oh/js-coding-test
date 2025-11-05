// https://school.programmers.co.kr/learn/courses/30/lessons/1844
// 게임 맵 최단거리

// bfs 탐색, index 포인터(head) 사용
function solution(maps) {
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  const yLen = maps.length;
  const xLen = maps[0].length;
  const visited = Array.from({ length: yLen }, () => Array(xLen).fill(false));

  // 시작 위치(0,0)와 초기 거리(1) 설정
  const q = [ [0, 0, 1] ]; // [y, x, distance]
  visited[0][0] = true;
  let head = 0; // 포인터

  while (head < q.length) {
    const [y, x, dist] = q[head++];

    if (y === yLen - 1 && x === xLen - 1) return dist;

    for (let d = 0; d < 4; d++) {
      const ny = y + dy[d];
      const nx = x + dx[d];

      if (
        ny >= 0 && ny < yLen &&
        nx >= 0 && nx < xLen &&
        maps[ny][nx] === 1 &&
        !visited[ny][nx]
      ) {
        visited[ny][nx] = true;
        q.push([ny, nx, dist + 1]);
      }
    }
  }

  return -1;
}

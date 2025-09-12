// https://school.programmers.co.kr/learn/courses/30/lessons/131701
// 연속 부분 수열 합의 개수

// ChatGPT - 슬라이딩 윈도우 방식
function solution(elements) {
    const n = elements.length;
    const sums = new Set();

    for (let len = 1; len <= n; len++) {
        // console.log(`len = ${len} ----------------------`)
        // let str = '';
        /* 1) 시작 구간(0..len-1) 합을 한 번 계산 */
        let sum = 0;
        for (let k = 0; k < len; k++) {
            // str += elements[k] + (k + 1 !== len ? ' + ' : ' = ');
            sum += elements[k];
        }
        sums.add(sum);
        // console.log(`sum = ${str + sum}`)

        /* 2) 시작점을 1,2,...,n-1로 하나씩 옮기며 '빼고+더해'로 갱신 */
        for (let i = 1; i < n; i++) {
            /*
             빠지는 원소: 이전 시작(i-1)
             새로 들어오는 원소: (i+len-1) % n  (원형이므로 % n)
            */
            // console.log(`out: elements[${i - 1}] = ${elements[i - 1]}`)
            // console.log(`in: elements[${(i + len - 1) % n}] = ${elements[(i + len - 1) % n]}`)
            sum += elements[(i + len - 1) % n] - elements[i - 1];
            sums.add(sum);
            // console.log(`sum = ${sum}`)
        }
    }
    return sums.size;
}

/**
    입력값 〉 [7, 9, 1, 1, 4]
    기댓값 〉 18
    실행 결과 〉 테스트를 통과하였습니다.
    출력 〉
    len = 1 ----------------------
    sum = 7 = 7
    out: elements[0] = 7
    in: elements[1] = 9
    sum = 9
    out: elements[1] = 9
    in: elements[2] = 1
    sum = 1
    out: elements[2] = 1
    in: elements[3] = 1
    sum = 1
    out: elements[3] = 1
    in: elements[4] = 4
    sum = 4
    len = 2 ----------------------
    sum = 7 + 9 = 16
    out: elements[0] = 7
    in: elements[2] = 1
    sum = 10
    out: elements[1] = 9
    in: elements[3] = 1
    sum = 2
    out: elements[2] = 1
    in: elements[4] = 4
    sum = 5
    out: elements[3] = 1
    in: elements[0] = 7
    sum = 11
    len = 3 ----------------------
    sum = 7 + 9 + 1 = 17
    out: elements[0] = 7
    in: elements[3] = 1
    sum = 11
    out: elements[1] = 9
    in: elements[4] = 4
    sum = 6
    out: elements[2] = 1
    in: elements[0] = 7
    sum = 12
    out: elements[3] = 1
    in: elements[1] = 9
    sum = 20
    len = 4 ----------------------
    sum = 7 + 9 + 1 + 1 = 18
    out: elements[0] = 7
    in: elements[4] = 4
    sum = 15
    out: elements[1] = 9
    in: elements[0] = 7
    sum = 13
    out: elements[2] = 1
    in: elements[1] = 9
    sum = 21
    out: elements[3] = 1
    in: elements[2] = 1
    sum = 21
    len = 5 ----------------------
    sum = 7 + 9 + 1 + 1 + 4 = 22
    out: elements[0] = 7
    in: elements[0] = 7
    sum = 22
    out: elements[1] = 9
    in: elements[1] = 9
    sum = 22
    out: elements[2] = 1
    in: elements[2] = 1
    sum = 22
    out: elements[3] = 1
    in: elements[3] = 1
    sum = 22
 */
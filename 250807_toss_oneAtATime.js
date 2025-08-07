/* 한 번에 하나씩

토스페이먼츠의 프론트엔드 개발자인 김토스는 웹 서비스와 백엔드 API를 연동하고 있습니다.
그런데 연동 대상 백엔드 API는 보안이 매우 중요한 API라서 특별한 규칙을 만들기로 했습니다.
그 규칙이란 모든 요청에 대해 직전 API가 반환하는 토큰을 요구하는 것입니다.

자세한 규칙은 다음과 같습니다.
 1. 첫 번쨰 API 요청은 무조건 성공. 응답으로 result와 token을 반환.
 2. 두 번째 요청은 첫 번째 요청에서 반환된 token을 요청에 실어 전송. 마찬가지로 result와 token을 반환.
 3. 세 번째, 네 번째 요청을 포함해 이후 모든 요청은 직전 요청에 대한 응답의 token을 전송.
 4. 첫 번째 요청을 제외하면, 직전 요청에 반환된 token을 전송하지 않은 경우 오류.

김토스는 이 문제를 효과적으로 해결하기 위해서 규칙을 알아서 처리하는 함수를 작성하려고 합니다.

[ 문제 ]
 동시에 여러 번 호출되어도 규칙에 따라 토큰과 함께 순차적으로 요청하는 solution 함수를 작성하세요.

[ 조건 ]
 - solution 함수의 인자로 API를 호출하는 callAPI 함수가 주어집니다.
 - solution 함수를 실행하는 것을 [요청]으로 정의합니다.
 - callAPI 함수를 실행하는 것을 [API 호출]으로 정의합니다.
 - callAPI 함수가 반환하는 Promise가 성공(fulfill)하는 것을 [응답]으로 정의합니다.
 - callAPI 함수는 응답값 result와 다음 요청에서 사용할 수 있는 token을 객체로 반환합니다.

 구현할 solution 함수는 다음 조건을 만족하여야 합니다. 2개의 요청을 동시에 보내는 상황을 가정합시다.
  1. [요청 1]은 [API 호출 1]을 생성합니다.
  2. [요청 2]는 [요청 1]이 생성한 [API 호출 1]이 아직 끝나지 않아 토큰을 획득하지 못했으므로 새로운 요청을 바로 생성하지 않습니다.
  3. [API 호출 1]이 완료디어 [응답 1]이 [토큰 1]과 함께 반환되면, [요청 1]은 [응답 1]의 result를 반환합니다.
  4. 이제 [토큰 1]이 반환되었으므로 [API 호출 2]를 [토큰 1]을 통해 생성합니다.
  5. [API 호출 2]가 완료되어 [요청 2]는 [응답 2]의 result를 반환합니다.

[ 유의사항 ]
 - callAPI 함수를 직접 변경할 수 없습니다.
 - callAPI 함수가 실패하는 경우는 생각하지 않습니다.
 - 위에서 주어진 조건을 만족하는 한, 임의의 순서와 간격으로 solution 함수가 호출될 수 있습니다.

 */


// 클로저 개념 활용
const solution = (function () {
  let lastPromise = Promise.resolve();
  let lastToken = null;

  return function (callAPI) {
    const current = lastPromise.then(() =>
      callAPI(lastToken).then((res) => {
        lastToken = res.token;
        return res.result;
      })
    );
    
    lastPromise = current;
    return current;
  };
})();


// 테스트를 위해 임의로 만듦
let i = 0;
function callAPI(token) {
  console.log(`token = ${token}`);
  return new Promise((resolve) => {
    resolve({
      result: {test: i},
      token: i++
    });
  });
}
solution(callAPI).then((r) => console.log("응답1:", r));
solution(callAPI).then((r) => console.log("응답2:", r));
solution(callAPI).then((r) => console.log("응답3:", r));
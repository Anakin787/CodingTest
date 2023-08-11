function solution(n) {
    // 조건이 if - else로만 주어진다면 삼항연산자 사용 해보자! 코드가 간결해진다!
    return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1,2) : -1
 }
// https://school.programmers.co.kr/learn/courses/30/lessons/12934#
// 정답률 : 87%

/* description
문제 설명
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

입출력 예
ㅡㅡㅡㅡㅡㅡㅡ
n	| return
ㅡㅡㅡㅡㅡㅡㅡ
121	| 144
3	| -1
ㅡㅡㅡㅡㅡㅡㅡ

테스트 1 〉	통과 (0.03ms, 33.5MB)
테스트 2 〉	통과 (0.03ms, 33.7MB)
테스트 3 〉	통과 (0.03ms, 33.4MB)
테스트 4 〉	통과 (0.03ms, 33.4MB)
테스트 5 〉	통과 (0.04ms, 33.5MB)
테스트 6 〉	통과 (0.03ms, 33.4MB)
테스트 7 〉	통과 (0.03ms, 33.6MB)
테스트 8 〉	통과 (0.04ms, 33.5MB)
테스트 9 〉	통과 (0.03ms, 33.5MB)
테스트 10 〉통과 (0.03ms, 33.4MB)
테스트 11 〉통과 (0.05ms, 33.5MB)
테스트 12 〉통과 (0.04ms, 33.6MB)
테스트 13 〉통과 (0.05ms, 33.4MB)
테스트 14 〉통과 (0.04ms, 33.5MB)
테스트 15 〉통과 (0.06ms, 33.4MB)
테스트 16 〉통과 (0.03ms, 33.6MB)
테스트 17 〉통과 (0.03ms, 33.6MB)
테스트 18 〉통과 (0.04ms, 33.6MB)
*/
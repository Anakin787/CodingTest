// 약수란 어떤 수를 나누었을 때 나누어떨어지게 하는 자연수

function solution(n) {
    var answer = n;
    for(i = 0; i < n; i++){
        if(n % i === 0){
            answer += i
        } 
    }
    return answer;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/12928#
// 정답률 : 87%

/* description
문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.11ms, 33.7MB)
테스트 3 〉	통과 (0.14ms, 33.5MB)
테스트 4 〉	통과 (0.18ms, 33.4MB)
테스트 5 〉	통과 (0.26ms, 33.5MB)
테스트 6 〉	통과 (0.13ms, 33.4MB)
테스트 7 〉	통과 (0.20ms, 33.5MB)
테스트 8 〉	통과 (0.13ms, 33.5MB)
테스트 9 〉	통과 (0.28ms, 33.5MB)
테스트 10 〉통과 (0.24ms, 33.5MB)
테스트 11 〉통과 (0.16ms, 33.5MB)
테스트 12 〉통과 (0.18ms, 33.5MB)
테스트 13 〉통과 (0.12ms, 33.6MB)
테스트 14 〉통과 (0.19ms, 33.5MB)
테스트 15 〉통과 (0.18ms, 33.5MB)
테스트 16 〉통과 (0.04ms, 33.5MB)
테스트 17 〉통과 (0.23ms, 33.5MB)
*/
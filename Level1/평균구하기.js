function solution(arr) {
    var answer = 0;
    for(i = 0; i < arr.length; i++){
        answer += arr[i]
    }
    answer = answer / arr.length
    return answer;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/12944
// 정답률 : 87%

/* description
문제 설명
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

테스트 1 〉	통과 (0.05ms, 33.5MB)
테스트 2 〉	통과 (0.04ms, 33.6MB)
테스트 3 〉	통과 (0.06ms, 33.4MB)
테스트 4 〉	통과 (0.05ms, 33.6MB)
테스트 5 〉	통과 (0.05ms, 33.5MB)
테스트 6 〉	통과 (0.05ms, 33.5MB)
테스트 7 〉	통과 (0.05ms, 33.5MB)
테스트 8 〉	통과 (0.06ms, 33.5MB)
테스트 9 〉	통과 (0.05ms, 33.6MB)
테스트 10 〉통과 (0.06ms, 33.5MB)
테스트 11 〉통과 (0.06ms, 33.5MB)
테스트 12 〉통과 (0.05ms, 33.5MB)
테스트 13 〉통과 (0.06ms, 33.6MB)
테스트 14 〉통과 (0.10ms, 33.4MB)
테스트 15 〉통과 (0.05ms, 33.6MB)
테스트 16 〉통과 (0.09ms, 33.6MB)
*/
// Bubble Sort사용
function solution(n) {
    let tmp = ''
    let str = n.toString()
    let arr = str.split("")
    
    for(i = 0; i < arr.length - 1; i++){
        for(j = arr.length - 1; j > 0; j--){
            if(arr[j] > arr[j-1]){
                tmp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = tmp
            }
        }
    }
    return Number(arr.join(''));
}
// https://school.programmers.co.kr/learn/courses/30/lessons/12933
// 정답률 : 87%

/* description
문제 설명
함수 solution은 정수 n을 매개변수로 입력받습니다.
n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

테스트 1 〉	통과 (0.24ms, 33.5MB)
테스트 2 〉	통과 (0.17ms, 33.5MB)
테스트 3 〉	통과 (0.27ms, 33.4MB)
테스트 4 〉	통과 (0.27ms, 33.4MB)
테스트 5 〉	통과 (0.07ms, 33.5MB)
테스트 6 〉	통과 (0.29ms, 33.4MB)
테스트 7 〉	통과 (0.08ms, 33.4MB)
테스트 8 〉	통과 (0.23ms, 33.6MB)
테스트 9 〉	통과 (0.17ms, 33.5MB)
테스트 10 〉통과 (0.17ms, 33.4MB)
테스트 11 〉통과 (0.18ms, 33.4MB)
테스트 12 〉통과 (0.17ms, 33.5MB)
테스트 13 〉통과 (0.25ms, 33.6MB)
테스트 14 〉통과 (0.16ms, 33.4MB)
테스트 15 〉통과 (0.16ms, 33.5MB)
테스트 16 〉통과 (0.24ms, 32.5MB)
*/
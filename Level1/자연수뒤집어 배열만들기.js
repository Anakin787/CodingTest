function solution(n) {
const str = n.toString()
    const arr = str.split("")
    for(i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i])
    }
    
    arr.reverse()
   
    return arr;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/12932
// 정답률 : 87%

/* description
문제 설명
* 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

입출력 예
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
n	   | return
12345  | [5,4,3,2,1]
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

테스트 1 〉	통과 (0.08ms, 33.4MB)
테스트 2 〉	통과 (0.05ms, 33.4MB)
테스트 3 〉	통과 (0.06ms, 33.5MB)
테스트 4 〉	통과 (0.08ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.5MB)
테스트 6 〉	통과 (0.05ms, 33.6MB)
테스트 7 〉	통과 (0.05ms, 33.4MB)
테스트 8 〉	통과 (0.05ms, 33.5MB)
테스트 9 〉	통과 (0.05ms, 33.5MB)
테스트 10 〉통과 (0.05ms, 33.6MB)
테스트 11 〉통과 (0.06ms, 33.5MB)
테스트 12 〉통과 (0.05ms, 33.4MB)
테스트 13 〉통과 (0.05ms, 33.5MB)
*/
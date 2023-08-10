function solution(n)
{
    const tmp = n.toString()
    const splitArr = tmp.split("")
    let answer = 0
    for(let i = 0;i < splitArr.length; i++){
        answer += Number(splitArr[i])
    }
        
    return answer;
}

/* description
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

제한사항
N의 범위 : 100,000,000 이하의 자연수 */

/* speed test
테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.06ms, 33.5MB)
테스트 3 〉	통과 (0.04ms, 33.5MB)
테스트 4 〉	통과 (0.04ms, 33.5MB)
테스트 5 〉	통과 (0.04ms, 33.6MB)
테스트 6 〉	통과 (0.06ms, 33.5MB)
테스트 7 〉	통과 (0.04ms, 33.4MB)
테스트 8 〉	통과 (0.05ms, 33.5MB)
테스트 9 〉	통과 (0.05ms, 33.4MB)
테스트 10 〉통과 (0.04ms, 33.5MB)
테스트 11 〉통과 (0.07ms, 33.4MB)
테스트 12 〉통과 (0.06ms, 33.5MB)
테스트 13 〉통과 (0.07ms, 33.6MB)
테스트 14 〉통과 (0.04ms, 33.5MB)
테스트 15 〉통과 (0.04ms, 33.5MB)
테스트 16 〉통과 (0.06ms, 33.5MB)
테스트 17 〉통과 (0.04ms, 33.5MB)
테스트 18 〉통과 (0.06ms, 33.5MB)
테스트 19 〉통과 (0.04ms, 33.5MB)
테스트 20 〉통과 (0.04ms, 33.5MB)
테스트 21 〉통과 (0.04ms, 33.4MB)
*/
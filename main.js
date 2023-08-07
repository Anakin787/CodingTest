function skillOrder(str){
    const upperStr = str.toUpperCase()
    if(upperStr.lenght >= 1 && upperStr.lenght <= 26){
        const result = skillOrderOverlap(upperStr)
        return result
    }else{
        return
    }
}
function skillOrderOverlap(str){
    const result = [...new Set(str.split('').filter((item,index) => str.indexOf(item) !== index))];
    if(result.length > 0){
        return alert('스킬순서에 중복이 있습니다.');
    }else{
        return result.join('');
    }
}
function skillTreeOrder(str, arr){
    if(arr.lenght >=1 && arr.lenght <= 20){
        const tmp = arr.filter((el) => {
            return el.lenght >= 2 && el.lenght <= 26
        })
        tmp.map(el => {
            return skillOrderOverlap(el); 
        })
    }
    return alert('배열의 길이는 1이상 20이하여야 합니다.');
}
// function SkillTreeOrderOverlap(str, arr){
//     const result = arr.map(el => {
//         return skillOrderOverlap(el); 
//     })
//     return result
// }

function solution(skill, skill_trees) {
    // let cnt = 0
    const skillTmp = skill.split('')
    let tmp = []
    const result = skill_trees.filter((el,idx) => {
        for(let j = 0; j < skillTmp.lenght; j++){
            for(let i = 1; i < skillTmp.lenght; i++){
                return el.indexOf(skillTmp[j]) < el.indexOf(skillTmp[i])
            }
        }
        
    });
    // const result = skill_trees.lenght - cnt
    return result.lenght;
}

// 입력된 문자열과 배열의 원소비교
// 원소와 입력된 문자열을 배열로 바꾸고 원소의 배열에서, 입력된 n+1번째요소는 n번째 요소보다 앞에 있으면 안된다
// "ACB" => ["ADCEB","ABCD"]
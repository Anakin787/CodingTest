function solution(skill, skill_trees) {
    let cnt = 0
    let tmp = []
    const arr = skill.split("")
    for(let i = 0; i < skill_trees.length; i++){
        for(let j = 0; j < arr.length; j++){
            tmp.push(skill_trees[i].indexOf(arr[j]))
        }
        for(k = 0; k < tmp.length - 1; k++){
          if((tmp[k] > tmp[k+1] && tmp[k+1] !== -1) || (tmp[k] === -1 && tmp[k+1] !== -1)){
            cnt += 1
            tmp = []
            break
          }
        }
        tmp = []
    }
    const result = skill_trees.length - cnt
    return result
}
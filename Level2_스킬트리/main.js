function solution(skill, skill_trees) {
    let cnt = 0
    let tmp = []
    const arr = skill.split("")
    for(let i = 0; i < skill_trees.length; i++){
      // skill_tree에 대입한 skill의 index값을 배열에 저장
      for(let j = 0; j < arr.length; j++){
          tmp.push(skill_trees[i].indexOf(arr[j]))
      }
      // 앞원소가 뒷원소보다 클 때(단,뒷원소는 -1이 아님) 또는 앞원소가 -1인데 뒷원소가 -1이 아닐 때 카운트
      for(k = 0; k < tmp.length - 1; k++){
        if((tmp[k] > tmp[k+1] && tmp[k+1] !== -1) || (tmp[k] === -1 && tmp[k+1] !== -1)){
          cnt += 1
          tmp = []
          break
        }
      }
      tmp = []
    }
    // skill_tress에서 조건에 부합하지 않는 배열의 갯수를 뺌
    const result = skill_trees.length - cnt
    return result
}
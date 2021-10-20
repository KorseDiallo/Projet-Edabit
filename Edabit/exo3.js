function filterArray(arr){
    return arr.filter((element)=> typeof element !=="string")
}
const result=filterArray([1, 2, "a", "b"])
console.log(result)
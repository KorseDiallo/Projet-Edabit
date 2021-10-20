function minMax(arr){
    let min=Math.min(...arr)
    let max=Math.max(...arr)

    let new_array=[]

    new_array.push(min)
    new_array.push(max)

    return new_array;
}

const result=minMax([1, 2, 3, 4, 5])
console.log(result)
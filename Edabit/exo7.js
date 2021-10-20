function objectToArray(obj) {
	let ans=[]

    for(let key in obj){
        let val= obj[key]

        ans.push([key].concat(val))
    }

    return ans;
}

const result=objectToArray({
    D: 1,
    B: 2,
    C: 3
  })

  console.log(result)

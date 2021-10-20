const object={
  Joel : 32,
  Fred : 44,
  Reginald : 65,
  Susan : 33,
  Julian : 13
}

function afterNYears(object,n){

    for(const property in object){
     object[property] += n
   }
  return object
}

const result=afterNYears(object,2)
console.log(result)
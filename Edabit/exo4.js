function getAbsSum(arr) {
   let res=0;
   for(let i=0;i<arr.length;i++){
      if(arr[i]<0){
         res+=(arr[i]*-1)
         continue
      }
      res += arr[i];
   }
   return res;
}

const resultat=getAbsSum([-3, -4, -10, -2, -3])
console.log(resultat)
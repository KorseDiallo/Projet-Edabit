const object1={
    cyan:23,
    magenta:12,
    yellow:10
}

function Encre(inks){
    return Math.min(...Object.values(inks))
}

const result= Encre(object1)
console.log(result)





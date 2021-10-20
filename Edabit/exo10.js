const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name) {
	return GUEST_LIST[name] ? 
			`Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.` :
					"Hi! I'm a guest."
}

let result=greeting("Karla")
console.log(result)





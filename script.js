let cores = ["roxo", "verd", "coiso"]

console.log(cores)

cores.push("violeti")

console.log(cores)

cores.pop()

console.log(cores)

cores.push("nova cor")

cores.shift()

console.log(cores)

cores.unshift("novo roxim")

console.log(cores)

let pontim = cores.join(" - ")

console.log(pontim)

let rty = cores.indexOf("verd")

console.log(rty)

 let encontre = cores.lastIndexOf("verd")

console.log(encontre)

 let inluso = cores.includes("azul")

console.log(inluso)

let filmes = ["star wars", "john wick", "gente grande"]

console.log(filmes[2])


var num = [1,2,3,4,5,6]

var soma = num.reduce(function(soma, i){
  return soma + i;
});

console.log(soma);


//  1) Crie um array que armazene os nomes de 15 alunos.
let nomes= ["Ana", "Pedro", "Sofia", "Lucas", "Isabella", "Miguel", "Camila", "Gabriel", "Laura", "Guilherme", "Beatriz", "Felipe", "Maria", "João", "Juliana"]


//  2) Adicione 3 alunos ao final do array.
nomes.push("Leonardo", "Valentina", "Arthur")
// console.log(nomes)


//  3) Adicione 1 aluno na posição de índice 2, 1 aluno na posição de índice 6 e 1 aluno na posição de índice 7.
nomes.splice(2,0,"Marina")  // array.splice(posicão inicial a ser mexida, número de elementos a serem deletados, item1 a adicionar, item2 a adicionar, ...)
nomes.splice(6,0,"Rafael")
nomes.splice(7,0,"Manuela")
// console.log(nomes)


//  4) Ordene o array de modo decrescente.
nomes.sort().reverse()   // primeiro executa o sort() e depois executa o reverse
// console.log(nomes)


//  5) Remova o último aluno.
nomes.pop()  //remove o ultimo elemento da array
// console.log(nomes)


//  6) Remova o primeiro aluno.
nomes.shift()      // shift retira o primeiro  , o unshift adiciona no primeiro
//  console.log(nomes)


//  7) Remova o aluno da posição 5.
nomes.splice(5,1)
// console.log(nomes)

//  8) Ordene o array em modo crescente.
nomes.sort()
// console.log(nomes)

//  9) Utilize o loop FOR..OF para percorrer o array e exibir os nomes e a posição dos alunos.
for (const elemento of nomes) {
    // console.log(elemento +" "+nomes.indexOf(elemento))
    // console.log(nomes.indexOf(elemento)+ " "+ elemento)
}

//  10) Inicialize um novo array vazio.
let notas = []
// let teste = new Array
// console.log(notas, teste)

//  11) Utilize o loop FOR tradicional para adicionar notas de 0 a 10 neste array. A quantidade de notas a serem será igual ao tamanho do array obtido na questão 9, onde cada nota corresponderá a um aluno.
for ( let i=0; i< nomes.length; i++) {
    notas.push((Math.random()*10).toFixed(1))

}
// console.log(notas)

//  12) Utilize o método MAP para adicionar 1.0 ponto à cada nota.
// notas = notas.map( (x)=> x+1)
notas = notas.map( (x)=> x>9 ?10:parseFloat(x)+1)
// console.log(notas)

//  22) Utilize o método FILTER para exibir apenas as notas maiores do que 7.0.    isso mesmo kkkk
notaboa = notas.filter(x=> x>7)
// console.log(notaboa)

//  14) Utilize o loop FOR tradicional para percorrer os dois arrays (notas e nomes) e mostrar o nome seguido da nota de cada aluno.
// for (let i=0; i<nomes.length;i++) {
//     console.log("Nome: "+ nomes[i]+", Notas: "+ notas[i])
// }

//  15) Utilize o método FOREACH para percorrer o array de notas e mostrar se cada aluno está aprovado (nota >= 7.0)  ou reprovado.
notas.forEach( (x,i) => {let aprov
    if (x>7){
    
    aprov =("Nome: "+ nomes[i]+", Notas: "+ x+ " aprovado")
}else {
    aprov =("Nome: "+ nomes[i]+", Notas: "+ x+ " reprovado")
}
// console.log(aprov)
})

//  16) Utilize o método INDEXOF para retornar o índice do elemento "Lucas" no array de nomes.

a= nomes.indexOf("Lucas")
// console.log("o lucas está no index "+a)

// 17) Utilize o método FINDINDEX para localizar o índice da primeira nota acima de 9.0.
b= notas.findIndex(x=> x>9)
// console.log(b)

//  18) Utilize o método INCLUDES para verificar se o aluno "Lucas" está na lista
c= nomes.includes("Lucas")
// console.log(c)



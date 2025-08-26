

const users = [
    {nome: "jonas", idade: "30"},
    {nome: "Alysson", idade: "25"},
    {nome: "Fernadno", idade: "23"}

]

let usersMaiores25 = []
let somaIdade = 0

for(const user of users){

    const IdadeUsuario = Number(user.idade)

    if(IdadeUsuario >= 25){

        usersMaiores25.push(user)

        somaIdade += IdadeUsuario
           
    }

   
}

const mediaIdade = somaIdade / usersMaiores25.length


  console.log(`Maiores de 25 anos:`)
  console.log(usersMaiores25)
  console.log(`Média de Idade dos usuários ${mediaIdade}`)


// const frutas = ['maça', 'melao','melancia']


// for (const fruta of frutas) {
//     console.log(fruta)
// }

// const carros = { marca: 'Ford', modelo: 'Mustang', ano: 1969 }

// for (const propriedade in carros) {
//     console.log(`${propriedade}: ${carros[propriedade]}`)
// }

// let dinheiro = 20

// while(dinheiro > 0) {
//     console.log('comprando pão...')
//     dinheiro -= 5
//     console.log(`saldo Final R$${dinheiro},00`)
// }


// let num = 5

// for (let i = 0; i < num ; i++){
//     console.log(i)
// }

// for (let linha = 1; linha <= 3; linha++){

//     console.log(`---Tabela do ${linha} ---`)
    
//     for(let coluna = 1; coluna <=3; coluna++){

//         let resultado = linha * coluna
//         console.log(`${linha} x ${coluna} = ${resultado}`)
//     }
// }


// const Bis = [
//   { nome: 'jonas', genero: 'hetero' },
//   { nome: 'Alysson', genero: 'não binario' },
//   { nome: 'Fernando', genero: 'panSexual' }
  

// ];

// for (const Bi of Bis) {
//   if (Bi.genero !== 'hetero') {
//     console.log(`${Bi.nome} Não é hetero.`);
//     console.log(`Nome: ${Bi.nome} -- ${Bi.genero}`);
//   }
  
// }

// const usuarios = [
//   { nome: 'Ana', saldo: 2500 },
//   { nome: 'João', saldo: 1200 },
//   { nome: 'Maria', saldo: 3000 },
//   { nome: 'Pedro', saldo: 800 },
//   { nome: 'Carlos', saldo: 1850 },
//   { nome: 'Fernanda', saldo: 500 },
// ];


// const usuariosComSaldoAlto = []

// for (let i = 0; i < usuarios.length; i++){
//     const usuario = usuarios[i]

//     if (usuario.saldo > 1500){
//         usuariosComSaldoAlto.push(usuario)

//     }
// }

// console.log('Usuários com saldo Maior que R$ 1500')
// console.log(usuariosComSaldoAlto)

// let somaTotal = 0

// for (let i = 0 ;i < usuariosComSaldoAlto.length ; i++){
//     const usuario = usuariosComSaldoAlto[i]

//     somaTotal += usuario.saldo
// }

// console.log(`Soma total do saldo dos usuários Selecionados: R$ ${somaTotal}`)

// const diaSemana = 3

// switch(diaSemana){
//   case 1:
//     nomeDoDia = 'Domingo';
//     break;
//   case 2:
//     nomeDoDia = 'Segunda-feira';
//     break;
//   case 3:
//     nomeDoDia = 'Terça-feira';
//     break;
//   case 4:
//     nomeDoDia = 'Quarta-feira';
//     break;
//   case 5:
//     nomeDoDia = 'Quinta-feira';
//     break;
//   case 6:
//     nomeDoDia = 'Sexta-feira';
//     break;
//   case 7:
//     nomeDoDia = 'Sábado';
//     break;
//   default:
//     nomeDoDia = 'Dia inválido';
// }

// console.log(`O dia ${diaSemana} corresponde a: ${nomeDoDia}`)

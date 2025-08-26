

const tabuleiro = [
    ['X', 'O' , 'X'],
    ['O', 'X' , 'O'],
    ['X', 'O' , 'X'],
]
for (let linha = 0; linha < tabuleiro.length; linha++) {


    for (let coluna = 0; coluna < tabuleiro[linha].length; coluna++){
        const celula = tabuleiro[linha][coluna];
        console.log(`Posição [${linha}][${coluna}]: ${celula}`)
    }
}
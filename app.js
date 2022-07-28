console.log('Calculadora Simples')

//Import da biblioteca de entrada de dados
var readLine = require('readline')

//Instancia do objeto de entrada de dados
var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
}) 

entradaDados.question('Digite um número: \n', function(valor1){
    //Convertendo a variável "valor1" de String para Float, e então colocando seu valor na variável "number1"
    let number1 = parseFloat(valor1)

    /******
     * Comando "typeof()"
     *  Ao usado em um console.log, mostra o tipo de uma variável qualquer.
     *  Exemplo: "console.log(typeof(number1)), a saída seria 'number' "
     ******/
    
    entradaDados.question('Digite outro número: \n', function(valor2){
        let number2 = parseFloat(valor2)
        
        entradaDados.question('Escolha a operação a ser calculada: somar[+], subtrair[-], multiplicar[*], dividir[/]\n', function(opcao){
            //Declaração da variavel que recebe o tipo de operação a ser realizada.
                //Usando o 'toUpperCase()' para converter o texto digitado para maíusculo

            let operacao = opcao.toUpperCase();
            /******
             * Uso do '='no javascript
             
             *  = -> Atribuição de Valores
             *  == -> Comparação de Conteúdo
             *  === -> Comparação de Conteúdo e Tipo de Dados
            
             ******/

            let resultado

            //Estrutura de decisão relacionada a escolha da operação matematica desejada
            if(operacao == 'SOMAR' || operacao == '+')
                resultado = number1 + number2
            else if(operacao == 'SUBTRAIR'|| operacao == '-')
                resultado = number1 - number2
            else if(operacao == 'MULTIPLICAR'|| operacao == '*')
                resultado = number1 * number2
            else if(operacao == 'DIVIDIR'|| operacao == '/')
                resultado = number1 / number
            else
                resultado = ''
   
            //Estrutura de decisão relacionado a saída do código
            if(resultado != '')
                console.log('O resultado da conta é: ' +resultado)
            else
                console.log('ERRO - Não foi escolhida uma operação válida')
        })
    })
})
/**************************************************************************************
 * Objetivo: Arquivo que contem todas as funções para calculos matemáticos
 * Autor: Rafael Oliveira
 * Data de Criação: 01/08/2022
 * Versão: 1.0
 *************************************************************************************/

//Metodo tradicional para criação de funções
const calcular = function (valor1, valor2, operacaoMat){
    

    //Criação de variáveis local para recebimento dos atributos encaminhados na função
    let number1 = valor1
    let number2 = valor2
    let operacao = operacaoMat.toUpperCase()
    let resultado
    let error = false

    if(isNaN(number1) || isNaN(number2)){
        console.log('Erro - Apenas números são aceitos')
        error = true
    }
    else{
        //Estrutura de decisão relacionada a escolha da operação matematica desejada
        if(operacao == 'SOMAR' || operacao == '+')
            resultado = somar(number1, number2)
        else if(operacao == 'SUBTRAIR'|| operacao == '-')
            resultado = subtrair(number1, number2)
        else if(operacao == 'MULTIPLICAR'|| operacao == '*')
            resultado = multiplicar(number1, number2)
        else if(operacao == 'DIVIDIR'|| operacao == '/'){
            //Tratamento de divisão por 0
            if(number2 == 0){
                console.log('Erro - Não é possível divisão por zero')
                error = true
            }
            else
            resultado = dividir(number1, number2)
        }
        else{
            console.log('Erro - Não foi escolhida uma operação válida')
            error = true
        }
    }
    
    if(error)
        return false
    else
        return resultado.toFixed(2)
    }
    
const somar = (valor1, valor2) => parseFloat(valor1) + parseFloat(valor2)
const subtrair = (valor1, valor2) => parseFloat(valor1) - parseFloat(valor2)
const multiplicar = (valor1, valor2) => parseFloat(valor1) * parseFloat(valor2)
const dividir = (valor1, valor2) => parseFloat(valor1) / parseFloat(valor2)

/****
 * Metodo alternativo (e bastante utilizado) para criação de funções:
 * 
 * const calcular = function(){
 * 
 * }
 * 
 * Utiliza o padrão de Call Back
 ****/

// Compilando todas as funções que serão usadas em outros projetos no "module.exports". Todas as funções não incluconst serão disponíveis apenas localmente.
module.exports = {
    calcular
}
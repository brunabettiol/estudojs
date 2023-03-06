function adicionarResultado(valor) {
    var valor1= document.getElementById("valor1")
    var valor2= document.getElementById('valor2')
    var op= document.getElementById('operador')
    if(valor1.innerHTML == '' || op.innerHTML == ''){
        valor1.innerHTML += valor
    }
    else {
        valor2.innerHTML += valor

    }
    
}

function adicionarOperador(operador) {
    var op = document.getElementById('operador')
    if(op.innerHTML == ''){
        op.innerHTML = operador
    }
}

function resultado() {
    var valor1= document.getElementById('valor1')
    var valor2= document.getElementById('valor2')
    var op= document.getElementById('operador')
    var resultado= document.getElementById('resultado')
    console.log(op.innerHTML) 
    if(op.innerHTML == '*') {
        resultado.innerHTML= valor1.innerHTML * valor2.innerHTML
    }

    if(op.innerHTML == '+'){
        resultado.innerHTML= Number(valor1.innerHTML) + Number(valor2.innerHTML)
    }

    if(op.innerHTML == '-') {
        resultado.innerHTML= valor1.innerHTML - valor2.innerHTML
    }

    if(op.innerHTML == '/') {
        resultado.innerHTML= valor1.innerHTML / valor2.innerHTML
    }

}
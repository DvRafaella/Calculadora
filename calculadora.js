const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");
const button = document.querySelector("#igual");
let resposta = document.querySelector("#resposta");

button.addEventListener("click",calcular);
function calcular(){
    const valor1 = parseInt(campo1.value);
    const valor2 = parseInt(campo2.value);
    const operacao = seletor.value;

    if(operacao==="somar")
        resposta.innerHTML = valor1 + valor2;

    if(operacao==="subtrair")
        resposta.innerHTML = valor1 - valor2;

    if(operacao==="multiplicar")
        resposta.innerHTML = valor1 * valor2;

    if(operacao==="dividir") {
        if (campo1.value === '0' || campo2.value === '0') {
            resposta.innerHTML = 'Divisão por 0!';
        } else {
            resposta.innerHTML = valor1 / valor2;
        }
    }
}

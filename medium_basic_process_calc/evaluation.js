function sumar(input1s, input2s){
    resultS= +input1s + +input2s;
    return resultS;

}
function mostResultS() {
    let input1RM = document.getElementById('input1');
    let input2RM = document.getElementById('input2'); 
    let resultText=document.getElementById('resulth2');
    let resultSuma = sumar(input1RM.value,input2RM.value);
    resultText.textContent = resultSuma;

}

function resta(input1R, input2R){
    resultS= +input1R - +input2R;
    return resultS;
}

function mostResultR() {
    let input1RM = document.getElementById('input1');
    let input2RM = document.getElementById('input2'); 
    let resultText=document.getElementById('resulth2');
    let resultSuma = resta(input1RM.value,input2RM.value);
    resultText.textContent = resultSuma;

}

function multiplicacion(input1M, input2M){
    resultS= +input1M * +input2M;
    return resultS;
}

function mostResultM() {
    let input1RM = document.getElementById('input1');
    let input2RM = document.getElementById('input2'); 
    let resultText=document.getElementById('resulth2');
    let resultSuma = multiplicacion(input1RM.value,input2RM.value);
    resultText.textContent = resultSuma;

}

function division(input1D, input2D){
    resultS= +input1D / +input2D;
    return resultS;
}

function mostResultD() {
    let input1RM = document.getElementById('input1');
    let input2RM = document.getElementById('input2'); 
    let resultText=document.getElementById('resulth2');
    let resultSuma = division(input1RM.value,input2RM.value);
    resultText.textContent = resultSuma;

}
function potencia(Paramone, paramtwo){
    let resultP = Math.pow(Paramone, paramtwo);
    return resultP;

}
function mostrarPotencia(){
    let input1RM = document.getElementById('input1');
    let input2RM = document.getElementById('input2');
    let resultText = document.getElementById('resulth2');
    let potencialText = potencia(input1RM.value, input2RM.value);
    resultText.textContent = potencialText;

}
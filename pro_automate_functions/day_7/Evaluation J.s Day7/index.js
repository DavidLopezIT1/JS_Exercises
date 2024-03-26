 function SumaValores(paramArray){
    let result =0;
    for(let item1 of paramArray){
        result = item1 + result;
    }
        return result;

}

function ciclicContent(param1) {
    let ciclicCreate = document.getElementById('container');
    let controlador = 1;
        while(controlador <= param1) { 
            generateConten(controlador);
            controlador ++;
        } 
}

function generateConten(paramx){

    // Crear un elemento dentro del contenedor Div
    let i = document.getElementById('container');
    
    let labeler = document.createElement('label');
        labeler.innerText='Paràmetro' + ' ' + paramx + ' ';
        labeler.setAttribute('for', 'input' + paramx);
        labeler.setAttribute('id', 'label' + paramx);

    let inputter = document.createElement('input');
        inputter.setAttribute('type', 'number')
        inputter.setAttribute('id', 'input' + paramx)

    let space = document.createElement('br');

        i.appendChild(labeler); 
        i.appendChild(inputter);
        i.appendChild(space);
}

function ExtractCompt(param1){
    // let generalnputExtract = document.getElementById('container');
    let ElemenText = param1.value;
    let numberInput = Number(ElemenText);

    return numberInput;
}

function operations(){
    let elementsarray=[];
    let controlador=0;
    let inputsGeneral = document.getElementById('container');

    for (cont1 of inputsGeneral.children){
        let valoresInput = ExtractCompt(cont1.children[0]);
        
    }
    
}
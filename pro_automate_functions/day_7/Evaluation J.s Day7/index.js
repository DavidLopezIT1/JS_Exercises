
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

function SumaValores(paramArray){
    let result =0;

    for(let item1 of paramArray){
        result = +item1 + +result;
    }
        return result;

}



function getSchedule(paramX){

    let Metro = document.getElementById('input' + paramX);
    let padawan2 = Metro;

    return padawan2;
}

function inputqty() {
    let contador =0;
    let arrayLenght = [];
    let searchIndicator = document.getElementById('container');

            for (let item1 of searchIndicator.children){


                let valores = item1.children[1];
                if(contador <=9)
                arrayLenght[contador] = valores; 
                contador++
            }

        let array2 = arrayLenght.length-1 ;
         return array2;
}

function operations(){

        let controlador =0;
        let qnty = inputqty();
        let resultados;
        let container2 = document.getElementById('padawan');
        let searchIndicator = document.getElementById('container');
        

        while(controlador <= qnty){
            let parametrica = getSchedule(controlador);
            resultados = resultados + parametrica;
            controlador ++;
        }
        container2.textContent= resultados;
    
    }
    



    
    // while(arrayLenght<=searchIndicator) {
    //     arrayLenght[contador] = searchIndicator;
    //     contador++;
    // }
    //     let array2 = arrayLenght.length;
    //     padawan.textContent= array2;















function Onclo(){
    let Metro = document.getElementById('valueInputRG');
    let padawan = document.getElementById('padawan');

    padawan.textContent = Metro.value;

}
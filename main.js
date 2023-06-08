function valorPrimeiroBotao(){
    alert(document.querySelector
        ('input[type=button]').value);
}

const listaTeclas = document.querySelectorAll
('input[type=button]');
const display = document.querySelector('input[type=tel]');

function valorBotaoUmJanela(){
    alert(listaTeclas[0].value);
}



listaTeclas[0].onclick = function(){
    valorBotao(0);
};



let i =0;

/* while(i< listaTeclas.length){
    const tecla = listaTeclas[i];
    const indice = i;
    tecla.onclick =  function(){
        valorBotao(indice);
    }
    i++;
}
 */


for (let index = 0; index < listaTeclas.length; index++) {
    const element = listaTeclas[index];
    element.onclick = () => {
        valorBotao(index)
    }

    
}



function limparBotao(){

    display.value = '';
}


function valorBotao(valor){ 
    if (display.value.length < 8 && valor !== 11) {    
    display.value += listaTeclas[valor].value;
    }else{
        alert("Limite fora do especificado")
    }
}


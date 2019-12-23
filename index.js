var array = [];
i=0;

function embaralhar(array) {
    var indice_atual = array.length, valor_temporario, indice_aleatorio;
    while (0 !== indice_atual) {
        indice_aleatorio = Math.floor(Math.random() * indice_atual);
        indice_atual -= 1;
        valor_temporario = array[indice_atual];
        array[indice_atual] = array[indice_aleatorio];
        array[indice_aleatorio] = valor_temporario;
    }
    return array;
}

function sortear(){
    var PacNum = document.getElementById("PacNumber").value;
    var PesGrup = document.getElementById("GrupNumber").value;
    i=1;
    var temp = 1;
    for(g = 0; g < PacNum; g++){
        if(temp > PesGrup)
            temp = 1;
            array[g] = temp; 
        temp = temp + 1;
    }
    embaralhar(array);
    console.log(array);
    $("#display").val(i +"º" + "=" +array[0]);
}

function exibir1(){
    $("#display").val(i+1 + "º" + "=" +array[i++]);
}

function exibir2(){
    $("#display").val(i-1 + "º" + "=" +array[i--]);  
}

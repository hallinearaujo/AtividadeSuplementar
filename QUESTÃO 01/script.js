
function mostrarTabuada (){
    let numero = parseInt(document.getElementById("numero").value);
    let tabuada = document.getElementById("tabuada");   
    

    for(i=1;i<=10;i++){
        //multiplicação
        let resultadoMult = numero * i;
        let linha = document.createElement("tr");
        let colunaMult1 = document.createElement("td");
        let colunaMult2 = document.createElement("td");

        colunaMult1.textContent = numero + "x" + i + "=";
        colunaMult2.textContent = resultadoMult;

        linha.appendChild(colunaMult1);
        linha.appendChild(colunaMult2);
        tabuada.appendChild(linha);

        //soma
        let resultadoSoma = numero + i;        
        let colunaSoma1 = document.createElement("td");
        let colunaSoma2 = document.createElement("td");

        colunaSoma1.textContent = numero + "+" + i + "=";
        colunaSoma2.textContent = resultadoSoma;

        linha.appendChild(colunaSoma1);
        linha.appendChild(colunaSoma2);
        

        //subtração
        let resultadoSub = numero - i;        
        let colunaSub1 = document.createElement("td");
        let colunaSub2 = document.createElement("td");

        colunaSub1.textContent = numero + "-" + i + "=";
        colunaSub2.textContent = resultadoSub;

        linha.appendChild(colunaSub1);
        linha.appendChild(colunaSub2);

        //divisão
        let resultadoDiv = numero / i;        
        let colunaDiv1 = document.createElement("td");
        let colunaDiv2 = document.createElement("td");

        colunaDiv1.textContent = numero + "/" + i + "=";
        colunaDiv2.textContent = resultadoDiv;

        linha.appendChild(colunaDiv1);
        linha.appendChild(colunaDiv2);
    }  
      
    
    }    
    function limparInput(){
        document.getElementById("tabuada").innerHTML=" ";
    }

    //falta arrumar o print das tabelas
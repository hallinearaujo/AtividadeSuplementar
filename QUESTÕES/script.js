//QUESTÃO 01 - Escreva uma rotina em JavaScript que receba um número digitado pelo usuário e
//depois exiba a tabuada com as 04 operações básicas da matemática

function mostrarTabuada (){
    let numero = parseInt(document.getElementById("numero").value);
    let tabuada = document.getElementById("tabuada"); 
    
   // let linhaTitulo = document.createElement("h2");
   //linhaTitulo.textContent = "Tabuada";
   //tabuada.appendChild(linhaTitulo);
    

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

    //QUESTÃO 02 - Escreva uma rotina em JavaScript que receba duas notas do usuário e informe se ele
    //foi aprovado, precisa fazer avaliação ou se está reprovado. Utilize os parâmetros de avaliação da UNIPÊ

    function calculoMedia (){
        let nota1 = parseFloat(document.getElementById("nota1").value);
        let nota2 = parseFloat(document.getElementById("nota2").value);
        let resultado = document.getElementById("mostrarResultado");
        let menorNota = 0;    
        let final = true;
    
        
        let notaInteira1 = nota1 - parseInt(nota1);
        let notaInteira2 = nota2 - parseInt(nota2);
     
        if (notaInteira1 >= 0.75 ){
            nota1 =parseInt(nota1) + 1;      
        } 
        if (notaInteira2 >= 0.75 ){
          nota2=  parseInt(nota2) +1;
        }          
        let calculo = nota1 + nota2;    
        
        if(nota1 > nota2){
            menorNota = nota2;
        }else{
            menorNota = nota1;
        }
        if ((calculo - menorNota +5) < 6) {

            final = false;
        }
        if(calculo >=6){
            resultado.textContent = "Sua média é " + calculo + " Parabéns, você foi aprovado!";
        }else if (calculo <6 && calculo >=1 && final){
            resultado.textContent = "Sua média é " + calculo + " Você está na Final";
        }else{
            resultado.textContent = "Sua média é " + calculo + " Você foi reprovado";
        }  
    
    }
    
    //QUESTÃO 03 - Escreva uma rotina que receba dados digitados pelo usuário e os exiba em tela
    //a medida que são digitados

    function mostrarInfo(){
        document.getElementById("nome").textContent = document.getElementById("dados").value;
    }
    
    //QUESTÃO 04 - Escreva uma rotina que receba vários dados digitados pelo usuário, armazeno-os e,
    //após clicar em um botão de exibir, seja exibida a lista com dados digitados    
    
    let dados = [];
    function salvarDado(){        
        dados.push(document.getElementById("dados").value);
        document.getElementById("dados").value = "";
        console.log("salvou");
    }    
    
    function exibirDado(){
        let lista = document.getElementById("curiosidade");
        if(dados.length > 0){
            for(i=0; i<dados.length; i++){
                let elemento = document.createElement("ul");
                elemento.textContent = dados[i];
                lista.appendChild(elemento);
            }
        }        
    }
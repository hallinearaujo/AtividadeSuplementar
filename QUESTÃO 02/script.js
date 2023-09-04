function calculoMedia (){
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let resultado = document.getElementById("mostrarResultado");
  

    let notaInteira1 = nota1 - parseInt(nota1);
    let notaInteira2 = nota2 - parseInt(nota2);
 
    if (notaInteira1 >= 0.75 ){
        nota1 =parseInt(nota1) + 1;      
    } 
    if (notaInteira2 >= 0.75 ){
      nota2=  parseInt(nota2) +1;
    }  
    let calculo = nota1 + nota2;

    //console.log((nota1+nota2)/2);

    if(calculo >=6){
        resultado.textContent = "Sua nota é " + calculo + " Parabéns, você foi aprovado!";
    }else if (calculo <6 && calculo >=1){
        resultado.textContent = "Sua nota é " + calculo + " Você está na Final";
    }else{
        resultado.textContent = "Sua nota é " + calculo + " Você foi reprovado";
    }
    

}
     
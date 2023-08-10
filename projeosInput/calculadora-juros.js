import entradaDados from 'readline-sync';
console.log('Aplicação de Juros: ');
let Juros;
let divida = entradaDados.question ('Informe o valor devido: ');
let debito = entradaDados.question('Informe quantos dias se passaram desde o vencimento do boleto:');

if (debito != 0){
    if(debito > 15){
        Juros = 10;
     } else{
         Juros = 5;
     }  
    
     divida=Number(divida);
     debito=Number(debito);

     let totalJuros = (divida / 100)*Juros;
     let totalvalor=divida+totalJuros;

     console.log("\nValor original da divida: R$ " + divida);
     console.log("\nDias atrasados:" + debito);
     console.log("Taxas de Juros: " + Juros);
     console.log("Valor total com juros: R$" + totalvalor);
}else{
    console.log("Não há juros para um pagamento em dia.");
}


const input = require("readline-sync");

let listaPecas = parseInt(input.question("Entre com a quantidade de peças: "));
if (listaPecas < 10) {
    console.log("Cadastro permitido");

    let pesoDaPeca = parseInt(input.question("Entre com o peso da peça em gramas: "));

    if (pesoDaPeca >= 100){
        console.log("Pode continuar com o cadastro!");

        let nomePecas = input.question("Digite o nome da peça: ");

        if (nomePecas.length >3) {
            console.log("Cadastro sucessedido!")
            console.log("Fim")

        } else {console.log('N nome curto, peça NÃO cadastrada');
                console.log("Fim");
            }

    }else {console.log("Peso não suficiente, cadastro negado");
            console.log("Fim");
        }

} else {console.log("Espaço não sucifiente, cadastro negado")
        console.log("Fim");
    }
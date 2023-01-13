import input from 'readline-sync';

console.log("Seja Bem Vindo ao Sistema de Vendas Travatec!!\n");
console.log("Voce entrou no sistema de vendas, escolha uma opcao: \n");

let opcao;

while(opcao != 2){

    console.log(" 1 - Comprar \n")
    console.log(" 2 - Sair \n");

    opcao = input.question("Opcao escolhida: ");

        if(opcao == 2){
            console.log("Sistema Encerrado");
            break;
        }

        else if(opcao == 1){

            let voltagem;
            let quantidade;

            console.log(" Selecione um produto: \n");
            console.log(" 1 - Travas Eletricas \n");
            console.log(" 2 - Pecas de Reposicao \n")   
            console.log(" 3 - Suportes para Instalaçao \n");
            console.log(" 4 - Temporizadores \n");

            let produto = input.question(" Produto Escolhido: ");


                if(produto == 1){
                    
                    console.log("Selecione um modelo: \n")
                    console.log(" 1 - TE200 \n");
                    console.log(" 2 - TE300 \n");
                    console.log(" 3 - TE400 \n");
                    console.log(" 4 - TE500 \n");
                    console.log(" 5 - TE600 \n");
                    console.log(" 6 - Injetmax \n");
                    let modelo = input.question("Modelo Escolhido: ");

                        if(modelo == 1){

                            console.log("Voce escolheu a Trava TE200!! \n");
                            console.log("Selecione a Voltagem: \n");
                            console.log(" 1 - 12 Volts\n");
                            console.log(" 2 - 24 Volts\n");
                            voltagem = input.question("Voltagem Escolhida: ");

                                if(voltagem == 1){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas TE200 12 Volts \n");

                                }
                                else if(voltagem == 2){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas TE200 24 Volts \n");

                                }
                                else{
                                    console.log("Opcao Invalida! \n");
                                }

                        }
                        else if(modelo == 2){

                            console.log(" Voce escolheu a Trava TE300!! \n");
                            console.log(" Selecione a Voltagem: \n");
                            console.log(" 1 - 12 Volts \n");
                            console.log(" 2 - 24 Volts \n");
                            console.log(" 3 - 110 Volts \n");
                            console.log(" 4 - 220 Volts \n");
                            voltagem = input.question(" Voltagem Escolhida: \n");

                                if(voltagem == 1){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas TE300 12 Volts \n");

                                }
                                else if(voltagem == 2){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas TE300 24 Volts \n");

                                }
                                else if(voltagem == 3){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas TE300 110 Volts \n");

                                }
                                else if(voltagem == 4){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas TE300 220 Volts \n");

                                }
                                else{
                                    console.log("Opcao Invalida! \n");
                                }


                        }
                        else if(modelo == 3){

                            console.log(" Voce escolheu a Trava TE400!! \n");
                            console.log(" Selecione a Voltagem: \n");
                            console.log(" 1 - 12 Volts \n");
                            console.log(" 2 - 24 Volts\n");
                            console.log(" 3 - 110 Volts\n");
                            console.log(" 4 - 220 Volts\n");   
                            voltagem = input.question(" Voltagem Escolhida: \n");

                                if(voltagem == 1){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas TE400 12 Volts \n");

                                }
                                else if(voltagem == 2){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas TE400 24 Volts \n");

                                }
                                else if(voltagem == 3){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas TE400 110 Volts \n");

                                }
                                else if(voltagem == 4){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas TE400 220 Volts \n");

                                }
                                else{
                                    console.log("Opcao Invalida! \n");
                                }

                        }
                        else if(modelo == 4){

                            console.log(" Voce escolheu a Trava TE500!! \n");
                            console.log(" Selecione a Voltagem: \n");
                            console.log(" 1 - 12 Volts \n");
                            console.log(" 2 - 24 Volts\n");
                            console.log(" 3 - 110 Volts\n");
                            console.log(" 4 - 220 Volts\n");   
                            voltagem = input.question(" Voltagem Escolhida: \n");

                                if(voltagem == 1){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas TE500 12 Volts \n");

                                }
                                else if(voltagem == 2){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas TE500 24 Volts \n");

                                }
                                else if(voltagem == 3){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas TE500 110 Volts \n");

                                }
                                else if(voltagem == 4){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas TE500 220 Volts \n");

                                }
                                else{
                                    console.log("Opcao Invalida! \n");
                                }


                        }
                        else if(modelo == 5){

                            console.log(" Voce escolheu a Trava TE600!! \n");
                            console.log(" Selecione a Voltagem: \n");
                            console.log(" 1 - 12 Volts \n");
                            console.log(" 2 - 24 Volts\n");
                            console.log(" 3 - 110 Volts\n");
                            console.log(" 4 - 220 Volts\n");   
                            voltagem = input.question(" Voltagem Escolhida: \n");

                            
                                if(voltagem == 1){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas TE600 12 Volts \n");

                                }
                                else if(voltagem == 2){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas TE600 24 Volts \n");

                                }
                                else if(voltagem == 3){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas TE600 110 Volts \n");

                                }
                                else if(voltagem == 4){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas TE600 220 Volts \n");
                                }
                                else{
                                    console.log("Opcao Invalida! \n");
                                }

                        }
                        else if(modelo == 6){

                            console.log(" Voce escolheu a Trava Injetmax!! \n");
                            console.log(" Selecione a Voltagem: \n");
                            console.log(" 1 - 12 Volts \n");
                            console.log(" 2 - 24 Volts\n");
                            console.log(" 3 - 110 Volts\n");
                            console.log(" 4 - 220 Volts\n");   
                            voltagem = input.question(" Voltagem Escolhida: \n");

                                if(voltagem == 1){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas Injetmax 12 Volts \n");
                                }
                                else if(voltagem == 2){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas Injetmax 24 Volts \n");

                                }
                                else if(voltagem == 3){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas Injetmax 110 Volts \n");

                                }
                                else if(voltagem == 4){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Travas Injetmax 220 Volts \n");

                                }
                                else{
                                    console.log("Opcao Invalida! \n");
                                }

                        }
                        else{
                            console.log("Opcao Invalida! \n");
                        }

                }

                else if(produto == 2){
                    
                    console.log(" Selecione uma Peca de Reposicao: \n");
                    console.log(" 1 - Bobina \n");
                    console.log(" 2 - Chicote \n");
                    console.log(" 3 - Tubo de Aluminio \n");
                    console.log(" 4 - Pino Interno \n");
                    console.log(" 5 - Chave \n");
                    console.log(" 6 - Mola \n");
                    console.log(" 7 - Pino Externo \n");
                    console.log(" 8 - Chapa de Aco \n");
                    console.log(" 9 - Ponteira de Aco \n");
                    let peca = input.question("Peca Escolhida: ");

                        if(peca == 1){

                            console.log(" Selecione a voltagem da bobina: \n");
                            console.log(" 1 - 12 Volts \n");
                            console.log(" 2 - 24 Volts\n");
                            console.log(" 3 - 110 Volts\n");
                            console.log(" 4 - 220 Volts\n");   
                            voltagem = input.question(" Voltagem Escolhida: \n");

                                if(voltagem == 1){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Bobinas 12 Volts \n");

                                }
                                else if(voltagem == 2){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Bobinas 24 Volts \n");

                                }
                                else if(voltagem == 3){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Bobinas 110 Volts \n");

                                }
                                else if(voltagem == 4){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Bobinas 220 Volts \n");

                                }
                                else{
                                    console.log("Opcao Invalida! \n");
                                }

                        }
                        else if(peca == 2){

                            quantidade = input.question("Insira a quantidade de chicotes: ");
                            console.log("Voce comprou " + quantidade + " chicotes \n");

                        }
                        else if(peca == 3){

                            quantidade = input.question("Insira a quantidade de tubos: ");
                            console.log("Voce comprou " + quantidade + " tubos de aluminio \n");

                        }
                        else if(peca == 4){

                            quantidade = input.question("Insira a quantidade de pinos: ");
                            console.log("Voce comprou " + quantidade + " pinos internos \n");

                        }
                        else if(peca == 5){

                            console.log("Selecione o tipo de chave: \n");
                            console.log(" 1 - Segredo Diferente \n");
                            console.log(" 2 - Segredo Igual \n");
                            let tipo = input.question("Tipo escolhido: ");

                                if(tipo == 1){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Chaves modelo segredo diferente \n");

                                }
                                else if(tipo == 2){

                                    quantidade = input.question("Insira a quantidade: ");
                                    console.log("Voce comprou " + quantidade + " Chaves modelo segredo igual \n");

                                }
                                else{
                                    console.log("Opcao Invalida! \n");
                                }

                        }
                        else if(peca == 6){

                            quantidade = input.question("Insira a quantidade de molas: ");
                            console.log("Voce comprou " + quantidade + " molas \n");

                        }
                        else if(peca == 7){

                            quantidade = input.question("Insira a quantidade de pinos: ");
                            console.log("Voce comprou " + quantidade + " Pinos externos \n");

                        }
                        else if(peca == 8){

                            quantidade = input.question("Insira a quantidade de chapas: ");
                            console.log("Voce comprou " + quantidade + " chapas de aco \n")

                        }
                        else if(peca == 9){

                            quantidade = input.question("Insira a quantidade de ponteiras: ");
                            console.log("Voce comprou " + quantidade + " ponteiras de aco \n");

                        }
                        else{
                            console.log("Opcao Invalida! \n");
                        }

                    }

                else if(produto == 3){
                    
                    quantidade = input.question("Quantos suportes deseja comprar? ");
                    console.log("Voce comprou " + quantidade + " suportes para instalacao! \n");

                    }

                else if(produto == 4){

                    quantidade = input.question("Quantos temporizadores deseja comprar? ");
                    console.log("Voce comprou " + quantidade + " temporizadores");

                }

                else{
                    console.log("Opcao Invalida!! \n");
                }

        }
        else{
            console.log("Opcao Invalida ! \n");
        }
}
document.getElementById("enviar").addEventListener("click", validaFormulario)

function validaFormulario(){
    if(document.getElementById("nomeDaUsuaria").value != "" 
    && document.getElementById("emailDaUsuaria").value !="" 
    && document.getElementById("telefone").value != "" ){
        alert("Sucesso, você receberá as novidades por email. ")
    }else{
        alert("Por favor, prencha os campos nome, email e telefone!")
    }
}
/* .addEventListener adiciona um evento para ser ouvido pelo JS e ser executado 
a função quando a usuaria clicar no botão.

funções são um conjunto de instruções que realizam uma tarefa. São blocos de códigos específicos que devem 
acontecer quando nós quisermos que eles aconteçam!

document.getElementById("nomeDoID").value

"document." se refere ao html, "getElemmentById" está pegando o id do input 
para verificar se estão prenchidos ou não.

() dentro se coloca o nome do id

.value está detectando se o conteudo dos input estão vazios ou preenchidos

O operador != significa diferente, "" significa string vazia, string é um tipo de dado, ou seja, 
diferente de vazio é prenchido.

&& é o operador E, usado quando precisamos validar todas as informações para serem consideradas verdadeiras.

Nesse caso estamos dizendo que se o campo(input) nome ou email estiverem prenchidos(!="")
Os dados devem ser enviados, senão(else) deve exibir a mensagem pedindo para prencher os dados.
alert é usado para criar o pop-up com a mensagem.
*/

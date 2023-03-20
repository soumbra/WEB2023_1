import React, { Component } from "react";

//Questão 01
/* Crie um arquivo dentro da pasta src/components/atividade00 chamado
01MeusDados.jsx
● Implemente um componente que mostre na tela seu nome completo, curso e
universidade. Separe essas informações usando a tag <h1>.
● Implemente, ainda no mesmo arquivo, quatro versões do mesmo
componente: *usando function, *arrow function com return, arrow function sem
return e classes.
● Tente usar algum estilo.
 */

//ArrowFunction com return
/*const MeusDados = () => {
   return (
    <div>
      <h1>Franciel Silveira</h1>
      <h1>SI</h1>
      <h1>UFC-QXD</h1>
    </div>
   )

 }*/

//Function padrão
/*function MeusDados(){
    return(
      <div>
        <h1>Robson José</h1>
        <h1>ES</h1>
        <h1>UFC-QXD</h1>
      </div>
    )
}*/

//ArrowFunction sem return
/*const MeusDados = () =>
  <div>
    <h1>Franciel Silveira Penha de Vasconcelos</h1>
    <h1>SI</h1>
    <h1>UFC-QXD</h1>
  </div>
*/

//Utilizando class
class MeusDados extends Component {
  render() {
    return (
      <div>
        <h1>Robson José</h1>
        <h1>ES</h1>
        <h1>UFC-QXD</h1>
      </div>
    );
  }
}

export default MeusDados;

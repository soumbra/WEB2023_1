/*
Crie um arquivo dentro da pasta src/components/atividade00 chamado
02MeusDados.jsx.
● Implemente a mesma ideia do exercício anterior (01) só que agora você
deverá passar os dados (nome, curso e universidade) via props, a partir do
componente pai (App.js).
● Use desconstrução para conseguir os dados de props, por exemplo:
○ const obj = { a: 1, b: 2 };
○ const { a, b } = obj;
○ // is equivalent to:
○ // const a = obj.a;
○ // const b = obj.b;
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
● Implemente apenas a versão com função seta com return para esse
exercício.
*/

const MeusDadoss = (props) => {
  const {nome, curso, universidade} = props;
  return (
    <div>
      <h1>Meu nome é: {nome}</h1>
      <h1>Meu curso é: {curso}</h1>
      <h1>Minha universidade é: {universidade}</h1>
    </div>
  )
};

export default MeusDados;
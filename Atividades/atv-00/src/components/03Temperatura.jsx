/*
Crie um arquivo dentro da pasta src/components/atividade00 chamado
03Temperatura.jsx.
● Usando apenas arrow function, o seu componente deverá:
○ implementar uma função interna que receba como parâmetro uma
temperatura em Celsius e converta para Fahrenheit. Chame a função
de “celsiusParaFahrenheit(c)”;
○ implementar uma função interna que receba como parâmetro uma
temperatura em Fahrenheit e converta para Celsius. Chame a função
de “fahrenheitParaCelsius(f)”;
○ implementar uma função que receba em Kelvin e retorne um objeto
Json com as temperaturas Celsius e Fahrenheit. Chame a função de
“kelvin(k)”;
○ Chame as três funções no JSX do componente Temperatura com
argumentos que você desejar converter.
*/

const Temperatura = (numeros) => {
    const {c, f, k} = numeros;
    const celsiusParaFahrenheit = (c) => {
      return (((c*9)+160)/5)
    }
  
    const fahrenheitParaCelsius = (f) =>{
      return ((5*f)-160)/9
    }
  
    const kelvin = (k) => {
      const f = (k - 273) * (9/5) + 32;
      const c = k-273;
      return {c,f}
    }
  
    return (
      <div>
        <h1>Celsius para Fahrenheit: {celsiusParaFahrenheit(c)}</h1>
        <h1>Fahrenheit para Celsius: {fahrenheitParaCelsius(f)}</h1>
        <h1>Kelvin para Celsius: {kelvin(k).c}</h1>
        <h1>Kelvin para Fahrenheit: {kelvin(k).f}</h1>
      </div>
    )
  }
  
  export default Temperatura;
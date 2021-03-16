const functions = {
  helloWorld: function () {
    return 'Hello World!'
  },
  substraction: function (numberOne, numberTwo) {
    return numberOne - numberTwo;
  },
  arrayOfNumbers: function () {
    return [0,1,2,3,4,5];
  },
  promedioDe: function (sujeto , arregloNumeros) {
    let sumaRes = 0;
    
    for(let i = 0; i < arregloNumeros.length; i++){
      sumaRes += arregloNumeros[i];
    }
    
    const promedio = (sumaRes / arregloNumeros.length).toFixed(2);

    return `El promedio de ${sujeto} es: ${promedio}`.trim();
  }
}

const prom = functions.promedioDe('las notas de Guido',[5, 6, 4, 7, 8, 4]);
console.log(prom);

module.exports = functions
const { assert, expect } = require('chai');
const {
  helloWorld,
  substraction,
  arrayOfNumbers,
  promedioDe
} = require('../index');

describe('@index.js', () => {
  describe('#printHelloWorld', () => {
  it('should be a function', () => {
      assert.typeOf(helloWorld, 'function', 'printHelloWorld should be a function');
    });
   
    it('should be return a string', () => {
      assert.typeOf(helloWorld(), 'string', 'printHelloWorld should be return a string');
    });

    it('should print Hello World!', function () {
      const actualResult = helloWorld();
      const expectedResult = 'Hello World!';

      // assert.isTrue(actualResult === expectedResult);
      assert.equal(actualResult, expectedResult);
    })
  })
  
  describe('#substraction', () => {
    it('should be a function', () => {
      assert.typeOf(substraction, 'function', 'substraction should be a function');
    });
   
    it('should be return a string', () => {
      assert.typeOf(substraction(), 'number', 'substraction should be return a number');
    });

    it('should be less than 5', function () {
      const actualResult = substraction(4, 2);

      assert.isBelow(actualResult, 5);
    })
    
    it('should be equals', function () {
      const actualResult = substraction(4, 2);
      const expectedResult = 2;

      assert.isTrue(actualResult === expectedResult);
    })
  })

  describe('#arrayOfNumbers', () => {
    const actualResult = arrayOfNumbers();

    it('should be a function', () => {
      assert.typeOf(arrayOfNumbers, 'function', 'arrayOfNumbers should be a function');
    });
   
    it('should be return a array', () => {
      assert.typeOf(arrayOfNumbers(), 'array', 'arrayOfNumbers should be return a array of numbers');
    });

    it('should be include 5', function () {
      assert.include(actualResult, 5);
    })
    
    it('should be 6 elements', function () {
      assert.lengthOf(actualResult, 6);
    })
  })

  describe.only('#promedioDe', () => {
    it('debe ser una funcion', function () {
       assert.typeOf(promedioDe, 'function', 'promedioDe debe ser una funcion') 
    })
   
    it('el resultado debe ser => 5.67', function () {
      const arrayOfNums = [5, 6, 4, 7, 8, 4];
      const actualResult = promedioDe('las notas de Guido', arrayOfNums);

      expect(actualResult).to.be.equal('El promedio de las notas de Guido es: 5.67');
    })

    it('el resultado debe ser => 5.67 - async version 1', function (done) {
      setTimeout(() => {
        const arrayOfNums = [5, 6, 4, 7, 8, 4];
        const actualResult = promedioDe('las notas de Guido', arrayOfNums);
        const expected = 'El promedio de las notas de Guido es: 5.67';

        // expect(actualResult).to.equal(expected);
        expect(actualResult).is.equal(expected);
        done()
      }, 500);
    })
   
    it('el resultado debe ser => 5.67 - async version 2', function (done) {
      setTimeout(() => {
        const arrayOfNums = [5, 6, 4, 7, 8, 4];
        const actualResult = promedioDe('las notas de Guido', arrayOfNums);
        const expected = 'El promedio de las notas de Guido es: 5.67';

        // expect(actualResult).to.equal(expected);
        expect(actualResult).is.equal(expected);
        done()
      }, 500);
    })

  })
  
})


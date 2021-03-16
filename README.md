# Pruebas unitarias (Unit testing) con javascript usando mocha y chai

## Mocha
Mocha es un framework de pruebas de JavaScript que se ejecuta en Node.js. Nos da la posibilidad de crear tanto tests síncronos como asíncronos de una forma muy sencilla. Nos proporciona muchas utilidades para la ejecución y el reporte de los tests.

## Chai.js
Es un librería de aserciones, la cual se puede emparejar con cualquier marco de pruebas de Javascript. Chai tiene varias interfaces: assert, expect y should, que permiten al desarrollador elegir el estilo que le resulte más legible y cómodo a la hora de desarrollar sus tests:

## Algunos ejemplos

### Assert

```js
  assert.typeOf(foo, 'string', 'foo is a string');
  assert.equal(foo, 'bar', 'foo equal `bar`');
  assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
```

### Expect

```js
  expect(foo).to.be.a('string');
  expect(foo).to.equal('bar');
  expect(foo).to.have.length(3);
```

### Should

```js
  foo.should.be.a('string');
  foo.should.equal('bar');
  foo.should.have.length(3);
```

### only 
Permite ejecutar solo aquello(s) test(s) que tengan este metodo

```js
  //Aplica a todos los tests de un describe
  describe.only('#arrayOfNumbers', () => {}
```

```js
  //Aplica a un solo test de un describe
  it.only('should be a function', () => {}
```

### skip 
Saltea o no ejecuta aquello(s) test(s) que tengan este metodo

```js
  //Aplica a todos los tests de un describe
  describe.skip('#formData', function() {}
```

```js
  //Aplica a un solo test de un describe
  it.skip('should be less than 5', function () {}
```

### Tips
Agregar al `package.json`. Exit 0 evita que se muestre la pila de errores

```json
  "test": "node ./node_modules/mocha/bin/_mocha || exit 0" 
```

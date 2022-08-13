
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
//La variable declarada con VAR, se limita a ser utilizada en el contexto en el que se encuentre, mientras que las variables sin declarar se puede utilizar en el contexto global.
// las variables con VAR son declaradas y sin VAR significa que un valor es asignado.


```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) { //8,9,10
  var x = 10;
  console.log(x); // x=10
  console.log(a); // a=8 
  var f = function(a, b, c) { //8, 9, 10
    b = a; //b=8
    console.log(b); // b= 8
    b = c; //b=10
    var x = 5;
  }
  f(a,b,c); // 8,9,10
  console.log(b); // b=9
}
c(8,9,10);
<<<<<<< HEAD
console.log(b); //10
console.log(x); //1
=======
console.log(b); 
console.log(x); 
>>>>>>> c171f33454a9f8f47cf5b1a6353973b522be2c2d
```

```javascript
console.log(bar); //-----> undefined
console.log(baz); //-----> error la varible es asignada más no declarada
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);
```

```javascript
var instructor = "Tony";
console.log(instructor); //instructor= Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //instructor= Franco
   }
})();
console.log(instructor); //instructor= Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //instructor=The Flash
    console.log(pm); //pm=Reverse Flash
}
console.log(instructor); // instructor=The Flash
console.log(pm); //pm=Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" --------> 2
"2" * "3" ------> 6
4 + 5 + "px" ---> 9px
"$" + 4 + 5 ----> $45
"4" - 2 --------> 2
"4px" - 2 ------> NaN
7 / 0 ----------> infinity
{}[0] ----------> undefined
parseInt("09") -> 9
5 && 2 ---------> 2 
2 && 5 ---------> 5
5 || 0 ---------> 5
0 || 5 ---------> 5
[3]+[3]-[10] ---> 33 -10 ---> 23
3>2>1 ----------> 3>2 verdader --- verdadero > 1(false) ---- false 
[] == ![] ------> true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //a= undefined
   console.log(foo()); //2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); //snack toma el valor del Meow Mix, ya que al finalizar la funcion esta se destreuye y no hay cambios en las variables
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```

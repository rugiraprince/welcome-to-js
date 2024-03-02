'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

//declare variable  a assign it value "y"
//declare variable  b assign it value "x"
//declare variable  t assign it value " "

let a = 'y';
let b = 'x';
let t = '';

//read the values of a,b,t
console.log(a, b, t);

//assign values to t to "y"
//assign values to a to "x"
//assign values to b to "y"
t = a;
a = b;
b = t;
//read the varibales a, b, t
console.log(a, b, t);

// what did you do in this program?            swaping values of variables
// what are the final values of `a` and `b`?   a="x" and b= ''
// how are they changed from the initial values a=y then a=x , b=x after b='' , t='' after t=y

// is it possible to swap a and b without using t?  yes and no

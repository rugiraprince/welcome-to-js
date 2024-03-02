'use strict';

let input ='prince';
input = prompt('enter something with 5 characters:');
input = 'hello';

let message = '';
if (input === null) {
  message = ':(';
} else if (input.length < 5) {
  message = 'too short';
} else if (input.length === 5) {
  message = 'thank you!';
} if (input.length === 5 || input.length === null) {
  message = '';
}
 else {
  message = 'too long';
}

alert(message);

/*  ===== Challenges =====
  - Give "input" a default value before asking for the user input.
  - Change input's value after asking for the user input so that we always show "thank you!".
  - Add one more conditional so that we never show ":(" and don't always show "thank you!".
*/

let secretMessage = [
  'Learning',
  'is',
  'not',
  'about',
  'what',
  'you',
  'get',
  'easily',
  'the',
  'first',
  'time,',
  'it',
  'is',
  'about',
  'what',
  'you',
  'can',
  'figure',
  'out.',
  '-2015,',
  'Chris',
  'Pine,',
  'Learn',
  'JavaScript',
];
console.log(secretMessage.pop());
console.log(secretMessage.length);
console.log(secretMessage.push('to'));
console.log(secretMessage.push('Program'));
secretMessage[7] = 'right';
console.log(secretMessage.shift());
console.log(secretMessage.unshift('Program'));
secretMessage.splice(6, 5, 'know');
console.log(secretMessage);
console.log(secretMessage.join(' '));

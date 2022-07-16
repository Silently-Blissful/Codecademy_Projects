let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//console.log(secretMessage.length);

//Step 1
secretMessage.pop();

/*
Step 2
console.log(secretMessage.length);
*/

//Step 3
secretMessage.push('to', 'Program');
//console.log(secretMessage);

//Step 4
secretMessage[7] = 'right';
//console.log(secretMessage);

//Step 5
secretMessage.shift();
//console.log(secretMessage);

//Step 6
secretMessage.unshift('Programming');
//console.log(secretMessage);

//Step 7
secretMessage.splice(6, 5, 'know,');
//console.log(secretMessage);

//Step 8
console.log(secretMessage.join(' '));

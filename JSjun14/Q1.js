
//console functions are as follows.
// In javascript, the console is an object which provides access to the browser debugging console
// console.log() method .Mainly used to log(print) the output to the console. We can put any type inside the log(), be it a string, array, object, boolean etc.
console.log('abc'); 
console.log(1); 
console.log(true); 
console.log(null); 
console.log(undefined); 
console.log([1, 2, 3, 4]); // array inside log 
console.log({a:1, b:2, c:3}); // object inside log 

// console.error() method .Used to log error message to the console. Useful in testing of code. By default the error message will be highlighted with red color.
console.error('This is a simple error'); 

// console.warn() method. Used to log warning message to the console. By default the warning message will be highlighted with yellow color.
console.warn('This is a warning.'); 

// console.clear() method .Used to clear the console. 
console.clear(); 

// console.table() method .This method allows us to generate a table inside a console. The input must be an array or an object which will be shown as a table.
console.table({'a':1, 'b':2}); 

// console.count() method .This method is used to count the number that the function hit by this counting method.
for(let i=0;i<5;i++){ 
	console.count(i); 
} 

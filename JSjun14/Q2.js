
 // var declaration are globally scoped.

 var greeter = "HELLO";
    
 function newFunction() {
     var hello = "BYE";
 }
 var tester = "hey hi";
    // Thus this happens.
 function newFunction() {
     var hello = "hello";
 }
 console.log(hello); // error: hello is not defined


 // When a var is declared outside of a function,then it is global.Thus it is available to use in complete window.
 // When a var is declared inside a function then it is function scoped i.e it is available and usable only withing function.
 //var can be update and renamed.
 var greeter = "A";
 var greeter = "B";
 

 
 //let is used for variable declaration and it solves the problem with var
 //It is blocked scoped i.e it can be used within the curly braces(block)
 let greeting = "say Hi";
 let times = 4;

 if (times > 3) {
      let hello = "say Hello instead";
      console.log(hello);// "say Hello instead"
  }
 console.log(hello) // hello is not defined

 // We can only declare let only once.

   let greeting = "say Hi";
    greeting = "say Hello instead";



    let greeting = "say Hi";
    let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

 // If it is used in different scope then it can redeclared.

 let greeting = "say Hi";
 if (true) {
     let greeting = "say Hello instead";
     console.log(greeting); // "say Hello instead"
 }
 console.log(greeting); // "say Hi"
  

  /*
  Variables declared with the const maintain constant values
  This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared
  */

 const greeting = "say Hi";
 greeting = "say Hello instead";// error: Assignment to constant variable. 

 const greeting = "say Hi";
 const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared
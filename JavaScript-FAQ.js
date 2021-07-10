// Javascript is a single threaded

// JS is a single threaded which means only one statement is executed at a time. Before we dive
// into what it means by it runs on single thread. I would want to first go over the terminology
// that will help you in understanding.

// Synchronous (or sync) execution usually refers to code executing in sequence. In sync programming,
// the program is executed line by line, one line at a time. Each time a function is called, the program
// execution waits until that function returns before continuing to the next line of code.

const one = () => {
  const two = () => {
    console.log('5');
  }
  two();
}

one();

// Javascript is a single threaded language that can be non-blocking. Single threaded means it has only
//  one call stack. Whatever is on the top of the call stack is run first.

const one = () => {
  console.log("Hello");
}
const two = () => {
  for(i=0; i<= 1000; i++) {
    
  }
}
const three = () => {
  console.log("World");
}

one();
two();
three();

// what if our second function has to loop through huge numbers. Does this means three() has to wait
//  till two() is executed. Technically, Yes!

// Asynchronous (or async) execution refers to execution that doesn’t run in the sequence it appears in 
// the code. In async programming the program doesn’t wait for the task to complete and can move on to the
// next task.

console.log('1');
setTimeout(()=> {
console.log('2')
}, 3000);
console.log('3');

// You may see 1 3 and with a brief delay 2 shows up. Why is this happening?

// In a nutshell, the asynchronous implementation in Javascript is done through a call stack, call back queue
// and Web API and event loop.

// Call stack job as we seen earlier is to check what instruction is at the top of the stack and execute it.
// If there is an instruction like setTimeout() that requires extra time to execute then call stack will pop
// that out and send it to Web API.

// The job of event loop is to continuously check if an event occurred, like mouse click or keyboard stroke
// so that it can send that to call stack. Of course, your mouse click will be given higher priority for 
// execution than an image load.

// In Javascript, All instructions are put on a call stack. When the stack arrives at setTimeout, the engine
// sees it as a Web API instruction and pops it out and sends it to Web API. Once the Web API is done with 
// the execution, it will arrive at the call back queue.

// JavaScript Event Loop Explained


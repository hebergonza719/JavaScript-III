/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - In the global scope,
The pronoun "this" refers to the window or the screen. It makes reference to javascript.

* 2. Implicit Binding - The pronoun "this" makes reference to the object before the dot. It 
makes reference to the object holding a function.

* 3. New binding - The pronoun "this" refers to the new object being instantiated from a 
constructor function.

* 4. Explicit binding - Whenever the call() or apply() methods is used on an object or its method,
the pronoun "this" refers to the origin object. It's like the object it's called upon is using a mask,
of a disguise.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windowExample() {
  return this;
}

dontConsoleLog = windowExample();

// Principle 2

// code example for Implicit Binding
const implicitExample = {
  name: 'Isabella',
  location: 'New York',
  food: 'Pizza',
  info: function() {
    console.log(`${this.name} is from ${this.location}, and she loves to eat ${this.food}.`);
  }
}

implicitExample.info();

// Principle 3

// code example for New Binding

function BindingExample(bookTitle, bookGenre, bookAuthor) {
  this.title = bookTitle;
  this.genre = bookGenre;
  this.author = bookAuthor;
  this.info = function() {
    console.log(`${this.title} is a ${this.genre} book written by ${this.author}.`);
  };

  // Arrow functions did not give desired result when using call() and apply()
  // this.info = () => {
  //   console.log(`${this.title} is a ${this.genre} book written by ${this.author}.`);
  // };
}

const oneHundredYears = new BindingExample('One Hundred Years of Solitude', 'magical realism', 'Garcia Marquez');
const theStand = new BindingExample('The Stand', 'fantasy/horror', 'Stephen King');


oneHundredYears.info();
theStand.info();

// Principle 4

// code example for Explicit Binding
console.log('Below you should see info for The Stand, but you will get oneHundredYears instead', '\n');
theStand.info.call(oneHundredYears);
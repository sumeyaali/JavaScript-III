/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window binding: When in global cope, the value of “this” will be the window/console Object.
  The .this keyword defaults to the window objects when none of the other rules apply. 

* 2. Implicit binding- when a function is called but is preceded by a dot which is the .this keyword is reffering to. 

* 3. New Binding- Using the new keyword it constructs a new object and this points to it. 

* 4. Explicit binding- this is explicitly defined when the call or apply method is used. 
*



* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function hello(name) {
    console.log(this);
    return name;
}

hello('Sumeya');

// Principle 2
// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Sumeya');



// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const lulu = new CordialPerson('Lulu');
  
  lulu.speak();



// Principle 4

// code example for Explicit Binding

function food(){
      console.log(this.appetizer);
    }

    let favFood = {
      name: 'Ethiopian',   
      appetizer: 'wings',
    }
    
    let otherFoods = {
      name: 'Chicken Alfredo',
      appetizer: 'fries',
      
    }
    
    food.call(favFood); 
    food.call(otherFoods); // invoking the function here
    
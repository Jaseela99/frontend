/* //classes


class Car {
    constructor(name) {
      this.brand = name;
    }
    //to add a method
    present(){
        return "i have a "+this.brand
    }
  }

  //create a class inhertance

  class Model extends Car { //it inherits methods from class car
    constructor(name, mod) {
      super(name); //it refers to parents class and get access to parents constructor methods and properties
      this.model = mod;
    }  
    show() {
        return this.present() + ', it is a ' + this.model
    }
  }
 
  const mycar = new Car("Ford"); //create an object
  mycar.present()
  mycar.show()

 */

  /* //Arrow functions

  const hello = () => {
    return "Hello World!";
  }

  hello = () => "Hello World!";//for single statement
  hello = val => "Hello " + val;//for single paranthesis */



  //array.map can be used to generate lists.

  const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)
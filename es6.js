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

 /*  const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>) */

//destructuring of arrays =. assigning array items to variables
/* const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,, suv] = vehicles; */

//it is used when a function returns an array

/* function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7); */


//destructuring objects

/* const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
} */

//spread operators

/* const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

 */
//assigning rest of the numbers with rest

/* const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers; */

//for objects
//combines both object and updates the key values which is already present
/* const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

 */
//modules
//export

//inline
/* export const name = "Jesse"
export const age = 40
 */
//at  bottom 
/* const name = "Jesse"
const age = 40
 
export { name, age }*/

//default

/* const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + ' is ' + age + 'years old.';
};

export default message; */

//named import

//import { name, age } from "./person.js";

//default import
//import message from "./message.js";


//ternary operator
//authenticated ? renderApp() : renderLogin();
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
      super(name);
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
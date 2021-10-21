class Greeter{
  greeting: string;
  constructor(){
    this.greeting = "classmates";
  }
  greet(){
    return "Hello All students, "+
this.greeting;
  }
}
  
let greeter = new Greeter();
console.log(greeter.greet());
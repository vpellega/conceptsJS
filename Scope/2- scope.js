this.name = "Victor";

function Person() {
  this.name = "Luciano";
}

var person = new Person();

console.log(Person.prototype.constructor.name);

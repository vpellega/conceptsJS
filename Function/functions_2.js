this.power = 90;

function Person() {
  this.type = "archer";
  this.power = 110;
}

Person.prototype.staminaArrowFn = () => {
  return this.power + 50;
};

Person.prototype.stamina = function () {
  return this.power + 50;
};

const Oliver = new Person();

console.log(Oliver.stamina.bind(this)());
console.log(Oliver.staminaArrowFn());

// Person > {prototype: {constructor: Person, __proto__: Object, stamina: Function}}

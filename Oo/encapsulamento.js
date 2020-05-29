class Animal {
  constructor(tipo) {
    this.tipo = tipo;
  }
}

class Gato extends Animal {
  #name;
  constructor(name, tipo) {
    super(tipo);
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
}

const pug = new Gato("Gumball", "gato");

console.log(pug.name);
console.log(typeof Animal); //Function

// Toda funçao que nao necessita do construtor new

function Person() {
  return {
    name: "Victor",
    lastName: "Silva",
  };
}

const person = Person();

console.log(person.name);

const user = {
  name: "Victor",
  lastName: "Pellegrino",
};

console.log("Propriedades do object:", Object.keys(user));

console.log("Valores do object:", Object.values(user));

console.log("Lista de propriedades e valores:", Object.entries(user));

console.log(
  "Adicionando novas propriedades ao objeto:",
  Object.assign(user, { fullName: `${user.name} ${user.lastName}` }) // Não é considerado boa práticas
);

console.log(
  "Adicionando novas propriedades ao objeto:",
  Object.assign({}, user, { age: 23 })
);
console.log(user);

Object.freeze(); //Mantem o object inalterado, seja, inclusão, alteração ou remoção
Object.seal(); // Mantem o object inalterado para remoção ou inclução

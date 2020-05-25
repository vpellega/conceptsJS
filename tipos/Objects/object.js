const user = {
  name: "Victor",
};

console.log(user);

user.name = "Outro nome";
console.log(user);

user["name"] = "Outro nome 2";
console.log(user);

const prop = "name";
user[prop] = "Victor Pellegrino";
console.log(user);

user.name = "Victor";
user.lastName = "Pellegrino";

delete user.name;

console.log(user);

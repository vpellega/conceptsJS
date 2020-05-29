(function () {
  console.log(arguments);
  this.name = "Pellegrino";

  function getName() {
    return this.name;
  }

  const getNameArrowFn = () => this.name;

  const user = {
    name: "Victor",
    getName,
    getNameArrowFn,
  };
  console.log(user.getName());
  console.log(user.getNameArrowFn());
})(1, "nome", 3);

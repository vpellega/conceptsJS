function App(name, version) {
  this.name = name;
  this.version = version;

  if (!App.instance) {
    App.instance = this;
  }

  return App.instance;
}

const conceitos = new App("Conceitos JavaScript", "1.0.1");
console.log(conceitos);

const patterns = new App();
console.log(patterns); // It's the same instance that we created earlier

function Clojure(param) {
  let name = param;
  return function () {
    let fullName = `${name} Pellegrino`;
    console.log(fullName);
  };
}

const name = Clojure("Victor");

name();

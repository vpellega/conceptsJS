var x = 0;

function foo() {
  var x = 10;
  return function () {
    return x;
  };
}
var bar = foo();

// console.log(bar()); // 10

function baz() {
  var x = 20;
  bar();
}
console.log(baz()); // undefined

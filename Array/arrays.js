const employees = [
  {
    name: "Victor",
    sector: "TI",
    age: 23,
  },
  {
    name: "Jeferson",
    sector: "TI",
    age: 35,
  },
  {
    name: "Rita",
    sector: "Limpeza",
    age: 40,
  },
];

const qntdeEmployees = employees.length;
console.log(qntdeEmployees);

const ageOfEmployeesTi = employees
  .filter((employee) => employee.sector === "TI")
  .reduce((age, employee) => {
    age += employee.age;
    return age;
  }, 0);

console.log(`A soma das idades dos colaborades de TI é ${ageOfEmployeesTi}`);

// Given an array of objects, each object representing a person with a name and age property, 
// write a function that returns a new array containing the names of all people who are 18 years old or older.
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];

const above18 = array => {
    const olderArr = []
    array.forEach(element => {
        if(element.age >= 18)
         olderArr.push(element.name)
    });
    return olderArr
}
console.log(above18(people))
// Write a function that takes an array of objects, where each object represents a product
//  with a name, price, and category property. 
// The function should return an object that groups the products by their categories, 
// with the category names as keys and the arrays of products as values.

function productCategory(products) {
  const groups = {};
  for (const product of products) {
    if (!groups[product.category]) {
      groups[product.category] = [];
    }
    groups[product.category].push(product);
  }
  return groups;
}
const products = [
  { name: 'crisps', price: 1200, category: 'Snacks' },
  { name: 'barsoap', price: 250, category: 'laundry' },
  { name: 'book', price: 100, category: 'stationery' },
  { name: 'hoodie', price: 600, category: 'Clothing' },
];
const groupedProducts = productCategory(products);
console.log(groupedProducts);
// Given an array of objects, where each object represents a student with a name and an array of scores, 
// write a function that returns a new array containing the names of all students whose average score is greater than or equal to 85.
// const students = [
//     { name: 'John', scores: [90, 80, 85] },
//     { name: 'Jane', scores: [95, 92, 88] },
//     { name: 'Jim', scores: [70, 80, 75] },
//     { name: 'Jill', scores: [85, 90, 84] },
// ];  

 

  function topStudents(students) {
    const passed = [];//empty to hold names of students >85
  
    for (const student of students) { 
      const scores = student.scores;
      const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  
      if (averageScore >= 85) {
        passed.push(student.name);
      }
    }
  
    return passed;
  }
  const students = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
]; 
const highPerformers = topStudents(students);

console.log(highPerformers); 
  
  // Given an object representing a car, with properties for the make, model, year, and a method to 
// display the car's information, 
// write a function that takes the car object and adds a new method to the object called age. 
// The age method should return the current age of the car based on the current year and the car's year property.
// const car = {
//     make: 'Ford',
//     model: 'Ranger',
//   year: 2023,
//   displayInfo: function() {
//       console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
//   },
// };

function addAgeMethod(car) {
  const currentYear = new Date().getFullYear();
  const carYear = car.year;

  car.age = function() {
    return currentYear - carYear;
  };
}
const car = {
  make: 'Ford',
  model: 'Ranger',
 year: 2023,
 displayInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
},
};



addAgeMethod(car);

console.log(car.age());



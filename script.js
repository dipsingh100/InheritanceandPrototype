//Q1.

// const Parent = {
//     display: function(){
//         console.log(`${this.name} and age is ${this.age}`)
//     }
// }

// const child1 = Object.create(Parent);
// child1.name = "EA23"
// child1.age = 22;
// child1.display();

// const child2 = Object.create(Parent);
// child2.name = "EA24"
// child2.age = 24;
// child2.display();


//Q2.
// const GFather = {
//     SayHello : function(){
//         console.log("Hey Grand Father!!");
//     }
// }

// const Father = Object.create(GFather);
// Father.Hello = function(){
//     console.log("Say Hi to Father!!");
// }

// const Son = Object.create(Father);
// Son.Hi = function(){
//     console.log("Hii I'm Son!!");
// }

// Son.SayHello()

//Q3.
// Array.prototype.sum = function () {
//     return this.reduce((previous, currentValue) => previous + currentValue, 0);
//   };
  
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [10, 20, 30, 40, 50];
// console.log(array1.sum())
// console.log(array2.sum())

//Q4.
function getAllPropertyNames(obj) {
  let propertyNames = [];
  // Retrieve own property names
  propertyNames = propertyNames.concat(Object.getOwnPropertyNames(obj));

  // Retrieve inherited property names
  const prototype = Object.getPrototypeOf(obj);
  if (prototype !== null) {
    const inheritedPropertyNames = getAllPropertyNames(prototype);
    propertyNames = propertyNames.concat(inheritedPropertyNames);
  }

  return propertyNames;
}

const person = {
  name: 'John',
  age: 30
};

const student = Object.create(person);
student.id = 123;
student.grade = 'A';

const propertyNames = getAllPropertyNames(student);
console.log(propertyNames);

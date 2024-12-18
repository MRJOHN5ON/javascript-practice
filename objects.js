
// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:

const student1 = {
    name : "Ryley",
    class : "javascript",
    grade : 12 };

console.log(Object.keys(student1))
console.log(Object.values(student1))
console.log(Object.getOwnPropertyNames(student1));

// Write a JavaScript program to clone the object and delete the grade from the cloned object


const clonedStudent1 = { ...student1 }
delete clonedStudent1.grade;
console.log(student1)
console.log(clonedStudent1)

//adding key:value to an obj
student1['age'] = 33
console.log(student1)
Object.assign(student1, {'gender' : "male"})
console.log(student1)

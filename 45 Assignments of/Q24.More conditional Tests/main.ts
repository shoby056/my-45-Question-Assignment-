let car = 'subaru';
let age = 30;
let fruits = ['apple', 'banana', 'orange'];

console.log("Equality test: Is car equal to 'subaru'? I predict true.");
console.log(car == 'subaru');

console.log("Inequality test: Is car not equal to 'honda'? I predict true.");
console.log(car != 'honda');

console.log("Case-insensitive test: Is car equal to 'Subaru'? I predict false.");
console.log(car.toLowerCase() == 'subaru');

console.log("Numeric equality test: Is age equal to 30? I predict true.");
console.log(age == 30);

console.log("Numeric inequality test: Is age not equal to 32? I predict true.");
console.log(age != 32);

console.log("Greater than test: Is age greater than 20? I predict true.");
console.log(age > 20);

console.log("Less than test: Is age less than 35? I predict true.");
console.log(age < 30);

console.log("Greater than or equal to test: Is age greater than or equal to 30? I predict true.");
console.log(age >= 30);

console.log("Less than or equal to test: Is age less than or equal to 35? I predict true.");
console.log(age <= 35);

console.log("Logical AND test: Is car equal to 'subaru' AND age greater than 20? I predict true.");
console.log(car == 'subaru' && age > 20);

console.log("Logical OR test: Is car equal to 'honda' OR age less than 20? I predict false.");
console.log(car == 'honda' || age < 20);

console.log("Array inclusion test: Is 'banana' in the fruits array? I predict true.");
console.log(fruits.includes('banana'));

console.log("Array exclusion test: Is 'grape' not in the fruits array? I predict true.");
console.log(!fruits.includes('grape'));

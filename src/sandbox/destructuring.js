
// // OBJECT DESTRUCTURING

// const person = {
//     name: 'Dean',
//     age: 24,
//     location: {
//         city: 'Lexington',
//         temp: 40
//     }
// };

// // console.log(`${person.name} is ${person.age}.`); // Solution 1

// // const name = person.name;
// // const age = person.age;
// // console.log(`${name} is ${age}.`); // Solution 2

// const { name: firstName = 'Anonymous', age } = person; // destructuring person object; w/ default value and variable renaming
// console.log(`${firstName} is ${age}.`); // Solution 3; using destructuring

// const {city, temp: temperature} = person.location; // we can rename variables when destructuring

// if(temperature && city) {
//     console.log(`It's ${temperature} in ${city}.`)    
// }

// // =================================
// // Challenge

// const book = {
//     title: 'Harry Potter',
//     author: 'JK Rowling',
//     publisher: {
//         name: 'Scholastic'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName);

// //==================================================================

// //ARRAY DESTRUCTURING

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [, city, state = 'Ohio'] = address;

// console.log(`You are in ${city}, ${state}`);

// // =================================
// // Challenge

const item = ['Coffee', '$2.00', '$2.50', '$2.75'];

const [itemName, smPrice, mdPrice, lgPrice] = item;

console.log(`A medium ${itemName} costs ${mdPrice}`);
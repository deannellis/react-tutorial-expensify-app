// Object Spread Example
// const user = {
//     name: 'Jen',
//     age: 24
// };

// console.log({
//     ...user,
//     city: 'Honalulu',
//     age: 27,
//     specialty: 'ham sammies'
// });

const stateGuy = {
    expenses: [{
        id: 'adgafgs',
        description: 'January Rent',
        note: 'final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

console.log(stateGuy);

console.log({
    ...stateGuy,
    filters: {
        text: 'poop'
        
    }
})
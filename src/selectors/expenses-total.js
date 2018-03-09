export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0);
    
    // const amounts = expenses.map(obj =>{
    //     let amountArray = [];
    //     amountArray = obj.amount;
    //     return amountArray;
    // });
    
    // let sum = amounts.reduce((accumulator, currentValue) => {
    //   return accumulator + currentValue;
    // }, 0)
    // return sum;
};
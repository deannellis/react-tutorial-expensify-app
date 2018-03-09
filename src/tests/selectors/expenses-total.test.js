/*global expect*/
import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('should return 0 if no expenses', () => {
    const emptyExpenses = [];
    const result = selectExpensesTotal(emptyExpenses);
    expect(result).toBe(0);
});

test('should correctly sum a single expense', () => {
    const singleExpense = [expenses[0]];
    const result = selectExpensesTotal(singleExpense);
    expect(result).toBe(expenses[0].amount);
});

test('should correctly sum multiple expenses', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});
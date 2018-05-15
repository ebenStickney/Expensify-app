import React from 'react';
import { shallow } from 'enzyme'; 
import expenses from '../fixtures/expenses';
import  {ExpensesSummary}  from '../../components/ExpensesSummary';
import selectExpensesTotal from '../../selectors/expenses-total'


test('should render ExpensesSummary Component', () => {
    const expenseCount = expenses.length; 
    const expensesTotal = selectExpensesTotal(expenses); 
    const wrapper = shallow(<ExpensesSummary expenseCount={expenseCount} expensesTotal={expensesTotal} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary Component with single expense', () => {
    const expenseCount = [expenses[1]].length; 
    const expensesTotal = selectExpensesTotal([expenses[1]]); 
    const wrapper = shallow(<ExpensesSummary expenseCount={expenseCount} expensesTotal={expensesTotal} />);
    expect(wrapper).toMatchSnapshot();
});

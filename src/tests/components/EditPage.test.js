import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditPage } from '../../components/EditPage';

let startRemoveExpense, editExpense, wrapper, history;

beforeEach(()=> {
  startRemoveExpense = jest.fn();
  editExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
      <EditPage
        startRemoveExpense={startRemoveExpense}
        editExpense={editExpense}
        history={history}
        expense={expenses[0]}
      />
    );
});

test('should render EditPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[0].id});
});

import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow( <ExpenseForm />); 
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense', () => {
    const wrapper = shallow( <ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();                        
});

test('should throw error on form submission', () => {
    const wrapper = shallow( <ExpenseForm />); 
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
   expect(wrapper.state('error').length).toBeGreaterThan(0);
   expect(wrapper).toMatchSnapshot();
});

test('should set description change in state', () => {
    const value = 'New description';
    const wrapper = shallow( <ExpenseForm />); 
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on text area change', () => {
    const value = 'April rent';
    const wrapper = shallow( <ExpenseForm />); 
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
})

test('should set amount if valid input', ()=> {
    const value = '32.50';
    const wrapper = shallow( <ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should NOT set amount with invalid input', ()=> {
    const value = 'twenty bucks';
    const wrapper = shallow( <ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
});
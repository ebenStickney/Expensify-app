import React from 'react';
import {shallow } from 'enzyme';
import moment from 'moment';
import {filters, defFilters} from '../fixtures/filters'; 
import { ExpenseListFilters } from '../../components/ExpenseListFilters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow( 
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        /> );
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});
    
test('should render ExpenseListFilters with defined filters correctly', () => {
    wrapper.setProps({
        filters: defFilters
    });
    expect(wrapper).toMatchSnapshot();
});
    
test('should handle text change', ()=> {
    const value = 'rent'
    wrapper.find('input').simulate('change', {
        target: {value}
    }); 
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
});

test('should sort by date', () => {
     wrapper.setProps({
        filters: defFilters
    });
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalled()
});

    
test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled()
});
    
test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(5, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});
    
test('should handle date focus changes', () => {
    const focused = 'endDate'; 
    wrapper.find('DateRangePicker').prop('onFocusChange')(focused);
    expect(wrapper.state('calendarFocused')).toEqual(focused);
});
    

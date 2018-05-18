import React from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';


export class CreateExpense extends React.Component {
    onSubmit= (expense) => {
         this.props.startAddExpense(expense);
         this.props.history.push('/');
    };

    render() {
        return (
            <div>
            <ExpenseForm
            onSubmit={this.onSubmit}
            />
            </div>
                );

    }};


const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(CreateExpense);

import React from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux'; 


const ExpenseListItem = ({dispatch, id , description, amount, createdAt} ) => (
    <div>
     <h4> {description} </h4>
     <p>Amount: {amount} -- Created at: {createdAt}</p>
      <button onClick={ ()=> {
    dispatch(removeExpense( {id} ))
            } }
      > Remove </button>
    </div>

);

export default connect()(ExpenseListItem);
import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (

<div>
 <h4> Expenses </h4>
 {props.name}
</div>

);

const mapStateToProps = (state) => {
    return {
        name: 'Eben'
    }
};

export default connect(mapStateToProps)(ExpenseList);


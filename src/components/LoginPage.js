import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';


 //creating eventhandler for calling startLogin action
export const LoginPage = ({ startLogin }) => {
  return (
    <div>
      <h2> Log In to Expensify </h2>
        <button onClick={startLogin}> Log In </button>
    </div>

  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () =>dispatch(startLogin())
})  //setting up prop to call dispatch action.

export default connect(undefined, mapDispatchToProps)(LoginPage); //creaing HOC with connect

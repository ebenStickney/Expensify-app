import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configure-store';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);




const jsx = (

  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
ReactDOM.render(jsx, document.getElementById('app'));
})

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('signed in');
  } else {
    console.log('log out');
  };
});  //tells if the user authentication has changed, from authorized to un.
//For now just making sure that we are triggering auth correctly.  

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configure-store';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


let hasRendered = false;

const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

//component to render
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
    renderApp();
    if(history.location.pathname === "/") {
      history.push('/dashboard');
    }
    })
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  };
});  //tells if the user authentication has changed, from authorized to un.
//For now just making sure that we are triggering auth correctly.

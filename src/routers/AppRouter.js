import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from "../components/Dashboard";
import HelpPage from "../components/HelpPage";
import CreateExpense from "../components/CreatePage";
import EditPage from "../components/EditPage";
import NotFoundPage from "../components/NotFound";
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
<Router history={history}>
 <div>
  <Switch>
    <Route
    path="/"
    component={LoginPage}
    exact={true}
   />
   <PrivateRoute
    path="/create"
    component={CreateExpense}
   />
   <PrivateRoute
    path="/edit/:id"
    component={EditPage}
   />
   <PrivateRoute
    path="/help"
    component={HelpPage}
   />
   <PrivateRoute
    path="/dashboard"
    component={ExpenseDashboardPage}
   />
   <Route

    component={NotFoundPage}
   />
  </Switch>
 </div>

</Router>

);




export default AppRouter;

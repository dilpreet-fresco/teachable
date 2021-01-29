import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from '../../routes';
import asyncComponent from './asyncComponent';
import AdminRoute from './AdminRoute';

function RoutesComponent() {
  const { currentUser, loadingInit } = useSelector(state => state.auth);

  return (
    <Switch>
      {routes.publicRoutes.map(route => {
        return (
          <Route
            key={route}
            path={route.path}
            exact={route.exact}
            component={asyncComponent(route.component)}
          />
        );
      })}

      {/* AMDIN ROUTES */}
      {routes.adminRoutes.map(route => {
        return (
          <AdminRoute
            key={route}
            path={route.path}
            exact={route.exact}
            currentUser={currentUser}
            loadingInit={loadingInit}
            component={asyncComponent(route.component)}
          />
        );
      })}
    </Switch>
  );
}

export default RoutesComponent;

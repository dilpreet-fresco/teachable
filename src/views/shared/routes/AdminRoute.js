import { Redirect, Route } from 'react-router-dom';

import Loading from '../loading';

const AdminRoute = ({
  component: Component,
  loadingInit,
  currentUser,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (loadingInit) {
        return <Loading />;
      }

      if (!currentUser || currentUser === null) {
        return <Redirect to="/admin/login" />;
      }

      return <Component {...props} />;
    }}
  />
);

export default AdminRoute;

import { signinFromAuthChange, ADMIN_AUTH_INIT_FAIL } from './authActions';

export default store => {
  try {
    store.dispatch(signinFromAuthChange());
  } catch (err) {
    console.log(err);
    store.dispatch({ type: ADMIN_AUTH_INIT_FAIL });
  }
};

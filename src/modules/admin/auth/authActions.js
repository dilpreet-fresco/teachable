import service from './authService';
import Errors from '../../shared/errors/errors';

export const ADMIN_AUTH_START = 'ADMIN_AUTH_START';
export const ADMIN_AUTH_DONE = 'ADMIN_AUTH_DONE';
export const ADMIN_AUTH_FAIL = 'ADMIN_AUTH_FAIL';
export const ADMIN_AUTH_LOGOUT = 'ADMIN_AUTH_LOGOUT';
export const ADMIN_AUTH_INIT_START = 'ADMIN_AUTH_INIT_START';
export const ADMIN_AUTH_INIT_SUCCESS = 'ADMIN_AUTH_INIT_SUCCESS';
export const ADMIN_AUTH_INIT_FAIL = 'ADMIN_AUTH_INIT_FAIL';
export const ERROR_MESSAGE_CLEARED = 'ERROR_MESSAGE_CLEARED';

const authStart = () => {
  return {
    type: ADMIN_AUTH_START,
  };
};

const authSuccess = currentUser => {
  return {
    type: ADMIN_AUTH_DONE,
    payload: {
      currentUser: currentUser,
    },
  };
};

const authFail = errors => {
  service.signout();
  return {
    type: ADMIN_AUTH_FAIL,
    payload: Errors.selectMessage(errors),
  };
};

const authInitStart = () => {
  return {
    type: ADMIN_AUTH_INIT_START,
  };
};

const authInitSuccess = currentUser => {
  return {
    type: ADMIN_AUTH_INIT_SUCCESS,
    payload: {
      currentUser,
    },
  };
};

const authInitFail = errors => {
  return {
    type: ADMIN_AUTH_INIT_FAIL,
    payload: Errors.selectMessage(errors),
  };
};

const checkAuthTimeout = expiresIn => {
  return dispatch => {
    setTimeout(() => {
      dispatch(authFail());
    }, expiresIn * 1000);
  };
};

export const clearErrorMessage = () => {
  return {
    type: ERROR_MESSAGE_CLEARED,
  };
};

export const signinWithEmailAndPassword = ({ email, password }) => {
  return async dispatch => {
    try {
      dispatch(authStart());

      const { data } = await service.signinWithEmailAndPassword({
        email,
        password,
      });

      const { _id, token, expiresIn } = data.user;
      service.saveAuthToStorage(token, _id, expiresIn);
      dispatch(authSuccess(data.user));
      dispatch(checkAuthTimeout(expiresIn));
    } catch (err) {
      if (Errors.errorCode(err.response) !== 400) {
        Errors.handle(err.response);
      }

      dispatch(authFail(err.response));
    }
  };
};

export const signinFromAuthChange = () => {
  return async dispatch => {
    try {
      dispatch(authInitStart());
      const { token, expirationDate } = service.getAuthFromStorage();

      if (!token || !expirationDate) {
        return dispatch(authInitFail());
      }

      if (new Date(expirationDate) <= new Date()) {
        return dispatch(authInitFail());
      }

      const user = await service.fetchMe(token);
      const expiresIn =
        new Date(new Date(expirationDate).getTime() - new Date().getTime()) /
        1000;

      if (!user) {
        // console.log('THIS');
        return dispatch(authInitFail());
      }

      user.token = token;
      user.expiresIn = expiresIn;

      dispatch(checkAuthTimeout(expiresIn));
      dispatch(authInitSuccess(user));
    } catch (err) {
      console.log(err);
      dispatch(authInitFail());
      dispatch(authFail());
    }
  };
};

export const signout = () => {
  return async dispatch => {
    try {
      dispatch(authStart());
      await service.signout();

      dispatch({
        type: ADMIN_AUTH_DONE,
        payload: {
          currentUser: null,
        },
      });
    } catch (err) {
      Errors.handle(err);

      dispatch({
        type: ADMIN_AUTH_FAIL,
      });
    }
  };
};

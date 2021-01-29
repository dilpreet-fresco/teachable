import {
  ADMIN_AUTH_DONE,
  ADMIN_AUTH_FAIL,
  ADMIN_AUTH_INIT_START,
  ADMIN_AUTH_INIT_FAIL,
  ADMIN_AUTH_INIT_SUCCESS,
  ADMIN_AUTH_START,
  ERROR_MESSAGE_CLEARED,
} from './authActions';

const initialState = {
  currentUser: null,
  // currentUser: {
  //   id: 'userId',
  //   firstName: 'Dilpreet',
  //   email: 'test@test.com',
  //   emailVerified: true,
  //   token: 'SOME TOKEN',
  //   expiresIn: 3600
  // },
  loading: false,
  loadingInit: false,
  errorMessage: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ERROR_MESSAGE_CLEARED:
      return {
        ...state,
        errorMessage: null,
      };
    case ADMIN_AUTH_START:
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case ADMIN_AUTH_FAIL:
      return {
        ...state,
        loading: false,
        currentUser: null,
      };
    case ADMIN_AUTH_DONE:
      return {
        ...state,
        loading: false,
        errorMessage: null,
        currentUser: { ...payload.currentUser },
      };
    case ADMIN_AUTH_INIT_START:
      return {
        ...state,
        loadingInit: true,
      };
    case ADMIN_AUTH_INIT_SUCCESS:
      return {
        ...state,
        loadingInit: false,
        currentUser: payload.currentUser || null,
      };
    case ADMIN_AUTH_INIT_FAIL:
      return {
        ...state,
        loadingInit: false,
        currentUser: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;

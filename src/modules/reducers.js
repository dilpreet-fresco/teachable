import { combineReducers } from 'redux';

import adminAuth from './admin/auth/authReducer';

export default () =>
  combineReducers({
    auth: adminAuth,
  });

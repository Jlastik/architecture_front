import { combineReducers } from 'redux';

import { authStore, AUTH_STORE_NAME } from '../../lib/common/auth';
import { langStore, LANG_STORE_NAME } from '../../lib/common/lang';
import { signupStore, SIGNUP_STORE_NAME } from '../../core/signup';
import { homeStore, HOME_STORE_NAME } from '../../core/home';

import {
  navigationStore,
  NAVIGATION_STORE_NAME,
} from '../../lib/common/navigation';

export const reducers = combineReducers({
  [AUTH_STORE_NAME]: authStore,
  [LANG_STORE_NAME]: langStore,
  [NAVIGATION_STORE_NAME]: navigationStore,
  [SIGNUP_STORE_NAME]: signupStore,
  [HOME_STORE_NAME]: homeStore,
});

export { initStore } from './store.core';

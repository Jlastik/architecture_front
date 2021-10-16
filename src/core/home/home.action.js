import { httpRequest } from '../../main/http';
import { setCurrentAuthCookie, authDecode } from '../../main/auth/auth.core';
import { HOME_ACTION_TYPE } from './home.type';
import { HOME_API } from './home.constant';
import { getBrowserCookie } from 'src/main/cookie';

export function homeUploadAccountData() {
  return async (dispatch) => {
    dispatch({ type: HOME_ACTION_TYPE.SET_LIST_UPDATE });

    try {
      setCurrentAuthCookie();
      const token = getBrowserCookie('AUTH_COOKIE');
      const result = await httpRequest.get(HOME_API.HOME_ACCOUNT_API.PATH, {
        params: authDecode(token),
      });

      dispatch({
        type: HOME_ACTION_TYPE.SET_LIST_UPDATE_SUCCESS,
        data: result.data,
      });
    } catch (error) {
      dispatch({
        type: HOME_ACTION_TYPE.SET_LIST_UPDATE_ERROR,
        errorMessage: error.response?.data?.message,
      });
    }
  };
}

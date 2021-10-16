import { httpRequest } from '../../main/http';
import { SIGNUP_ACTION_TYPE } from './signup.type';
import { SIGNUP_API } from './signup.constants';
import { authSetData } from '../../lib/common/auth/auth.action';
import { redirect } from '../../main/navigation';
import { SIGNUP_REDIRECT_ON_LOGGED } from './signup.constants';

export function signupFormUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: SIGNUP_ACTION_TYPE.SET_FORM_UPLOAD_LOADING,
    });

    try {
      const result = await httpRequest({
        method: SIGNUP_API.SIGNUP_FORM_UPLOAD.METHOD,
        url: SIGNUP_API.SIGNUP_FORM_UPLOAD.PATH,
        data: data,
      });
      dispatch(authSetData(result.data.accessToken));

      dispatch({
        type: SIGNUP_ACTION_TYPE.SET_FORM_UPLOAD_SUCCESS,
      });

      redirect(SIGNUP_REDIRECT_ON_LOGGED);
    } catch (error) {
      dispatch({
        type: SIGNUP_ACTION_TYPE.SET_FORM_UPLOAD_ERROR,
        errorMessage: error.response?.data?.message,
      });
    }
  };
}

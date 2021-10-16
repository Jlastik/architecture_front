import { HOME_ACTION_TYPE } from './home.type';
import {
  initRequestWithDataState,
  setRequestUpdatePending,
  setRequestUpdateSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  userList: initRequestWithDataState(),
};

export function homeStore(state = initialState, action) {
  switch (action.type) {
    case HOME_ACTION_TYPE.SET_LIST_UPDATE:
      return {
        ...state,
        userList: setRequestUpdatePending(state.userList),
      };
    case HOME_ACTION_TYPE.SET_LIST_UPDATE_SUCCESS:
      return {
        ...state,
        userList: setRequestUpdateSuccess(state.userList, action.data),
      };
    case HOME_ACTION_TYPE.SET_LIST_UPDATE_ERROR:
      return {
        ...state,
        userList: setRequestError(state.userList, action.errorMessage),
      };
    default:
      return state;
  }
}

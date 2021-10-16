import React from 'react';
import {
  SignupFormValidation,
  SIGNUP_FORM_FIELD_NAME,
  SIGNUP_FIELD_NAME,
} from './index';
import { SignupComponent } from './signup.component';
import { useDispatch, useSelector } from 'react-redux';
import { signupFormUploadData } from './signup.action';
import { convertSignupFormData } from './signup.convert';
import { SIGNUP_STORE_NAME } from './signup.constants';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestSuccess,
  isRequestPending,
} from '../../main/store/store.service';

export function SignupContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[SIGNUP_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME],
  }));

  const signupFormSendData = (values) => {
    const data = convertSignupFormData(values);

    dispatch(signupFormUploadData(data));
  };

  const signupFormInitialValue = () => {
    return {
      [SIGNUP_FIELD_NAME.LOGIN]: '',
      [SIGNUP_FIELD_NAME.PASSWORD]: '',
    };
  };
  return (
    <SignupComponent
      isPending={isRequestPending(state.signupForm)}
      isError={isRequestError(state.signupForm)}
      isSuccess={isRequestSuccess(state.signupForm)}
      errorMessage={getRequestErrorMessage(state.signupForm)}
      validate={SignupFormValidation}
      initialValue={signupFormInitialValue()}
      onSubmitForm={signupFormSendData}
      fieldName={SIGNUP_FORM_FIELD_NAME}
      pageLoading={pageLoading}
    />
  );
}

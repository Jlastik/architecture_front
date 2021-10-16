import React from 'react';
import { Formik } from 'formik';
import { SignupFormComponent } from './signup-form.component';
import { SIGNUP_FORM_FIELD_KEY } from '.';

export function SignupFormContainer(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    validate,
    initialValue,
    onSubmitForm,
    fieldName,
    pageLoading,
  } = props

  const LOGIN_NAME = fieldName[SIGNUP_FORM_FIELD_KEY.LOGIN];
  const PASSWORD_NAME = fieldName[SIGNUP_FORM_FIELD_KEY.PASSWORD];

  return (
    <div>
      <Formik
        initialValues={initialValue}
        validate={validate}
        onSubmit={onSubmitForm}
      >
        {(formikProps) => (
          <SignupFormComponent
            {...formikProps}
            fieldLogin={LOGIN_NAME}
            fieldPassword={PASSWORD_NAME}
            isPending={isPending}
            isError={isError}
            isSuccess={isSuccess}
            errorMessage={errorMessage}
            pageLoading={pageLoading}
          />
        )}
      </Formik>
    </div>
  );
}

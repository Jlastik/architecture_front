import React from 'react';
import styled from 'styled-components';
import { FieldPrimary } from '../../../../lib/elements/field';
import { FieldLayout } from '../../../../lib/elements/layout';

export function SignupFormComponent(props) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,

    isPending,
    isError,
    isSuccess,
    errorMessage,

    pageLoading,

    fieldLogin,
    fieldPassword,
  } = props;

  const isFieldError = (name) => {
    const errorMessage = errors[name] && touched[name] && errors[name];
    return errorMessage;
  };

  const isSubmitDisable = () => {
    return isPending || isSuccess;
  };
  return (
    <form onSubmit={handleSubmit}>
      <Container>
        {!pageLoading && 'Page loading....'}
        <FieldLayout>
          <FieldPrimary
            titleTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.TITLE"
            plcaeholderTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.PLACEHOLDER"
            name={fieldLogin}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldLogin]}
            error={isFieldError(fieldLogin)}
          />
          <FieldPrimary
            type="password"
            titleTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.TITLE"
            plcaeholderTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.PLACEHOLDER"
            name={fieldPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldPassword]}
            error={isFieldError(fieldPassword)}
          />
        </FieldLayout>
        <Button type="submit" disabled={isSubmitDisable()}>
          Submit
        </Button>
        {isPending && 'Loading'}
        {isError && errorMessage}
      </Container>
    </form>
  );
}

const Container = styled.div`
  display: grid;
  gap: 12px;
`;

const Button = styled.button`
  background-color: #6dbaff;
  padding: 5px;
  border-radius: 15px;
`;

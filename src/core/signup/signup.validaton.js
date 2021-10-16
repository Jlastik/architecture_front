export function SignupFormValidation(values) {
  const errors = {};
  if (!values.login) {
    errors.login = 'Required';
  }
  return errors;
}
